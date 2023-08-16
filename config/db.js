// Dependencies
const mongoose = require("mongoose");

const dbConnection = () => {
    mongoose
        .connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        .then((conn) =>
            console.log(`Database Connected: ${conn.connection.host}`)
        );
};

// Export module
module.exports = dbConnection;
