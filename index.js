const app = require('./app')
const http = require("http");
const {PORT} = require("./config/_config")

const server = http.createServer(app);


server.listen(PORT , ()=>{
    console.log(`app is running on port ${PORT}`)
})