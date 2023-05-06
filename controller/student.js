const { Students, sequelize, } = require("../models");
module.exports = {
 create: async (req, res, next) => {
  try {
   const { firstName, email } = req.body;
   const user = await Students.create({
    firstName,
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
 }
};