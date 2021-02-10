'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Book.belongsTo(models.Reader, { foreignKey: "readerId" });
    }
  };
  Book.init({
    title: DataTypes.STRING,
    isbn: DataTypes.STRING,
    publisher: DataTypes.STRING,
    country: DataTypes.STRING,
    img: DataTypes.STRING,
    readerId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};