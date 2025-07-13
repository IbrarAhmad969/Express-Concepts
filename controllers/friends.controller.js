import model from "../models/friends.model.js";

function getAllFriends(_, res) {
     
    res.status(200).json(model);
}
function getSpecificFriend(req, res) {
    const friendId = Number(req.params.id)

    const friendData = model.find((friend) => friend.id === friendId);
    if (friendData) {
        res.status(200).json(friendData)
    }
    else {
        res.status(402).json("Not Found");
    }
}

function postFriend(req, res) {
    const { user, text } = req.body;
    if (!user || !text) {
        return res.status(400).json({
            error: "User and Text are required"
        })
    }
    const newFriend = {
        id: model.length + 1,
        user,
        text,
    }
    model.push(newFriend);
    console.log(newFriend);
    res.status(201).json(newFriend);
}
function deleteFriend(req, res) {

    const id = Number(req.params.id);
    const index = model.findIndex((friend) => friend.id === id);

    if (index == -1) {
        return res.status(404).json({
            error: "No index found"
        })
    }
    const deletedIndex = model.splice(index, 1);
    console.log(friends);
    res.status(200).json({
        message: "friend deleted Successfully"

    })
}

export {
    getAllFriends,
    getSpecificFriend,
    postFriend,
    deleteFriend,
}