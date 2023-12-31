const express = require("express");
require("dotenv").config();
require("colors");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;
// Database
const connectDB = require("./config/database.js");
connectDB();
// Requires
const errorHandler = require("./middleware/errorMiddleware.js");

const bookRoutes = require("./routes/bookRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors("*"));

// Test Route
app.get("/", (req, res) => res.send("Server Running Successfully!"));

// Book Routes
app.use("/api/v1", bookRoutes);

// Error Handler Middleware
app.use(errorHandler);

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`.cyan));
