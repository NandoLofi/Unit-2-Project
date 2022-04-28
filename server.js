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


//styling
app.use('/css', express.static(path.resolve(__dirname, 'public/css')))

//router
app.use('/', require('./controllers/routes'))

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,  
});

const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + " is mongo not running?"));
db.on('connected', ()=> console.log('mongoose connected'));
db.on('disconnected', () => console.log("mongo disconnected"));



app.listen(PORT, () => console.log('We are running'));