// Dependencies
const asyncHandler = require("express-async-handler");
const ApiError = require("../utils/apiError");
const Invoice = require("../models/Invoice");

/*
 * @Desc Create a new invoice
 * @Route POST invoices/createInvoice
 * @Access public
 */
const createInvoice = asyncHandler(async (req, res, next) => {
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
const editInvoice = asyncHandler(async (req, res, next) => {
    const invoice = await Model.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    if (!invoice) {
        return next(
            new ApiError(`No invoice with this id ${req.params.id}`, 404)
        );
    }

    // Trigger "save" event when update document
    invoice.save();

    res.status(200).json(invoice);
});

/*
 * @Desc Delete an invoice
 * @Route DELETE invoices/deleteInvoice/:invoiceId
 * @Access public
 */
const deleteInvoice = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const invoice = await Model.findByIdAndDelete(id);

    if (!invoice) {
        return next(new ApiError(`No invoice with this id ${id}`, 404));
    }

    invoice.remove();

    res.status(204).send();
});

/*
 * @Desc Get invoices
 * @Route GET /invoices
 * @Access public
 */
const getInvoices = asyncHandler(async (req, res, next) => {
    const startDate = new Date(req.query.startDate);
    const endDate = new Date(req.query.endDate);

    if (new Date(startDate) > new Date(endDate)) {
        return next(new ApiError(`Start date must be before end date`, 400));
    }

    const invoices = await Invoice.find({
        invoiceDate: {
            $gte: startDate,
            $lte: endDate,
        },
    });

    res.status(200).json({ data: invoices });
});

// Export module
module.exports = { createInvoice, editInvoice, deleteInvoice, getInvoices };
