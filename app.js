// Dependencies
const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes/");

const app = express();

dotenv.config();
const dbConnection = require("./config/db");

const PORT = process.env.PORT || 3000;

app.use(express.json());

// Route
app.use(routes);

// Mongodb connection
dbConnection();

app.listen(PORT, (req, res) => {
    console.log(`Starting server on port ${PORT}`);
});
