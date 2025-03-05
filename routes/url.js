const router = require("express").Router()
const {shortenUrl, getAllUrl, getUrlById, updateUrlById, deleteUrlById} = require("../controller/url")
const verifyUser = require('../middleware/verifyUser')

router.route('/').post(verifyUser,shortenUrl).get(verifyUser,getAllUrl)
router.route('/:id').get(verifyUser, getUrlById).patch(verifyUser,updateUrlById)
.delete(verifyUser, deleteUrlById)

module.exports = router