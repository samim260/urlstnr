const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const {connectDataBase} = require('./config/database')

//middlewares
app.use(cors());
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended : false}))

//database
connectDataBase()

//routes 
app.use("/api", require("./routes/index"))

module.exports=app;