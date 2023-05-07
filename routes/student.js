const express = require("express");
const router = express.Router({ mergeParams: true });
const controller = require("../controller/student");

router.post("/create", controller.create);
router.get("/getAll", controller.getAll);

module.exports = router;