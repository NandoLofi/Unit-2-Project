let playlistDB = require('../models/playlist')

//create new playlist
exports.create=(req, res)=> {
    if(!req.body){
        res.status(400).send({message: "Must have information to send"});
        ;
    }
    const playlist = new playlistDB({
        name: req.body.name,
        link: req.body.link,
        desc: req.body.desc
    })
    playlist
        .save(playlist)
        .then(data => {
            res.redirect('/addplaylist')
        })
        .catch(err => {
            console.log(err)
        });
};
exports.find=(req, res) => {
    playlistDB.find()
    .then(playlist =>{
        res.send(playlist)
    })
    .catch(err=>{
        console.log(err)
    })
}
exports.edit=(req, res)=> {
    if(!req.body){
        return res
        .status(400)
        .send({message: "Must have information"})
    }
    const id = req.params.id
    playlistDB.findByIdAndUpdate(id, req.body)
    .then(data=> {
        if(!data){
            res.status(404).send({message: `Cannot Update playlist with ${id}`})
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        console.log(err)
    })


}
// //deleteby ID
// exports.delete=(req, res)=> {
//     const id = req.params.id
//     playlistDB.findByIdAndDelete(id)
//         .then(data=> {
//             if(!data){
//                 res.status(404).send({message: "Unable to delete"})
//             }
//             else{
//                 res.send({
//                     message: "Playlist successfully deleted"
//                 })

//             }
//         })
//         .catch(err=>{
//             console.log(err)
//         })
// }