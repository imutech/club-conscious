import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string("user_id").primary().notNullable().unique();
      table.string("username", 50).notNullable().unique();
      table.string("email", 254).notNullable().unique();
      table.string("password", 255).notNullable();
      
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}