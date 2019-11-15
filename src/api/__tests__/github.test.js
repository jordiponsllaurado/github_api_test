/* eslint-env jest */

jest.mock('../request')

const github = require('../github')

describe('#getUser()', () => {
  it('should load user data', async () => {
    const data = await github.getUser('jordiponsllaurado')
    expect(data).toBeDefined()
    expect(data.entity.name).toEqual('Jordi Pons')
  })
})

describe('#getBranches()', () => {
  it('should load branches data', async () => {
    const data = await github.getBranches('jordiponsllaurado', 'github_api_test')
    expect(data).toBeDefined()
    expect(data.entity.name).toEqual('master')
  })
})
