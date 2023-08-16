// Dependencies
const router = require("express").Router();
const invoiceRoute = require("./invoiceRoute");

router.use("/invoices", invoiceRoute);

// Export module
module.exports = router;
