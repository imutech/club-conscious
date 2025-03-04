import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'venues'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('venue_id', 36).primary().notNullable().unique()
      table.string('name', 50).notNullable()
      table.string('address', 100).notNullable()
      table.string('city', 50).notNullable()
      table.string('province', 100).notNullable()
      table.string('postal_code', 32).notNullable()
      table.string('country', 50).notNullable()
      table.string('description', 3000).nullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
