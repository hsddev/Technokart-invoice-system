// Dependencies
const asyncHandler = require("express-async-handler");
const Invoice = require("../models/Invoice");

/*
 * @Desc Create a new invoice
 * @Route POST invoices/createInvoice
 * @Access public
 */
const createInvoice = asyncHandler(async (req, res) => {
    const { invoiceNumber, invoiceDate, invoiceAmount } = req.body;

    const invoice = await Invoice.create({
        invoiceNumber,
        invoiceDate: new Date(invoiceDate),
        invoiceAmount,
    });

    res.status(201).json({ data: invoice });
});

/*
 * @Desc Update an invoice
 * @Route PUT invoices/editInvoice/:invoiceId
 * @Access public
 */
const editInvoice = asyncHandler(async (req, res) => {});

/*
 * @Desc Delete an invoice
 * @Route DELETE invoices/deleteInvoice/:invoiceId
 * @Access public
 */
const deleteInvoice = asyncHandler(async (req, res) => {});

/*
 * @Desc Get all invoices
 * @Route GET /invoices
 * @Access public
 */
const getAllInvoices = asyncHandler(async (req, res) => {});

// Export module
module.exports = { createInvoice, editInvoice, deleteInvoice, getAllInvoices };
