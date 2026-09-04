// ==========================================
// 1. IMPORTS & INITIALIZATION (ज़रूरी लाइब्रेरीज़ को इम्पोर्ट करना)
// ==========================================

// Express framework ko import kar rahe hain web server banane ke liye
const express = require("express");
// Express application ka instance initialize kar rahe hain
const app = express();

// MongoDB database ke sath connect aur interact karne ke liye mongoose library
const mongoose = require("mongoose");
// Passwords ko securely hash (encrypt) aur compare karne ke liye bcrypt library
const bcrypt = require("bcrypt");
// User authentication ke liye JSON Web Token (JWT) generate aur verify karne wali library
const jwt = require("jsonwebtoken");

// Client ke browser se aane wali cookies ko parse (read) karne ke liye cookie-parser middleware
const cookieParser = require("cookie-parser");

// Custom Authentication aur Authorization Middlewares ko import kar rahe hain
// auth: check karta hai ki user logged in hai ya nahi (token valid hai ya nahi)
// authorizeRoles: check karta hai ki user ka role (jaise 'faculty') allowed hai ya nahi
const { auth, authorizeRoles } = require("./middleware/auth");

// ==========================================
// 2. VIEW ENGINE & GLOBAL MIDDLEWARE (ग्लोबल मिडलवेयर सेटअप)
// ==========================================

// EJS (Embedded JavaScript) template engine set kar rahe hain taaki HTML pages render kar sakein
app.set("view engine", "ejs");

// Incoming requests me aane wale JSON data ko parse karne ke liye middleware
app.use(express.json());
// HTML Form submit hone par jo URL-encoded data aata hai, use parse karne ke liye middleware
app.use(express.urlencoded({ extended: true }));

// Request me aane wali cookies ko req.cookies object me convert karne ke liye middleware
app.use(cookieParser());

// ==========================================
// 3. DATABASE CONNECTION (डेटाबेस कनेक्शन)
// ==========================================

// Local MongoDB server ke 'jwt' database se connect kar rahe hain
mongoose.connect("mongodb://localhost:27017/jwt")
    // Agar connection successfully ban jata hai to success message print hoga
    .then(() => console.log("MongoDB connected successfully"))
    // Agar koi error aata hai connection me to error message print hoga
    .catch((err) => console.error("MongoDB connection error:", err.message));

// ==========================================
// 4. MONGOOSE SCHEMA & MODEL (डेटाबेस का स्ट्रक्चर और मॉडल)
// ==========================================

// User collection ke liye schema (structure) define kar rahe hain
const userSchema = new mongoose.Schema({
    name: String,        // User ka naam
    email: String,       // User ka email address
    password: String,    // User ka hashed (encrypted) password
    role: String         // User ka role jaise "faculty", "student", ya "admin"
});

// Schema ke basis par 'User' model create kar rahe hain jo MongoDB me 'users' collection ko represent karega
const User = mongoose.model("User", userSchema);

// ==========================================
// 5. VIEW & AUTHENTICATION ROUTES (राउट्स)
// ==========================================

// Home page render karne ke liye GET route
app.get("/", (req, res) => {
    // views/home.ejs file ko browser par display (render) karega
    res.render("home");
});

// Register page render karne ke liye GET route
app.get("/register", (req, res) => {
    // views/register.ejs form ko display karega
    res.render("register");
});

// Login page render karne ke liye GET route
app.get("/login", (req, res) => {
    // views/login.ejs form ko display karega
    res.render("login");
});

// --- REGISTER (POST) ---
// Naya user register karne ke liye POST route
app.post("/register", async (req, res) => {
    // Form ya request body se name, email, password aur role nikal rahe hain (destructuring)
    const { name, email, password, role } = req.body;

    // Password ko 10 salt rounds ke sath securely hash (encrypt) kar rahe hain
    const hashedPassword = await bcrypt.hash(password, 10);

    // User model ka naya document create kar rahe hain hashed password ke sath
    const user = new User({
        name,
        email,
        password: hashedPassword,
        role
    });

    // Naye user ko MongoDB database me save kar rahe hain
    await user.save();

    // Client ko JSON response bhej rahe hain ki registration successful ho gaya
    res.json({
        message: "User registered successfully"
    });
});

// --- LOGIN (POST) ---
// User credentials check karke JWT token return karne ke liye POST route
app.post("/login", async (req, res) => {
    // Request body se email aur password le rahe hain
    const { email, password } = req.body;

    // 1. Database me user ko uske email se find kar rahe hain
    const user = await User.findOne({ email });

    // Agar user database me nahi milta to 401 Unauthorized status ke sath message return karenge
    if (!user) {
        return res.status(401).json({
            message: "User not found"
        });
    }

    // 2. Jo password user ne enter kiya hai use database ke hashed password se match karenge
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // Agar password match nahi hota to 401 status ke sath message return karenge
    if (!isPasswordValid) {
        return res.status(401).json({
            message: "Invalid password"
        });
    }

    // 3. Password sahi hone par JWT (JSON Web Token) create aur sign kar rahe hain
    const token = jwt.sign(
        {
            userId: user._id,  // Payload me user ki ID store kar rahe hain
            role: user.role    // Payload me user ka role store kar rahe hain
        },
        "saif0@123", // Secret key jisse token securely sign hota hai
        {
            expiresIn: "1d" // Token 1 din (1 day) tak valid rahega
        }
    );

    // Generated token ko browser ke HTTP-only cookie me set kar rahe hain taaki security bani rahe
    res.cookie("token", token, { httpOnly: true });

    // 4. Client ko success message aur token JSON format me response bhej rahe hain
    res.json({
        message: "Login successful",
        token
    });
});

// ==========================================
// 6. PROTECTED ROUTES (सुरक्षित राउट्स)
// ==========================================

// --- GENERAL PROTECTED ROUTE ---
// Is route par koi bhi logged in user ja sakta hai jiske paas valid JWT token ho
app.get("/protected", auth, (req, res) => {
    // auth middleware token verify karke req.user me decoded data daal deta hai
    res.json({
        message: "You are authorized to access this route",
        user: req.user // JWT se decode kiya hua payload (userId, role)
    });
});

// --- FACULTY-ONLY PROTECTED ROUTE ---
// Is route par sirf wahi user ja sakta hai jiska token valid ho AUR jiska role 'faculty' ho
app.get("/faculty", auth, authorizeRoles("faculty"), (req, res) => {
    res.json({
        message: "Welcome Faculty! You have access to this protected route.",
        user: req.user
    });
});

// ==========================================
// 7. START SERVER (सर्वर शुरू करना)
// ==========================================

// Server ko port 3000 par listen karwa rahe hain
app.listen(3000, () => {
    // Server start hote hi terminal me ye message show hoga
    console.log("Server is running on port 3000");
});