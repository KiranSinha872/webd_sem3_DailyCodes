//COOKIES


const express = require("express");
const app = express();

const { auth, status } = require("./middleware/auth"); // destructuring { }
// const { premium } = require("./middleware/premium"); // unnecessary for now

const cookieParser = require("cookie-parser");

const port = 3001;


// Cookie parser
app.use(cookieParser("kir123")); // secret key


// Home route
app.get("/", auth, (req, res) => {

    const username = req.signedCookies.username;

    if (username === "kiransinha") {

        console.log("valid user");
        console.log(username);

    } else {

        console.log("invalid user");
        return res.send("Invalid user");

    }

    res.send("home route...");
});


// Start server
app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
});