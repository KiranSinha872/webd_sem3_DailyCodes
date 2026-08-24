const express = require("express");
const app = express();
const { auth, status } = require("./middleware/auth"); //destructuring { }
const { premium } = require("./middleware/premium");

const cookieParser = require("cookie-parser")

const port = 3001;



app.use((req, res, next) => {   //route nhi hai to har request me run chalega
    console.log("universal middleware..");
    next();
})



app.use("/kiran", (req, res, next) => {
    res.send("kiran middleware.");//render hoga browser me

    console.log("kiran middleware..");
    next();

})


const login = (req, res, next) => {
    console.log("login middleware....")
    next();
}



app.use(cookieParser());

app.get("/", auth, (req, res) => {
    console.log(status);
    console.log(req.cookies);
    res.send(req.cookies);
})



app.get("/jiopremium", premium, (req, res) => {
    res.send("premium page");

})


app.use("/item", (req, res, next) => {
    res.send("item middleware.");//render hoga browser me

    console.log("item middleware..");
    next();

})
app.listen(port, () => {
    console.log(`sever is runninng at port no ${port}`);
})