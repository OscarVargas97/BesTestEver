const { CreateArrayQuery, GetPagesAllFromArray, ArrayQuery } = require('../../../../services/api/query/createarrayquery.services')

const infoarray = [
  { resource: 'episode', query: 'https://rickandmortyapi.com/api/' }
]
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

  test('correct parameter but not real api query', async () => {
    const result = await CreateArrayQuery({ resource: 'hi', query: 'uri' })

    expect(result).toBe(false)
  })
  test('correct parameter', async () => {
    const result = await CreateArrayQuery(infoarray)
    expect(result).toStrictEqual([
      { resource: 'episode', uri: 'https://rickandmortyapi.com/api/episode?page=1' },
      { resource: 'episode', uri: 'https://rickandmortyapi.com/api/episode?page=2' },
      { resource: 'episode', uri: 'https://rickandmortyapi.com/api/episode?page=3' }])
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
  test('correct parameter', async () => {
    const result = await GetPagesAllFromArray(infoarray)

    expect(result).toStrictEqual([{ page: 3, query: 'https://rickandmortyapi.com/api/', resource: 'episode' }])
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
    const result = ArrayQuery('uri/', 2, 'hi')

    expect(result).toStrictEqual(
      [{ resource: 'hi', uri: 'uri/hi?page=1' }, { resource: 'hi', uri: 'uri/hi?page=2' }]
    )
  })
})
