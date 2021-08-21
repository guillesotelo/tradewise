const express = require('express')
const router = express.Router()
const auth = require('../middlewares/jwt')

const userRoutes = require('./users')
const authRoutes = require('./auth')

router.use('/auth', authRoutes)
router.use('/users', auth, userRoutes)

module.exports = router