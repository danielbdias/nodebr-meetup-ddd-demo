const { INCREASE_MEMBER_COUNTER: IncreaseMemberCounterFixture,
        DECREASE_MEMBER_COUNTER: DecreaseMemberCounterFixture,
        INCREASE_ACTIVE_USER_COUNTER: IncreaseActiveUserCounterFixture,
        DECREASE_ACTIVE_USER_COUNTER: DecreaseActiveUserCounterFixture } = require('Fixtures/changeProjectCounter.fixture')

const ChangeProjectCounter = require('Domain/UseCases/ChangeProjectCounter')
const ProjectUsageRepository = require('Infra/repositories/ProjectUsageRepository')
const ProjectUsageEntity = require('Domain/Entities/ProjectUsage')
const ProjectUsageFixture = require('Fixtures/projectUsage.fixture')

module.exports = function () {
  this.When(/^I increase a member in my project$/, async () => {
    const projectUsageRepositoryMock = this.World.mockDependency(ProjectUsageRepository)
    const event = IncreaseMemberCounterFixture.build()
    const project = event.data.project

    const projectId = project.projectId
    const ownerId = project.owner.credential.credentialId

    const existingProjectUsage = new ProjectUsageEntity(ProjectUsageFixture.build())

    const updatedMemberCounter = existingProjectUsage.membersCounter + 1
    const updatedData = Object.assign({}, existingProjectUsage, { membersCounter: updatedMemberCounter })
    const updatedProjectUsage = new ProjectUsageEntity(updatedData)

    projectUsageRepositoryMock
      .expects('findOneByCriterias')
      .withExactArgs({projectId, ownerId})
      .resolves(existingProjectUsage)

    projectUsageRepositoryMock
      .expects('save')
      .withExactArgs(updatedProjectUsage)
      .resolves(updatedProjectUsage)

    const dependencies = { ProjectUsageRepository }

    await ChangeProjectCounter(event, dependencies)

    this.World.Boundaries = dependencies
    this.World.Expects = {
      projectUsageRepositoryMock
    }
  })

  this.When(/^I decrease a member in my project$/, async () => {
    const projectUsageRepositoryMock = this.World.mockDependency(ProjectUsageRepository)
    const event = DecreaseMemberCounterFixture.build()
    const project = event.data.project

    const projectId = project.projectId
    const ownerId = project.owner.credential.credentialId

    const existingProjectUsage = new ProjectUsageEntity(ProjectUsageFixture.build())

    const updatedMemberCounter = existingProjectUsage.membersCounter - 1
    const updatedData = Object.assign({}, existingProjectUsage, { membersCounter: updatedMemberCounter })
    const updatedProjectUsage = new ProjectUsageEntity(updatedData)

    projectUsageRepositoryMock
      .expects('findOneByCriterias')
      .withExactArgs({projectId, ownerId})
      .resolves(existingProjectUsage)

    projectUsageRepositoryMock
      .expects('save')
      .withExactArgs(updatedProjectUsage)
      .resolves(updatedProjectUsage)

    const dependencies = { ProjectUsageRepository }

    await ChangeProjectCounter(event, dependencies)

    this.World.Boundaries = dependencies
    this.World.Expects = {
      projectUsageRepositoryMock
    }
  })

  this.When(/^I increase a active user in my project$/, async () => {
    const projectUsageRepositoryMock = this.World.mockDependency(ProjectUsageRepository)
    const event = IncreaseActiveUserCounterFixture.build()
    const project = event.data.project

    const projectId = project.projectId
    const ownerId = project.owner.credential.credentialId

    const newProjectUsage = new ProjectUsageEntity({ projectId, ownerId, membersCounter: 0, activeUsersCounter: 0 })

    const updatedActiveUserCounter = newProjectUsage.activeUsersCounter + 1
    const updatedData = Object.assign({}, newProjectUsage, { activeUsersCounter: updatedActiveUserCounter })
    const updatedProjectUsage = new ProjectUsageEntity(updatedData)

    projectUsageRepositoryMock
      .expects('findOneByCriterias')
      .withExactArgs({projectId, ownerId})
      .resolves(null)

    projectUsageRepositoryMock
      .expects('save')
      .withExactArgs(updatedProjectUsage)
      .resolves(updatedProjectUsage)

    const dependencies = { ProjectUsageRepository }

    await ChangeProjectCounter(event, dependencies)

    this.World.Boundaries = dependencies
    this.World.Expects = {
      projectUsageRepositoryMock
    }
  })

  this.When(/^I decrease a active user in my project$/, async () => {
    const projectUsageRepositoryMock = this.World.mockDependency(ProjectUsageRepository)
    const event = DecreaseActiveUserCounterFixture.build()
    const project = event.data.project

    const projectId = project.projectId
    const ownerId = project.owner.credential.credentialId

    const existingProjectUsage = new ProjectUsageEntity(ProjectUsageFixture.build())

    const updatedActiveUserCounter = existingProjectUsage.activeUsersCounter - 1
    const updatedData = Object.assign({}, existingProjectUsage, { activeUsersCounter: updatedActiveUserCounter })
    const updatedProjectUsage = new ProjectUsageEntity(updatedData)

    projectUsageRepositoryMock
      .expects('findOneByCriterias')
      .withExactArgs({projectId, ownerId})
      .resolves(existingProjectUsage)

    projectUsageRepositoryMock
      .expects('save')
      .withExactArgs(updatedProjectUsage)
      .resolves(updatedProjectUsage)

    const dependencies = { ProjectUsageRepository }

    await ChangeProjectCounter(event, dependencies)

    this.World.Boundaries = dependencies
    this.World.Expects = {
      projectUsageRepositoryMock
    }
  })

  this.Then(/^I have a project usage updated/, () => {
    const { projectUsageRepositoryMock } = this.World.Expects

    projectUsageRepositoryMock.verify()
  })
}
