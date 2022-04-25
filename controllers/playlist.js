const express = require('express')
const songRouter = express.Router();



songRouter.get('/', (req, res) => {
    res.send('Hello, welcome')
})



module.exports = songRouter;