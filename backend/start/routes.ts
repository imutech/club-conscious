/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import router from '@adonisjs/core/services/router'
import UsersController from '#controllers/users_controller'
import VenuesController from '#controllers/venues_controller'
import ReportsController from '#controllers/reports_controller'

/**  
 * Global middleware
 * @note Auth middleware should be enabled but cokies in react native is not implemented might need to role out auth ex
 * .use(middleware.auth())
 */

/*  User routes
 */
router.post('users/create', [UsersController, 'create'])
router.post('users/authenticate', [UsersController, 'authenticate'])
router.post('users/getTodaysReportForVenue', [UsersController, 'getTodaysReportForVenue'])
router.get('users/logOut', [UsersController, 'logOut'])

/*  Venue routes
 */
router.get('venues', [VenuesController, 'getVenues'])

/*  Report routes
 */
router.post('reports/startReport', [ReportsController, 'startReport'])
router.post('reports/updateReport', [ReportsController, 'updateReport'])
router.post('reports/getReport', [ReportsController, 'getReport'])

/* Health check
 */
router.get('health', async () => {
  return {
    status: 'ok',
  }
})

/*  Testing routes
 */
router.get('/testing3', async () => {
  return {
    ci: 'PAT is working',
  }
})

router.get('/', async () => {
  return {
    hello: 'Hello World',
  }
})
