const express = require("express");
const router = express.Router();
// Routers
const studentRouter = require("./student");
const hobbyRouter = require("./hobby");

router.use("/students", studentRouter);
router.use("/hobby", hobbyRouter);


module.exports = router;
