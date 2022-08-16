const GetLocationForCharacter = require('../../../../services/api/rickandmorty/getlocationcorcharacter.services')

describe('GetLocationForCharacter', () => {
  // theuri, page, theresource
  test('empty parameters', async () => {
    const result = await GetLocationForCharacter()
    expect(result).toBe(false)
  })
})
