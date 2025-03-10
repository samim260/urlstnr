const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const {connectDataBase} = require('./config/database')
const {rateLimit} = require("express-rate-limit")


const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 150, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
})
//middlewares

//security 
app.use(cors());
app.use(helmet())
app.use(limiter)



//logger
app.use(morgan('dev'))
//body parser
app.use(express.json())
app.use(express.urlencoded({extended : false}))

//database
connectDataBase()

//routes 
app.use("/api", require("./routes/index"))

module.exports=app;