import friendsRouter from "./Routers/friends.router.js";
import express from 'express'
const app = express();
import path from "path";
const __dirname = path.resolve();

const PORT = 3000;

app.use(express.json());

app.use((req, res, next) => {

    const start = Date.now()
    next();
    const endTime = Date.now();
    const totalTime = endTime - start;
    console.log(`The Method is ${req.method} - the URL is ${req.baseUrl} and total time spend in MS  is ${totalTime}`)

})

app.use('/site', express.static(path.join(__dirname, 'public')))

app.use('/friends', friendsRouter);

app.listen(PORT, (req, res) => {
    console.log(`Server listening at PORT ${PORT}`);
});
