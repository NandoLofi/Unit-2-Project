const express = require('express');
const { append } = require('express/lib/response');
const route = express.Router()
const controller = require('./schema')
const shortRoute = require('./shortroutes/newroutes');
let playlistDB = require('../models/playlist')


//homeroute
route.get('/playlist', shortRoute.homeRoutes)

//new playlist route
route.get('/addplaylist', shortRoute.addPlaylist)

//edit route
route.get('/editplaylist', shortRoute.editPlaylist)

//delete route
route.delete('/playlist/:id', (req, res)=>{
    playlistDB.findByIdAndDelete(req.params.id, (err, )=>{
        res.redirect('/playlist')
    })
})

//api
route.post('/api/playlist', controller.create)
route.get('/api/playlist', controller.find)
route.put('/api/playlist/:id', controller.edit)
// route.delete('/api/playlist/:id', controller.delete)

module.exports = route