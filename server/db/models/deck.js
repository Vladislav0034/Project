'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Deck extends Model {
    static associate({Question}) {
      // define association here
      this.hasMany(Question, {foreignKey: 'deckId'})
    }
  }
  Deck.init({
    theme: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Deck',
  });
  return Deck;
};