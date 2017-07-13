const Plan = require('Domain/Entities/Plan')

const { Mapper } = require('speck-sequelize-repository')

const map = {
  toEntity: {
    'planId': 'planId',
    'externalId': 'externalId',
    'name': 'name',
    'membersLimit': 'membersLimit',
    'activeUsersSoftLimit': 'activeUsersSoftLimit',
    'activeUsersHardLimit': 'activeUsersHardLimit'
  },
  toDatabase: {
    'planId': 'planId',
    'externalId': 'externalId',
    'name': 'name',
    'membersLimit': 'membersLimit',
    'activeUsersSoftLimit': 'activeUsersSoftLimit',
    'activeUsersHardLimit': 'activeUsersHardLimit'
  }
}

module.exports = new Mapper(Plan, map)
