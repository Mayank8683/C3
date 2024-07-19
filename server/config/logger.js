const winston =require('winston');

const logger=winston.createLogger({
    level:'info',
    format:winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports:[
        new winston.transports.File({filename:'logs/combined.logs'}),
        new winston.transports.File({filename:'logs/error.logs',level:'error'}),
    ],
});

if(process.env.NODE_ENV !=='production'){
    logger.add(new winston.transports.Console({
        format:winston.format.simple(),
    }))
}

module.exports=logger;