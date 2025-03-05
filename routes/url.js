const router = require("express").Router()
const {shortenUrl, getAllUrl} = require("../controller/url")
const verifyUser = require('../middleware/verifyUser')

router.route('/').post(verifyUser,shortenUrl).get(verifyUser,getAllUrl)

module.exports = router