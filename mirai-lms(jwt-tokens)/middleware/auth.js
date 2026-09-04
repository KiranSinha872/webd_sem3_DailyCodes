// JSON Web Token library ko import kar rahe hain tokens verify karne ke liye
const jwt = require("jsonwebtoken");

// ==============================================================================
// 1. AUTHENTICATION MIDDLEWARE (JWT टोकन को वेरीफाई करने वाला मिडलवेयर)
// ==============================================================================
const auth = (req, res, next) => {
    try {
        // 1. Check kar rahe hain ki request ke Authorization Header me token aaya hai ya nahi
        const authHeader = req.headers.authorization || req.headers.Authorization;
        let token;

        // Agar header me token "Bearer <token>" format me hai to token string alag nikalenge
        if (authHeader && authHeader.startsWith("Bearer ")) {
            token = authHeader.split(" ")[1]; // "Bearer " ke baad wala actual token
        } else if (req.cookies && req.cookies.token) {
            // Agar header me nahi hai to check karenge ki browser ke cookies me token hai ya nahi
            token = req.cookies.token;
        }

        // 2. Agar dono jagah (Header ya Cookie) me se kahin bhi token nahi mila
        if (!token) {
            // 401 Unauthorized status ke sath access deny ka message bhejenge
            return res.status(401).json({
                success: false,
                message: "Access denied. No token provided (via Bearer header or cookie)."
            });
        }

        // 3. Secret key se token ko verify kar rahe hain ki token genuine hai ya tempered/fake
        const decoded = jwt.verify(token, "saif0@123");

        // 4. Token se decode hue data (userId, role) ko request object (req.user) me attach kar rahe hain
        // Taaki aage aane wale routes is user info ko use kar sakein
        req.user = decoded;

        // 5. Sab theek hone par agle middleware ya route handler par control pass kar rahe hain
        next();

    } catch (error) {
        // Agar token expire ho chuka hai to specific error message return karenge
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({
                success: false,
                message: "Token has expired. Please login again."
            });
        }

        // Agar token galat/invalid ya corrupted hai to ye error return karenge
        return res.status(401).json({
            success: false,
            message: "Invalid token. Authentication failed.",
            error: error.message
        });
    }
};

// ==============================================================================
// 2. ROLE-BASED AUTHORIZATION MIDDLEWARE (रोल चेक करने वाला मिडलवेयर, उदा. Faculty, Admin)
// ==============================================================================
// allowedRoles ek list/array leta hai (jaise 'faculty', 'admin')
const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
        // Pehle check karenge ki user authenticate hua hai ya nahi (req.user aur req.user.role maujood hai ya nahi)
        if (!req.user || !req.user.role) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized: User information not found."
            });
        }

        // Check karenge ki logged-in user ka role allowedRoles ki list me maujood hai ya nahi
        if (!allowedRoles.includes(req.user.role)) {
            // Agar role match nahi hota to 403 Forbidden status bhejenge (Access Denied)
            return res.status(403).json({
                success: false,
                message: `Access denied. Role '${req.user.role}' is not authorized to access this route. Allowed roles: ${allowedRoles.join(", ")}`
            });
        }

        // Agar role allowed list me mil gaya to request ko aage badha denge
        next();
    };
};

// ==============================================================================
// 3. EXPORTS (मिडलवेयर फंक्शन्स को एक्सपोर्ट करना)
// ==============================================================================
// In functions ko dusri files (jaise server.js) me use karne ke liye export kar rahe hain
module.exports = auth;
module.exports.auth = auth;
module.exports.authorizeRoles = authorizeRoles;