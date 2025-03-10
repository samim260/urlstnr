const app = require('./app')
const http = require("http");
const {PORT} = require("./config/_config")
const cluster = require("cluster")
const os = require('os');

const server = http.createServer(app);


if(cluster.isMaster){
    const cpuS = os.cpus().length;
    console.log(`Master process ${process.pid} is running`);
    // Fork workers
    for (let i = 0; i < cpuS; i++) {
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
        console.log('Starting a new worker');
        cluster.fork();
    });
}else{
    server.listen(PORT , ()=>{
        console.log(`app is running on port ${PORT} and process ${process.pid}`)
    })
}
