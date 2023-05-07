const { Hobbies, Students, sequelize, } = require("../models");
const { col, Op } = require("sequelize");
module.exports = {
 getall: async (req, res, next) => {
  try {
   const hobbies = await Hobbies.findAll({
    attributes: [
     "id",
     "title",
     [col("studentHobby.firstName"), "studentName"],
     [col("studentHobby.email"), "studentEmail"]
    ],
    include: [
     {
      model: Students,
      as: "studentHobby",
      attributes: [],
     }
    ]
   });
   res.status(200).send({
    success: true,
    status: 200,
    message: "Hobbies fetched",
    data: hobbies,
   });
  } catch (error) {
   next(error);
  }
 }
};