const ResolveArrayUris = require('../../../../services/api/query/resolvearrayuris.services')

describe('CreateArrayQuery', () => {
  // theuri, page, theresource
  test('empty parameters', async () => {
    const result = await ResolveArrayUris()
    expect(result).toBe(false)
  })

  test('empty string parameters', async () => {
    const result = await ResolveArrayUris('')
    expect(result).toBe(false)
  })

  test('array parameters', async () => {
    const result = await ResolveArrayUris({})
    expect(result).toBe(false)
  })
})
