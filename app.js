const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const database = require('./config/database')

//middlewares
app.use(cors());
app.use(helmet())
app.use(morgan('common'))

//database
database()

//routes 
app.use("/api", require("./routes/index"))



module.exports=app;