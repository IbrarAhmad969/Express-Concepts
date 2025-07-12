import express from 'express'
const app = express();

const PORT = 3000;

const friends = [
    {
        id: 1,
        name: "Newton",
    },
    {
        id: 2, 
        name: "Ibrar",
    },
    {
        id:3,
        name: "hammad",

    }
];

app.get('/friends', (req, res)=>{
    res.json(friends); // data is treated as JavaScript \ 

})
app.get('/friends/:id', (req, res)=>{
    const friendId = Number(req.params.id); //params gives you that ID.
    const friend = friends[friendId];


    if(friend){ 
        res.status(200).json(friend);
    }
    else{
        // what if /friend/2222/ no match found, express do it itself. 
        res.status(404).json({
            error: "Not Found"
        })
        
    } 
})
app.listen(PORT, (req, res)=>{
    console.log(`Server listening at PORT ${PORT}`);
})