require("dotenv").config();
const express = require("express");
const dbConnect = require("./config/dbConnection");
const errorHandler = require("./middlewares/errorHandler");
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse x-www-form-urlencoded data
app.use(bodyParser.urlencoded({ extended: true }));
// Middleware to parse JSON data
app.use(bodyParser.json());

dbConnect();

app.use(express.json());  // parse data
app.use("/api/mcq", require("./routes/mcqRoutes"));
app.use("/api/user", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`Server started at port ${process.env.PORT}`);
});