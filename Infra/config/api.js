const localApi = { port: 8000 }

const remoteApi = {
  port: process.env.PORT
}

const api = {
  development: localApi,
  test: localApi,
  qa: remoteApi,
  production: remoteApi
}

module.exports = api[require('./environment')]
