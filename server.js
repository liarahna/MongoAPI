const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to my mongoAPI");

});
app.post("/", (req, res) =>{
    res.send("This is a post request");
});
 

mongoose.
connect("mongodb+srv://lia:admin@heliasapi.nfp20.mongodb.net/Products-API?retryWrites=true&w=majority&appName=HeliasAPI")
.then(() => {
    console.log("connected to mongo");
    app. listen(PORT, () => {
        console.log("listening to 3000");
        });
});