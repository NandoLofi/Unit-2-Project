require('dotenv').config();
const express = require('express')
const app = express();
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const path = require('path');
const PORT = process.env.PORT




//middleware
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));


//template engine
app.set('view engine', 'ejs')

//styling
app.use('/css', express.static(path.resolve(__dirname, 'public/css')))

//router
app.use('/', require('./controllers/routes'))

mongoose.connect(process.env.DATABASE_URL);

app.listen(PORT, () => console.log('We are running'));