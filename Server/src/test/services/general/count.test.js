const CountCharInPropObject = require('../../../services/general/count.services')

describe('CountCharInPropObject', () => {
  test('count characters in an object property with empty variables', () => {
    const result = CountCharInPropObject({}, '', '')

    expect(result).toBe('vedudim')
  })
})
