const mongoose=require('mongoose')

let schema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
})
const playlistDB = mongoose.model('newplaylist', schema)

module.exports =  playlistDB;