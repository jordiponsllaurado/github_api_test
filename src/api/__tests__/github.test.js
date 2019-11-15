/* eslint-env jest */

// This commands loads the mocked request.js as defined in __mocks__/request.js
jest.mock('../request')

const github = require('../github')

// The exact same test using async/await
describe('#getUser() using async/await', () => {
  it('should load user data', async () => {
    const data = await github.getUser('jordiponsllaurado')
    expect(data).toBeDefined()
    expect(data.entity.name).toEqual('Jordi Pons')
  })
})
