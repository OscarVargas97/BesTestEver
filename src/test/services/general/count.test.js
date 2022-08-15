const CountCharInPropObject = require('../../../services/general/count.services')

describe('CountCharInPropObject', () => {
  test('count characters in an object property with empty parameters', () => {
    const result = CountCharInPropObject({}, '', '')

    expect(result).toBe(false)
  })

  test('count characters in an object property with null parameters', () => {
    const result = CountCharInPropObject(null, null, null)

    expect(result).toBe(false)
  })

  test('count characters in an object property with not parameters', () => {
    const result = CountCharInPropObject()

    expect(result).toBe(false)
  })

  test('count characters in an object property with number parameters', () => {
    const result = CountCharInPropObject(1, 2, 3)

    expect(result).toBe(false)
  })

  test('count characters in an object property with number in char parameter', () => {
    const result = CountCharInPropObject([{ name: 3 }], 4, 'name')

    expect(result).toBe(false)
  })

  test('count characters in an object property with array number in char parameter', () => {
    const result = CountCharInPropObject([{ name: 3 }], [4], 'name')

    expect(result).toBe(false)
  })

  test('count characters in an object property with array number in prop parameter', () => {
    const result = CountCharInPropObject([{ name: 'a' }], 'a', 3)

    expect(result).toBe(false)
  })

  test('count characters in an object property with char number parameter', () => {
    const result = CountCharInPropObject([{ name: 3 }], ['ab'], 'name')

    expect(result).toBe(false)
  })

  test('count characters in an object property with correct parameter', () => {
    const result = CountCharInPropObject([{ name: 'a' }], 'a', 'name')

    expect(result).toBe(1)
  })

  test('count characters in an object property with correct parameter but not coincidence', () => {
    const result = CountCharInPropObject([{ name: 'c' }], 'a', 'name')

    expect(result).toBe(0)
  })
})
