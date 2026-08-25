const auth = (req, res, next) => {

    // login for authentication
    console.log("login middleware....");


    // These are unnecessary here because we are creating
    // the cookie from the /login route in app.js.

    res.cookie("username", "kiransinha");
    // res.cookie("state", "assam");
    // res.cookie("gender", "male");
    // res.cookie("id", "69011");


    const username = req.signedCookies.username;

    if (username === "kiransinha") {

        console.log("valid user");
        console.log(username);

        next();

    } else {

        console.log("invalid user");
        return res.send("Invalid user");

    }
};

const status = true;

module.exports = { auth, status };