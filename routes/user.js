const { signup, login } = require("../controller/user");

const router = require("express").Router()

router.route('/').post(signup).get(login);


module.exports = router