// Here is where we import modules
// We begin by loading Express
const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()

// Connect to MongoDB using the connection string in the .env file
mongoose.connect(process.env.MONGODB_URI)
// Log connection status to terminal on start
mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}`)
})

// Import the Fruit model
const Fruit = require('./models/fruit.js')

// GET '/'
app.get('/', (req, res) => {
    res.render('index.ejs')
})

// GET '/fruits/new
app.get('/fruits/new', (req, res) => {
    res.render('fruits/new.ejs')
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})