const express = require('express');
const route = express.Router()
const controller = require('./schema')
const shortRoute = require('./shortroutes/newroutes');


//homeroute
route.get('/', shortRoute.homeRoutes)

//new playlist route
route.get('/addplaylist', shortRoute.addPlaylist)

//edit route
route.get('/editplaylist', shortRoute.editPlaylist)

//api
route.post('/api/playlist', controller.create)
route.get('/api/playlist', controller.find)
route.put('/api/playlist/:id', controller.edit)
route.delete('/api/playlist/:id', controller.delete)

module.exports = route