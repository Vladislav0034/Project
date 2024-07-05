const express = require('express')
const morgan = require('morgan')
const deckRouter = require('./routes/deckRouter')

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api/decks', deckRouter)

module.exports = app