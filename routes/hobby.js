const express = require("express");
const router = express.Router({ mergeParams: true });
const controller = require("../controller/hobby");

router.get("/getall", controller.getall);

module.exports = router;