// Dependencies
const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({}, { timestamps: true });

const Invoice = mongoose.model("Invoice", invoiceSchema);

// Export module
module.exports = Invoice;
