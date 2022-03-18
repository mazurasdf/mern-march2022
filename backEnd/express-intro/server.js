const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/api", (req,res)=>{
    console.log("trying to talk to database");
    res.json({message:"here is your response, sir"});
})

app.get("/api/other", (req,res)=>{
    console.log("getting other route");
    res.json(["here is item 0","you can put whatever you want in here!", new Date().getTime()]);
})

app.get("/api/repeat/:word", (req,res)=>{
    console.log("trying to talk to database");
    res.json({message:`here is your repeated word, sir: ${req.params.word}`});
})

app.post("/api/repeat", (req,res)=>{
    console.log("taking in post request");
    res.json(req.body);
})

app.listen(port, ()=>console.log(`Running on port ${port} is a new way I like to be!`));