import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  async up() {
    this.schema.alterTable('venues', (table) => {
      table.integer('capacity').notNullable().defaultTo(0),
        table.string('cover_image', 255).nullable()
    })
  }

  async down() {
    this.schema.alterTable('venues', (table) => {
      table.dropColumn('capacity'), table.dropColumn('cover_image')
    })
  }
}
