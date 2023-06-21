const express = require("express");
const router = express.Router();

const controllers = require("../controllers/availabilityControllers");

router.post("/setAvailability", controllers.setAvailability);
router.get("/getAvailability", controllers.getAvailability);

module.exports = router;
