// Dependencies
const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema(
    {
        invoiceNumber: {
            type: Number,
            required: [true, "Invoice number is required"],
        },
        invoiceDate: {
            type: Date,
            required: [true, "Invoice date is required"],
            default: Date.now(),
        },
        invoiceAmount: {
            type: Number,
            required: [true, "Invoice amount is required"],
        },
    },
    { timestamps: true }
);

const Invoice = mongoose.model("Invoice", invoiceSchema);

// Export module
module.exports = Invoice;
