const sinon = require('sinon')

module.exports = function () {
  this.Before(() => {
    this.World = {
      mocks: [],
      stubs: [],
      mockDependency: (instance) => {
        const mock = sinon.mock(instance)
        this.World.mocks.push(mock)
        return mock
      },
      stubDependency: (instance, functionName) => {
        const stub = sinon.stub(instance, functionName)
        this.World.stubs.push(stub)
        return stub
      },
      Boundaries: {}
    }
  })

  this.After(() => {
    this.World.mocks.forEach(mock => mock.restore())
    this.World.stubs.forEach(stub => stub.restore())
  })
}
