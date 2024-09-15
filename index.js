const express = require("express");
const connectDB = require("./config/db");

const app = express();

//connect DB
connectDB();

app.use(express.json());

const PORT = 3000;

app.use("/", require("./routes/url"));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
