require('dotenv').config();
const express = require('express')
const app = express();
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const morgan = require('morgan')
const playController = require('./controllers/playlist')
const bodyparser = require('body-parser')
const path = require('path')

const PORT = process.env.PORT


//logger
app.use(morgan('tiny'));

//middleware
app.use(express.urlencoded({extended: true}));


//template engine
app.set('view engine', 'ejs')

//styling
app.use('/css', express.static(path.resolve(__dirname, 'public/css')))






//main get route
app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(PORT, () => console.log('We are running'));