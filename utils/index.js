const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require('../config/_config')

const successResponse = (res, message = '', status = 200, data = []) => {
    res.status(status).json({ message, data })
}
const errorResponse = (res, message, status) => {
    res.status(status).json({ message })
}
const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email.trim());
};
const generateJwtToken = (data, exp = "1h") => {
    const token = jwt.sign(data, JWT_SECRET, { expiresIn: exp })
    return token;
}



module.exports = { successResponse, errorResponse, isValidEmail, generateJwtToken }