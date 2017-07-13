const expressWinston = require('express-winston')
const winston = require('winston')

const logOptions = {
  colorize: false,
  json: true
}

const winstonMiddleware = (expressApp) => {
  // expressApp.use(expressWinston.logger({
  //   transports: [ new winston.transports.Console(logOptions) ],
  //   expressFormat: true,
  //   colorize: true
  // }))

  expressApp.use(expressWinston.errorLogger({
    transports: [ new winston.transports.Console(logOptions) ],
    colorize: true
  }))
}

module.exports = winstonMiddleware
