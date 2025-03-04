import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import UserService from '#services/UserService'
import { IAuthenticatedUser } from '#entities/interfaces/IUser'
import { authenticateUserValidator, createUserValidator } from '#validators/user_validator'
import vine from '@vinejs/vine'
@inject()
export default class UsersController {
  constructor(protected userService: UserService) {}

  
  public async create({ request, response }: HttpContext) {
    try {
      let newUser = request.body()
      const validator = vine.compile(createUserValidator)
      newUser = await validator.validate(newUser)
      const createdUser = await this.userService.create(newUser)
      response.json(createdUser)
    } catch (error) {
      console.log(error)
      response.status(500).send('User not created')
    }
  }

  public async authenticate({ request, auth, response }: HttpContext) {
    try {
      let userCredentials = request.body() as IAuthenticatedUser

      const validator = vine.compile(authenticateUserValidator)
      userCredentials = await validator.validate(userCredentials)

      const authenticatedUser = await this.userService.authenticate(userCredentials)

      await auth.use('web').login(authenticatedUser)

      response.json(authenticatedUser)
    } catch (error) {
      console.log(error)
      response.status(401).json({
        message: 'Invalid credentials',
      })
    }
  }

  public async logOut({ auth, response }: HttpContext) {
    try {
      await auth.use('web').logout()
      response.json({
        message: 'Logged out',
      })
    } catch (error) {
      console.log(error)
      response.status(500).json({
        message: 'Log out failed',
      })
    }
  }

  public async getTodaysReportForVenue({ request, response }: HttpContext) {
    try {
      const venueId: string = request.input('venueId')
      const userId: string = request.input('userId')
      if (!venueId || !userId) {
        throw new Error('Missing venueId or userId')
      }
      const todaysReport = await this.userService.getTodaysReportForVenue(venueId, userId)
      response.json(todaysReport)
    } catch (error) {
      console.log(error)
      response.status(500).json({
        message: 'Todays report not found',
        error: error.message,
      })
    }
  }
}
