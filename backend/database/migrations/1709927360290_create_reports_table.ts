import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'reports'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('report_id').primary().notNullable().unique()
      table.integer('people_count').unsigned()
      table.integer('male_count').unsigned()
      table.integer('female_count').unsigned()
      table.integer('other_count').unsigned()
      table.string('atmosphere', 50).nullable()
      table.string('comments', 3000).nullable()
      table.json('tags').nullable()

      table
        .string('venue_id')
        .notNullable()
        .references('venues.venue_id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table
        .string('user_id')
        .notNullable()
        .references('users.user_id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
