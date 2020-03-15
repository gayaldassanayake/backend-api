const winston = require('winston');
const config = require('../config');

const transports = [];

if (config.env !== 'development') {
    // Not in development mode - add other transports
    transports.push(
        new winston.transports.Console(),
    );
} else {
    // In development mode - verbose logging
    transports.push(
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.cli(),
                winston.format.splat(),
            ),
        }),
    );
}


/**
 * Logger that will be used to emit error/info messages
 */
const logger = winston.createLogger({
    level: config.logs.level,
    levels: winston.config.npm.levels,
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        winston.format.errors({ stack: true }),
        winston.format.splat(),
        winston.format.json(),
    ),
    transports,
});

module.exports = logger;
