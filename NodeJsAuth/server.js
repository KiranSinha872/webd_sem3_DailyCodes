// require (app.js);
//env 
//port
//server run karte hain


const express=require("express");
const bcrypt=require("bcrypt");
const jwt = require("jsonwebtoken");
const auth=require("./middleware/auth");
const cors=require("cors");


const app=express();



app.use(cors());
app.get("/",(req,res)=>{
// const token ="#238375@_we3937y";
const token= jwt.sign(
    {
        userId: "saif99",
        role: "student"
    },
    "saif0@123",
    {
        expiresIn: "1d"
        //1 day bad token expire hoga
    }
);

console.log(token);
res.cookie("session_id",token);
res.json({
    message: "Login successful",
    // token:token
    token
});



app.get("/dashbaord", auth, (req, res) => {

    console.log(req.user);

    res.json({
        message: "Welcome to cart",
        userId: req.user.userId
    });
});
// app.get("/dashboard",auth,(req,res)=>{
//     console.log("proyected route using auth middleware");
//     res.send("on dashboard");
// })

// Hashing password
// const password="harsh123";
// const hashedPassword=await bcrypt.hash(password,10);

// // Comparing password
// const isMatch=await bcrypt.compare("harsh124",hashedPassword);
// console.log(isMatch)
//     res.send("home page");
// })
});


app.listen(3000,()=>{
    console.log("server is running at 3000");
})