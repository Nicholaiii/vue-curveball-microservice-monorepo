'use strict'
import {Context, Service, ServiceBroker, ServiceSchema} from 'moleculer'

import DbConnection from '../mixins/db.mixin'
import { Person } from '../../common/src/models/person'

export default class ProductsService extends Service{

	private DbMixin = new DbConnection(Person).start()

	// @ts-ignore
	public constructor(public broker: ServiceBroker, schema: ServiceSchema<{}> = {}) {
		super(broker)
		this.parseServiceSchema(Service.mergeSchemas({
			name: 'people',
			mixins: [this.DbMixin],
			settings: {
				// Available fields in the responses
				fields: [
					'_id',
					'name',
					'pets'
				],

				// Validator for the `create` & `insert` actions.
				entityValidator: {
					name: 'string|min:3',
				},
			},
			methods: {
				/**
				 * Loading sample data to the collection.
				 * It is called in the DB.mixin after the database
				 * connection establishing & the collection is empty.
				 */
				async seedDB() {
					await this.adapter.insertMany([
						{ name: 'Angela Davis', pets: [] },
						{ name: 'Rosa Luxemburg', pets: [] },
						{ name: 'Emma Goldman', pets: [] },
					])
				},
			},
			/**
			 * Loading sample data to the collection.
			async afterConnected() {
			 await this.adapter.collection.createIndex({ name: 1 });
			},
			 */
		}, schema))
	}
}
