import express from "express";

import { getAllFriends } from "../controllers/friends.controller.js";
import { getSpecificFriend } from "../controllers/friends.controller.js";
import { postFriend } from "../controllers/friends.controller.js";
import { deleteFriend } from "../controllers/friends.controller.js";


const friendsRouter = express.Router();

friendsRouter.get("/", getAllFriends)
friendsRouter.get('/:id', getSpecificFriend)
friendsRouter.post('/', postFriend)
friendsRouter.delete('/:id', deleteFriend)

export default friendsRouter;
