const CreateJson = require('../../../../services/api/rickandmorty/createjson.services')

describe('ResolveArrayUris', () => {
  // theuri, page, theresource
  test('empty parameters', async () => {
    const result = await CreateJson()
    expect(result).toBe(false)
  })
})
