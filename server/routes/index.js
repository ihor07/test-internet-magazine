const Router = require('express')
const router = new Router()
const deviceRouter = require('./deviceRouter')
const brandRouter = require('./brandRouter')
const userRouter = require('./userRouter')
const typeRouter = require('./typeRouter')
const checkRole = require('../middleware/checkRoleMiddleware')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', checkRole('ADMIN'), brandRouter)
router.use('/device', checkRole('ADMIN'), deviceRouter)

module.exports = router
