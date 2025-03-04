import vine from '@vinejs/vine'

export const createUserValidator = vine.object({
  username: vine.string(),
  email: vine.string().email(),
  password: vine.string().minLength(8),
})

export const authenticateUserValidator = vine.object({
  username: vine.string(),
  password: vine.string().minLength(8),
})
