require('dotenv').config();
const express = require('express')
const app = express();
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const morgan = require('morgan')
const path = require('path');
const PORT = process.env.PORT || 3000
const connectDB = require('./controllers/database')


//logger
app.use(morgan('tiny'));

//database connector
connectDB();

//middleware
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));


//template engine
app.set('view engine', 'ejs')

//styling
app.use('/css', express.static(path.resolve(__dirname, 'public/css')))
app.use('/js', express.static(path.resolve(__dirname, 'public/js')))

//router
app.use('/', require('./controllers/routes'))

app.listen(PORT, () => console.log('We are running'));