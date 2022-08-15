const ConvertToSeconds = require('../../../services/general/timer_convert.services')

describe('Timer convert', () => {
  test('', () => {
    const result = ConvertToSeconds()

    expect(result).toBe(false)
  })

  test('', () => {
    const result = ConvertToSeconds('')

    expect(result).toBe(false)
  })

  test('', () => {
    const result = ConvertToSeconds([])

    expect(result).toBe(false)
  })

  test('', () => {
    const result = ConvertToSeconds({})

    expect(result).toBe(false)
  })

  test('', () => {
    const result = ConvertToSeconds(-100)

    expect(result).toBe(false)
  })

  test('', () => {
    const result = ConvertToSeconds(0)

    expect(result).toBe('0s 0.000000ms')
  })

  test('', () => {
    const result = ConvertToSeconds(5000)

    expect(result).toBe('5s 0.000000ms')
  })
})
