const { Students, sequelize, } = require("../models");
module.exports = {
 create: async (req, res, next) => {
  try {
   const { name, email } = req.body;
   const user = await Students.create({
    name,
    email
   });
   res.status(200).send({
    success: true,
    status: 200,
    message: "User Created ",
    data: user,
   });
  } catch (error) {
   next(error);
  }
 },

 getAll: async (req, res, next) => {
  try {
   const users = await Students.findAll();
   res.status(200).send({
    success: true,
    status: 200,
    message: "User Fetched ",
    data: users,
   });
  } catch (error) {
   next(error);
  }
 }
};