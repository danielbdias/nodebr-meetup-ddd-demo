const localDatabase = {
  host: process.env.DATABASE_HOST || 'localhost',
  database: 'tweets',
  username: 'root',
  password: 'password',
  port: 5432,
  seederStorage: 'sequelize',
  logging: console.log,
  dialect: 'postgres'
}

const remoteDatabase = {
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
  seederStorage: 'sequelize',
  logging: console.log,
  dialect: 'postgres'
}

const database = {
  development: localDatabase,
  test: localDatabase,
  qa: remoteDatabase,
  production: remoteDatabase
}

module.exports = database[require('./environment')]
