const express = require('express');
const { append } = require('express/lib/response');
const route = express.Router()
const controller = require('./schema')
const shortRoute = require('./shortroutes/newroutes');
let playlistDB = require('../models/playlist')


//home heroku route
route.get('/', (req, res) =>{
    res.redirect('/playlist')
})

//homeroute
route.get('/playlist', shortRoute.homeRoutes)

//new playlist route
route.get('/addplaylist', shortRoute.addPlaylist)

//delete route
route.delete('/playlist/:id', (req, res)=>{
    playlistDB.findByIdAndDelete(req.params.id, (err, )=>{
        res.redirect('/playlist')
    })
})
route.get('/playlist/:id/editplaylist', (req, res)=>{
    playlistDB.findById(req.params.id, (err, playinfo)=>{
        res.render('editpl', {playinfo})
    })
})


route.put('/playlist/:id', (req, res) =>{
    playlistDB.findByIdAndUpdate(req.params.id, req.body, (err, editedplay) =>{
        res.redirect('/playlist')
    })
})

//api
route.post('/api/playlist', controller.create)
route.get('/api/playlist', controller.find)


module.exports = route