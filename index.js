import express from "express";
import { getAllFriends } from "./controllers/friends.controller.js";
import { getSpecificFriend } from "./controllers/friends.controller.js";
import { postFriend } from "./controllers/friends.controller.js";
import { deleteFriend } from "./controllers/friends.controller.js";

const app = express();

const PORT = 3000;

app.use(express.json());

app.use((req, res, next) => {

    const start = Date.now()
    next();
    const endTime = Date.now();
    const totalTime = endTime - start;
    console.log(`The Method is ${req.method} - the URL is ${req.url} and total time spend in MS  is ${totalTime}`)

})

app.get("/friends", getAllFriends);
app.get('/friend/:id', getSpecificFriend)
app.post('/friends', postFriend)
app.delete('/friend/:id', deleteFriend)


app.listen(PORT, (req, res) => {
    console.log(`Server listening at PORT ${PORT}`);
});
