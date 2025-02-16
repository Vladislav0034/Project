const express = require('express');
const { Deck, Question } = require('../../db/models');
const deckRouter = express.Router();

deckRouter.get('/', async (req, res) => {
  const data = await Deck.findAll();
  res.status(200).json(data);
});

deckRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const questions = await Question.findAll({ where: { deckId: id } });
    res.status(200).json({ questions });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Ошибка получения вопросов' });
  }
});

module.exports = deckRouter;
