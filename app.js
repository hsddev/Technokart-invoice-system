// Dependencies
const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const routes = require("./routes/");

const app = express();

dotenv.config();
const dbConnection = require("./config/db");
const globalError = require("./middlewares/errorMiddleware");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan("dev"));

// Route
app.use(routes);

// Mongodb connection
dbConnection();

// Global error handling middleware for express
app.use(globalError);

app.listen(PORT, (req, res) => {
    console.log(`Starting server on port ${PORT}`);
});
