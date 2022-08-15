const { CreateArrayQuery, GetPagesAllFromArray, ArrayQuery } = require('../../../../services/api/query/createarrayquery.services')

describe('CreateArrayQuery', () => {
// theuri, page, theresource
  test('empty parameters', async () => {
    const result = await CreateArrayQuery()

    expect(result).toBe(false)
  })
  test('empty array input', async () => {
    const result = await CreateArrayQuery([])

    expect(result).toBe(false)
  })
  test('not valid array input', async () => {
    const result = await CreateArrayQuery([''])

    expect(result).toBe(false)
  })
})

describe('GetPagesAllFromArray', () => {
// theuri, page, theresources
  test('empty parameters', async () => {
    const result = await GetPagesAllFromArray()

    expect(result).toBe(false)
  })
  test('empty array input', async () => {
    const result = await GetPagesAllFromArray([])

    expect(result).toBe(false)
  })
  test('not valid array input', async () => {
    const result = await GetPagesAllFromArray([''])

    expect(result).toBe(false)
  })
  test('array with object empty input', async () => {
    const result = await GetPagesAllFromArray([{}])

    expect(result).toBe(false)
  })
  test('not valid array with object and correct property but its a number', async () => {
    const result = await GetPagesAllFromArray([{ query: 3 }])

    expect(result).toBe(false)
  })
})

describe('ArrayQuery', () => {
  // theuri, page, theresource
  test('empty parameters', () => {
    const result = ArrayQuery()

    expect(result).toBe(false)
  })

  test('strings parameters', () => {
    const result = ArrayQuery('', '', '')

    expect(result).toBe(false)
  })
  test('strings parameters', () => {
    const result = ArrayQuery('a', 'b', 'c')

    expect(result).toBe(false)
  })
  test('number parameters', () => {
    const result = ArrayQuery(1, 1, 3)

    expect(result).toBe(false)
  })

  test('number parameters', () => {
    const result = ArrayQuery('hi', 2, 3)

    expect(result).toBe(false)
  })

  test('number parameters', () => {
    const result = ArrayQuery('hi', 'hi', 3)

    expect(result).toBe(false)
  })

  test('number parameters', () => {
    const result = ArrayQuery([2], 'hi', 3)

    expect(result).toBe(false)
  })

  test('correct parameters', () => {
    const result = ArrayQuery('uri', 2, 'hi')

    expect(result).toStrictEqual(
      [{ resource: 'hi', uri: 'uri?page=1' }, { resource: 'hi', uri: 'uri?page=2' }]
    )
  })
})
