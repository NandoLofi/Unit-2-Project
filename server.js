require('dotenv').config();
const express = require('express')
const app = express();
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path');
const { Console } = require('console');
const PORT = process.env.PORT
const connectDB = require('./controllers/database')


//logger
app.use(morgan('tiny'));

//database connector
connectDB();

//middleware
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));



//template engine
app.set('view engine', 'ejs')

//styling
app.use('/css', express.static(path.resolve(__dirname, 'public/css')))

//router
app.use('/', require('./controllers/routes'))

app.listen(PORT, () => console.log('We are running'));