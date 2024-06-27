require("dotenv").config();
const express = require("express");
const dbConnect = require("./config/dbConnection");
const errorHandler = require("./middlewares/errorHandler");
const app = express();

dbConnect();

app.use(express.json());  // parse data
app.use("/api/mcq", require("./routes/mcqRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`Server started at port ${process.env.PORT}`);
});