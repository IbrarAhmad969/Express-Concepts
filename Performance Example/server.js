const express = require("express");
const cluster = require('cluster');

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
    cluster.fork();
    cluster.fork();
} else {
    console.log(`Worker started ${process.pid}`);
    app.listen(3000);
}