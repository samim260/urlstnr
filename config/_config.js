require("dotenv").config();

module.exports={
    PORT : process.env.PORT,
    DB : process.env.DB,
    DB_USER : process.env.DB_USER,
    DB_PASS : process.env.DB_PASS,
    DB_HOST : process.env.DB_HOST,
    DB_DIALECT : process.env.DB_DIALECT,
    JWT_SECRET : process.env.JWT_SECRET,
}