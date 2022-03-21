const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/march_2022_sundaes", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("yo you're connected to the freakin database"))
    .catch(err=>console.log("beep boop bop, db connection was a flop", err))