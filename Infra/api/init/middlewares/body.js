const bodyParser = require('body-parser')

const bodyMiddleware = (expressApp) => {
  expressApp.use(bodyParser.json())
}

module.exports = bodyMiddleware
