var express = require('express')
var router = express()

module.exports = router

router.post('/set', (req,res) =>{
    res.json({
        id:req.body.id,
        pin:req.body.pin,
        status: req.body.status
    })
})