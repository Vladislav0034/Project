const express = require('express')
const {Deck} = require('../../db/models')
const deckRouter = express.Router()

deckRouter.get('/',(req, res) => {
    res.status(200).send('успех')
    // const decks = await Deck.findAll()
    // res.status(200).json(decks)
})

module.exports = deckRouter