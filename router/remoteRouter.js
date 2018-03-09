var router = require('express')();
var firewall = require('../services/firewall').global;
var logger = require('../services/logger');
const cfg = require('../config/conf.json');

router.use('/remote',firewall);

router.get('/remote/check',function(req,res){
    logger.info('REQUEST','type: GET; url: "/remote/check";' ); 


    var resData = {
        light:[],
        ht_sensor:[],
        d_sensor:[],
        camera:[]
    };
    res.send(cfg.name);
});

module.exports = router;