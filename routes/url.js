const router = require("express").Router()
const {shortenUrl, getAllUrl, getUrlById, updateUrlById, deleteUrlById, redirctToUrl} = require("../controller/url")
const verifyUser = require('../middleware/verifyUser')

router.route('/').post(verifyUser,shortenUrl).get(verifyUser,getAllUrl)
router.route('/redirect/:id').get(redirctToUrl)
router.route('/manage/:id').get(verifyUser, getUrlById).patch(verifyUser,updateUrlById)
.delete(verifyUser, deleteUrlById)

module.exports = router