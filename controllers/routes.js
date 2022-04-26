const express = require('express');
const route = express.Router()
const controller = require('./schema')


//main get routee
route.get('/', (req, res) => {
    res.render('index.ejs')
})
//new playlist routee
route.get('/addplaylist', (req, res) => {
    res.render('newpl')
})
//edit routee
route.get('/editplaylist', (req, res) =>{
    res.render('editpl')
})
route.post('/api/playlist', controller.create)
route.put('/api/playlist/:id', controller.edit)
route.delete('/api/playlist/:id', controller.delete)

module.exports = route