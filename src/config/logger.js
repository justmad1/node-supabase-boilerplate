const winston = require('winston');
const path = require('path');

const logDir = path.join(__dirname, '../..', 'logs');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
            return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
        })
    ),
    transports: [
        new winston.transports.File({ filename: path.join(logDir, 'server.log') }),
        new winston.transports.Console({ format: winston.format.simple() })
    ]
});

module.exports = logger;