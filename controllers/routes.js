const express = require('express');
const route = express.Router()
let playlistDB = require('../models/playlist');



//home route
route.get('/', (req, res)=>{
    res.redirect('/playlist')
})

//index route
route.get('/playlist', (req, res) =>{
    playlistDB.find({}, (err, allPlaylist) =>{
        res.render('index', {playlist: allPlaylist})
    })
})

// add playlist route
route.get('/playlist/addplaylist', (req, res) =>{
    res.render('newpl.ejs')
})

route.post('/playlist', (req, res)=> {
    playlistDB.create(req.body, (err, newplaylist)=>{
        if (err){
            console.log(err);
            res.send(err);
        }
        else {
            res.redirect('/playlist')
        }
    })
})

//delete route
route.delete('/playlist/:id', (req, res)=>{
    playlistDB.findByIdAndDelete(req.params.id, (err, )=>{
        res.redirect('/playlist')
    })
})

//edit routes
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




module.exports = route