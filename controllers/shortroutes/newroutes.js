const axios = require('axios')
exports.homeRoutes=(req, res)=>{
    axios.get('http://localhost:3000/api/playlist')
    .then(function(response){
        res.render('index', {playlist: response.data})
    })
    .catch(err=>{
        console.log(err)
    })
}
exports.addPlaylist=(req, res)=>{
    res.render('newpl')
}
exports.editPlaylist=(req, res)=>{
    res.render('editpl')
}