const express = require("express");
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

console.log(`Master started ${process.pid}`);
console.log(`Worker started ${process.pid}`);
app.listen(3000);
