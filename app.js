// Dependencies
const express = require("express");
const dotenv = require("dotenv");

const app = express();

dotenv.config();
const dbConnection = require("./config/db");

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => res.status(200).json({ msg: "Hello, world!" }));

// Mongodb connection
dbConnection();

app.listen(PORT, (req, res) => {
    console.log(`Starting server on port ${PORT}`);
});
