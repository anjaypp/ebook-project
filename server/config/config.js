const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const config = {
  port: process.env.PORT || 4000,
  db_URI: process.env.DB_URI,
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN || "1d"
  },
  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_API_SECRET
  },
  razorpay: {
    keyId: process.env.RAZORPAY_KEY_ID,
    keySecret: process.env.RAZORPAY_KEY_SECRET
  },
  auth0: {
    clientSecret: process.env.AUTH0_SECRET,
    baseURL: process.env.AUTH0_BASE_URL,
    clientId: process.env.AUTH0_CLIENT_ID,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL
  },
  jwtSecret: "YOUR_JWT_SECRET", // If using JWT in your app
  jwtExpiration: "1h" // Set token expiration time
};

module.exports = config;
