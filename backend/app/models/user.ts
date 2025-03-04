import { DateTime } from 'luxon'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, beforeCreate, hasMany, beforeSave } from '@adonisjs/lucid/orm'
import { v4 as uuidv4 } from 'uuid'
import Report from '#models/report'
import hash from '@adonisjs/core/services/hash'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  declare userId: string

  @beforeCreate()
  static assignUuid(user: User) {
    user.userId = uuidv4()
  }

  @column()
  declare username: string

  @column()
  declare email: string

  @column()
  declare password: string

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await hash.make(user.password)
    }
  }

  @hasMany(() => Report, {
    foreignKey: 'userId',
  })
  declare reports: HasMany<typeof Report>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
