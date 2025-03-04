const db = require("../models/index")
const {successResponse, errorResponse, isValidEmail} = require('../utils/index')
const bcrypt = require('bcryptjs')

const signup = async (req,res)=>{
    const userModel = db.Users;
    try {
        const {email,password,name} = req.body
        if(!email || !password || !name){
            return errorResponse(res,"Name, Email, and Password are required", 400)
        }
        if(!isValidEmail(email)){
            return errorResponse(res,"Invalid email format", 400)
        }
        const isExist = await userModel.findOne({where : {email}});
        if(isExist){
            return errorResponse(res,"Email already exist", 400)
        }
        let hashedPassword = await bcrypt.hash(password,8);
        const user = await userModel.create({
            name,
            email,
            password : hashedPassword
        })

        return successResponse(res,"Signup successful",201, {
            id : user.id,
            name : user.name,
            email : user.email,
        })
        
    } catch (error) {
        console.log(error)
        errorResponse(res,"something went wrong", 500)
    }
}

module.exports= {signup}