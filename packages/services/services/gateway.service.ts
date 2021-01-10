import { Service, ServiceBroker } from 'moleculer'
import { Server } from 'http'

import { Application, Context, Middleware } from '@curveball/core'
import bodyParser from '@curveball/bodyparser'
import router from '@curveball/router'

export default class ApiService extends Service {
  private app: Application
  private server: Server

	public constructor(broker: ServiceBroker) {
    super(broker)

		// @ts-ignore
		this.parseServiceSchema({
			name: 'gateway',
			settings: {
				port: process.env.PORT || 4000,
      },
      /* Methods *must* be added here */
			methods: {
        listPeople: this.listPeople
      },
      created: this.created,
      started: this.started,
      stopped: this.stopped
		})
  }

  async created () {
    this.logger.info('Creating Gateway service')
    this.app = new Application()
    this.app.use(bodyParser())
    this.app.use(...this.routes())
  }

  async started () {
    this.logger.info('Gateway starting')
    this.server = this.app.listen(this.settings.port)
  }

  async stopped () {
    this.logger.info('Gateway stopped')
    this.server.close()
  }

  routes (): Middleware[] {
    return [
      router('/people', this.listPeople)
    ]
  }

  async listPeople (ctx: Context) {
    ctx.response.body = await this.broker.call('people.list')
  }
}
