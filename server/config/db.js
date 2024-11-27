const mongoose = require("mongoose");
const config = require('./config');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(config.db_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch (err) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;