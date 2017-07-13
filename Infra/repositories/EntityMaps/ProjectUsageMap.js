const ProjectUsage = require('Domain/Entities/ProjectUsage')

const { Mapper } = require('speck-sequelize-repository')

const map = {
  toEntity: {
    'projectUsageId': 'projectUsageId',
    'projectId': 'projectId',
    'ownerId': 'ownerId',
    'membersCounter': 'membersCounter',
    'activeUsersCounter': 'activeUsersCounter'
  },
  toDatabase: {
    'projectUsageId': 'projectUsageId',
    'projectId': 'projectId',
    'ownerId': 'ownerId',
    'membersCounter': 'membersCounter',
    'activeUsersCounter': 'activeUsersCounter'
  }
}

module.exports = new Mapper(ProjectUsage, map)
