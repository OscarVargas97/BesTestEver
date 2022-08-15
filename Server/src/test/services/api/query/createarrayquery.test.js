const { CreateArrayQuery, GetPagesAllFromArray, ArrayQuery } = require('../../../../services/api/query/createarrayquery.services')

describe('CreateArrayQuery', () => {
  test('empty parameters', () => {
    const result = CreateArrayQuery()

    expect(result).toBe(false)
  })
})

describe('GetPagesAllFromArray', () => {
  test('empty parameters', () => {
    const result = GetPagesAllFromArray()

    expect(result).toBe(false)
  })
})

describe('ArrayQuery', () => {
  // theuri, page, theresource
  test('empty parameters', () => {
    const result = ArrayQuery()

    expect(result).toBe(false)
  })
})
