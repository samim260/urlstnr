const router = require("express").Router()
const { successResponse } = require('../utils/index')

router.route('/').get((req, res) => {
    successResponse(res, "server is running")
})

router.use('/user', require('./user'))


module.exports = router