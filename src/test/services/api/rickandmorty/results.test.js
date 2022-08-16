const { ResultFirst, ResultSecond } = require('../../../../services/api/rickandmorty/results.services')
describe('ResultFirst', () => {
  // theuri, page, theresource
  test('empty parameters', async () => {
    const result = await ResultFirst()
    expect(result).toBe(false)
  })
})
describe('ResultSecond', () => {
  // theuri, page, theresource
  test('empty parameters', async () => {
    const result = await ResultSecond()
    expect(result).toBe(false)
  })
})
