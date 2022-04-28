let playlistDB = require('../models/playlist')

// //create new playlist
// exports.create=(req, res)=> {
//     if(!req.body){
//         res.status(400).send({message: "Must have information to send"});
//         ;
//     }
//     const playlist = new playlistDB({
//         name: req.body.name,
//         link: req.body.link,
//         desc: req.body.desc
//     })
//     playlist
//         .save(playlist)
//         .then(data => {
//             res.redirect('/addplaylist')
//         })
//         .catch(err => {
//             console.log(err)
//         });
// };
// exports.find=(req, res) => {
//     playlistDB.find()
//     .then(playlist =>{
//         res.send(playlist)
//     })
//     .catch(err=>{
//         console.log(err)
//     })
// }