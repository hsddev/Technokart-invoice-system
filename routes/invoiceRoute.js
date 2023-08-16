// Dependencies
const router = require("express").Router();
const {
    createInvoice,
    editInvoice,
    deleteInvoice,
    getAllInvoices,
} = require("../controllers/invoiceController");

router.post("/createInvoice", createInvoice);
router.get("/", getAllInvoices);
router.put("/editInvoice/:id", editInvoice);
router.delete("/deleteInvoice/:id", deleteInvoice);

// Export module
module.exports = router;
