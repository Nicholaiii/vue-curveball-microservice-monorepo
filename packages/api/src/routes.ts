import router from '@curveball/router'

/* Controllers */
import homeController from './home/controller'

export default [
  router('/', homeController)
]
