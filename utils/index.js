const successResponse = (res, message = '', status=200,data = []) => {
    res.status(status).json({ message, data })
}
const errorResponse = (res , message , status) =>{
    res.status(status).json({message})
}
const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email.trim());
};



module.exports = { successResponse , errorResponse, isValidEmail }