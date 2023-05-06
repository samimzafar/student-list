const express = require("express");
const router = express.Router({ mergeParams: true });
const controller = require("../controller/student");

router.post("/create", controller.create);

module.exports = router;