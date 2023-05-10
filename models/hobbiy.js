("use strict");
const moment = require("moment");
const table = "hobbies";
module.exports = (sequelize, DataTypes) => {
 const Hobby = sequelize.define(table, {
  id: {
   allowNull: false,
   autoIncrement: true,
   primaryKey: true,
   type: DataTypes.INTEGER,
  },
  fk_student_id: {
   type: DataTypes.INTEGER,
   allowNull: false,
  },
  title: {
   type: DataTypes.STRING,
   allowNull: true,
  },
  createdAt: {
   allowNull: false,
   type: DataTypes.INTEGER,
  },
  updatedAt: {
   allowNull: false,
   type: DataTypes.INTEGER,
  },
 });
 Hobby.beforeCreate((hobby) => {
  hobby.dataValues.createdAt = moment().unix();
  hobby.dataValues.updatedAt = moment().unix();
 });
 Hobby.beforeUpdate((hobby) => {
  hobby.dataValues.createdAt = moment().unix();
  hobby.dataValues.updatedAt = moment().unix();
 });
 Hobby.associate = (models) => {
  Hobby.belongsTo(models.Students, {
   as: "studentHobby",
   foreignKey: "fk_student_id",
  });
 };
 return Hobby;
};
