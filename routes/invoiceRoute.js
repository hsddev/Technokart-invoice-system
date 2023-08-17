// Dependencies
const router = require("express").Router();
const {
    createInvoice,
    editInvoice,
    deleteInvoice,
    getInvoices,
} = require("../controllers/invoiceController");
const {
    createInvoiceValidator,
    deleteInvoiceValidator,
    updateInvoiceValidator,
    getInvoicesValidator,
} = require("../utils/validators/invoiceValidators");

router.post("/createInvoice", createInvoiceValidator, createInvoice);
router.get("/", getInvoicesValidator, getInvoices);
router.put("/editInvoice/:id", updateInvoiceValidator, editInvoice);
router.delete("/deleteInvoice/:id", deleteInvoiceValidator, deleteInvoice);

// Export module
module.exports = router;
