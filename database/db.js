const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, { dbName: process.env.DATABASE })
        .then(() => console.log("MongoDB Database Connected"))
        .catch(err => console.log("DB connection error:", err));

    } catch (error) {
        console.log(`MongoDB Connection Failed : ${error}`);
        process.exit(1)
    }
}
module.exports = connectDB;