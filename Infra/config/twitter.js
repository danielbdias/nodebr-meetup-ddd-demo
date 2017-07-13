const localConfig = {
  port: 3030
}

const remoteConfig = {
  port: process.env.PORT
}

const api = {
  development: localConfig,
  test: localConfig,
  qa: remoteConfig,
  production: remoteConfig
}

module.exports = api[require('./environment')]
