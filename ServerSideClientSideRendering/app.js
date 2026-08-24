const express = require("express");
const app = express();
const fs = require("fs");

const path = require("path");
const cors=require("cors");


const students = require("./MOCK_DATA.json");
// console.log(data);
app.use(cors());
const port = 3000;


app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.send("home route....");
})

app.get('/getdata', (req, res) => {
    // res.render("index",{students});  //SSR nahi karna h
    res.send(students);
})


app.listen(port, () => {
    console.log(`server running at ${port} `);
})