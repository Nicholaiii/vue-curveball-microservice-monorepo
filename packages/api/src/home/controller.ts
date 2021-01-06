import Controller from '@curveball/controller'
import { Context } from '@curveball/core'

class HomeController extends Controller {

  get(ctx: Context) {
    ctx.response.body = {
      message: '@vcmm REST API gateway'
    }
  }

}

export default new HomeController()
