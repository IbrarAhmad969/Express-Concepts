const express = require("express");
const cluster = require('node:cluster');
const os = require('node:os')

const app = express();

app.get("/", (req, res) => {
    res.send(`Performance Example ${process.pid}`);
});

app.get("/timer", (req, res) => {
    // Non-blocking delay
    setTimeout(() => {
        res.send(`Ding Ding Ding ${process.pid}`);
    }, 9000);
});

if (cluster.isPrimary) {
    console.log(`Master started ${process.pid}`);
    const NUM_WORKERS = os.cpus().length;
    console.log(NUM_WORKERS);
    for (let i = 0; i < NUM_WORKERS; i++) { 
        cluster.fork();
    }
} else {
    console.log(`Worker started ${process.pid}`);
    app.listen(3000);
}