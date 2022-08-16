const GetAllFromApi = require('../../../../services/api/query/getallfromapi.services')

describe('GetAllFromApi', () => {
  // theuri, page, theresource

  test('empty parameters', async () => {
    const result = await GetAllFromApi()
    expect(result).toBe(false)
  })
})
