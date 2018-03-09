const cfg = require('./config/conf.json');
const remoteRouter = require('./router/remoteRouter');
const app = require('express')();
const logger = require('./services/logger');

app.use(remoteRouter);

app.listen(cfg.server.port,cfg.server.host, function(err){
    if (err){
        return err;
    }
    logger.info('SERVER START','host:' + cfg.server.host + '; port:' + cfg.server.port + '; | SUCCESS');
});


