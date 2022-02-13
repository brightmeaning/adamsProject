"use strict"

const express = require("express");
const app = express();
const PORT = 3030;
const home = require("./routes/home/main")

app.set("views", "./app/views");
app.set("view engine", "ejs");
// html layout 불러오기 : ! + Enter
app.use(express.static(`${__dirname}/js`));
app.use("/", home);

app.listen(PORT, ()=>{
    console.log("server opened");
});


module.exports = app;