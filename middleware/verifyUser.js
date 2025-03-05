const { decodeJwtToken, errorResponse } = require('../utils/index')

module.exports = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        if(token){
            const token_data = decodeJwtToken(token);
            req.token_data = token_data
        }else{
           return errorResponse(res,"invalid token", 401)
        }
        next();
    }
    catch (error) {
        errorResponse(res,"invalid token", 401)
    }
}
