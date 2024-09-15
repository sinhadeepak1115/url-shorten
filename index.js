import express from "express";
import urlRoutes from "./routes/url.js"; // Use import for ES modules
import connectDB from "./config/db.js";

const app = express();

//connect DB
connectDB();

app.use(express.json());

const PORT = 3000;

app.use("/", urlRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
