var express = require('express')
var router = express()
var lightController = require('../controllers/lightController')
var firewall = require('./firewall')
var bodyParser = require('body-parser')

var Logger = require('../app/logger')
var logger = new Logger('ws')

module.exports = router

router.use( bodyParser.json() )       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}))

router.use('/',firewall.global,
    (req,res,next) => {
        logger.info(req.method + ' - ' + req.originalUrl, 'BEGIN')
        next()
    }
)

router.use('/light',lightController)