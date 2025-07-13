import express from "express";
const app = express();

const PORT = 3000;

app.use(express.json());


const chirps = [
  {
    id: 1,
    user: "ibzy_dev",
    text: "First chirp, let's gooo ",
  },
  {
    id: 2,
    user: "Ibrar Ahmad",
    text: "This is the second Chirp, let's move further",
  },
];

app.use((req, res, next)=>{

    const start = Date.now()
    next();
    const endTime = Date.now();
    const totalTime = endTime - start;
    console.log(`The Method is ${req.method} - the URL is ${req.url} and total time spend in MS  is ${totalTime}`)

})

app.get("/chirps", (req, res) => {
  res.status(200).json(chirps);
});

app.get('/chirp/:id', (req, res)=>{
    const chirpId = Number(req.params.id)

    const chirpData = chirps.find((chirp)=> chirp.id === chirpId);


    if(chirpData){
        res.status(200).json(chirpData)
    }
    else{
        res.status(402).json("Not Found");
    }
})

app.post('/chirp', (req, res)=>{
    const {user, text} = req.body;

    if(!user || !text){
        return res.status(400).json({
            error: "User and Text are required"
        })
    }

    const newChrip = {
        id: chirps.length+1,
        user,
        text,
    }

    chirps.push(newChrip);
    console.log(chirps);
    res.status(201).json(newChrip);
     
})
app.delete('/chirp/:id', (req, res)=>{
    const id = Number(req.params.id);

    const index = chirps.findIndex((chirp)=> chirp.id===id);

    if(index==-1){
        return res.status(404).json({
            error: "No index found"
        })
    }

    const deletedIndex = chirps.splice(index, 1);
    console.log(chirps);
    res.status(200).json({
        message: "Chirp deleted Successfully"

    })
})


app.listen(PORT, (req, res) => {
  console.log(`Server listening at PORT ${PORT}`);
});
