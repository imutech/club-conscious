import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate, belongsTo } from '@adonisjs/lucid/orm'
import { v4 as uuidv4 } from 'uuid'

import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Venue from './venue.js'
import User from './user.js'

export default class Report extends BaseModel {
  @column({ isPrimary: true })
  declare reportId: string

  @beforeCreate()
  static assignUuid(report: Report) {
    report.reportId = uuidv4()
  }

  @column()
  declare peopleCount: number

  @column()
  declare maleCount: number

  @column()
  declare femaleCount: number

  @column()
  declare otherCount: number

  @column()
  declare atmosphere: string

  @column()
  declare comments: string

  @column()
  declare tags: string

  @column()
  declare venueId: string

  @belongsTo(() =>  Venue)
  declare venue: BelongsTo<typeof Venue>

  @column()
  declare userId: string

  @belongsTo(() =>  User)
  declare user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
