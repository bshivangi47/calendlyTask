const express = require("express");
const router = express.Router();

const controllers = require("../controllers/bookingControllers");
router.post("/book", controllers.book);

module.exports = router;
