const PlanSubscription = require('Domain/Entities/PlanSubscription')

const { Mapper } = require('speck-sequelize-repository')

const map = {
  toEntity: {
    'planSubscriptionId': 'planSubscriptionId',
    'ownerId': 'ownerId',
    'planId': 'plan.planId',
    'externalOwnerId': 'externalOwnerId',
    'externalSubscriptionId': 'externalSubscriptionId'
  },
  toDatabase: {
    'planSubscriptionId': 'planSubscriptionId',
    'ownerId': 'ownerId',
    'plan.planId': 'planId',
    'externalOwnerId': 'externalOwnerId',
    'externalSubscriptionId': 'externalSubscriptionId'
  }
}

module.exports = new Mapper(PlanSubscription, map)
