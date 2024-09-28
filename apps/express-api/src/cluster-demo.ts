// To take advantage of multi-core systems, the user will sometimes want to launch a cluster of Node.js processes to handle the load.
// The master process can distribute the load to the child process.

import { signal } from '@angular/core';
import cluster from 'node:cluster';
import http from 'node:http';
import { availableParallelism } from 'node:os';
import process from 'node:process';

const numCPUs = availableParallelism();

if(cluster.isPrimary){
    console.log(`Primary ${process.pid} is running`);

    // Fork workers
    for( let i=0; i< numCPUs; i++) {
        cluster.fork(); // create child(worker) processes that can share server ports
    }

    cluster.on('exit', (worker, code, signal)=>{
        console.log(`worker ${worker.process.pid} died`);
    });
} else {
    // Workers can share any TCP connection
    // In this case, it is an HTTP server
    http.createServer((req, res)=>{
        res.writeHead(200);
        res.end('hello world\n');
    }).listen(8000);

    console.log(`Worker ${process.pid} started`);
}