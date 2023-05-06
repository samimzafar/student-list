// server.js
const express = require("express");
const cors = require("cors");
const router = require("./routes");
process.on("uncaughtException", (e) => {
 console.log(e);
});
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
 cors({
  origin: "*",
 })
); // will configure later

app.use("/api", router);
// catch 404
app.use((req, res) => {
 return res.status(404).send({
  status: 404,
  success: false,
  message: `Cannot ${req.method} ${req.url}`,
 });
});

// error handling
app.use((err, req, res, next) => {
 if (res.headersSent) {
  return next(err);
 }
 req.log.error(err);
 return res.status(err.status || 500).send({
  status: err.status || 500,
  success: false,
  message: err.message,
 });
});
module.exports = app;