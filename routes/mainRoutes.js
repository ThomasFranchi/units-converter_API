const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/units", controller.getUnits);
router.post("/convert/distance", controller.convertDistance);
router.post("/convert/temperature", controller.convertTemperature);

module.exports = router;