const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const path = require("path")

//dotenv conig
dotenv.config();

//mongodb connection
connectDB();

//rest obejct
const app = express();

//middlewares
app.use(express.json());


//routes
app.use("/api/v1/user", require("./routes/userRoutes"));


app.use(express.static(path.join(__dirname, './client/build')))
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})
//port
const port = process.env.PORT || 8080;
//listen port
app.listen(port, () => {
    console.log(
        `Server Running on port no.  ${process.env.PORT}`
    );
});
