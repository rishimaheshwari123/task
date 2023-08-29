const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connection successful")
    } catch (error) {
        console.log("Connection faild")
    }
}
module.exports = connectDB;