'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({ Deck }) {
      this.belongsTo(Deck, { foreignKey: 'deckId' });
    }
  }
  Question.init(
    {
      themeQuest: DataTypes.STRING,
      questAnswer: DataTypes.STRING,
      deckId: DataTypes.INTEGER,
      userAnswer: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Question',
    },
  );
  return Question;
};
