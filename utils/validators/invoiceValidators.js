// Dependencies
const { body } = require("express-validator");
const validatorMiddleware = require("../../middlewares/validatorMiddleware");
const Invoice = require("../../models/Invoice");

exports.createInvoiceValidator = [
    body("invoiceNumber")
        .notEmpty()
        .withMessage("Invoice number is required")
        .isNumeric()
        .withMessage("Invoice number must be a number")
        .custom((val) =>
            Invoice.findOne({ invoiceNumber: val }).then((invoice) => {
                if (invoice) {
                    return Promise.reject(
                        new Error("Invoice number already exists")
                    );
                }
            })
        ),

    body("invoiceAmount")
        .notEmpty()
        .withMessage("Invoice amount is required")
        .isNumeric()
        .withMessage("Invoice amount must be a number"),

    body("invoiceDate")
        .notEmpty()
        .withMessage("Invoice date is required")
        .matches(/^\d{4}-\d{2}-\d{2}$/)
        .withMessage("Invalid invoice date format")
        .custom(async (val, { req }) => {
            const invoiceDate = new Date(val);

            if (isNaN(invoiceDate)) {
                throw new Error("Invalid date");
            }

            const previousInvoice = await Invoice.findOne({
                invoiceNumber: req.body.invoiceNumber - 1,
            });

            const nextInvoice = await Invoice.findOne({
                invoiceNumber: req.body.invoiceNumber + 1,
            });

            if (!previousInvoice || !nextInvoice) {
                return true;
            }

            const previousInvoiceDate = new Date(previousInvoice.invoiceDate);

            const nextInvoiceDate = new Date(nextInvoice.invoiceDate);
            if (
                invoiceDate > nextInvoiceDate ||
                invoiceDate < previousInvoiceDate
            ) {
                throw new Error(
                    "Invoice date should not be greater than next or less than previous"
                );
            }

            return true;
        }),

    validatorMiddleware,
];
