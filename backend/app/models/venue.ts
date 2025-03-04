import { DateTime } from 'luxon'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, beforeCreate, hasMany } from '@adonisjs/lucid/orm'
import { v4 as uuidv4 } from 'uuid'
import Report from '#models/report'

export default class Venue extends BaseModel {
  static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  declare venueId: string

  @beforeCreate()
  public static assignUuid(venue: Venue) {
    venue.venueId = uuidv4()
  }

  @column()
  declare name: string

  @column()
  declare address: string

  @column()
  declare city: string

  @column()
  declare province: string

  @column()
  declare postal_code: string

  @column()
  declare country: string

  @column()
  declare description: string

  @column()
  declare capacity: number

  @column()
  declare cover_image: string

  @hasMany(() => Report, {
    foreignKey: 'venueId',
  })
  declare reports: HasMany<typeof Report>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
