const { signup } = require("../controller/user");

const router = require("express").Router()

router.route('/').post(signup);


module.exports = router