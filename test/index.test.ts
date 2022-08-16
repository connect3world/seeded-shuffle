import { SeededShuffle } from '../src'

describe('Basic test', () => {
  const array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

  it('should shuffle and return a new array same size with a string seed', function(done) {
    const seededShuffle = new SeededShuffle('seed')
    const result = seededShuffle.shuffle(array)

    expect(result).not.toMatchObject(array)
    expect(result).toHaveLength(array.length)
    done()
  })

  it('should shuffle and return a new array same size with a number', function(done) {
    const seededShuffle = new SeededShuffle(748)
    const result = seededShuffle.shuffle(array)

    expect(result).not.toMatchObject(array)
    expect(result).toHaveLength(array.length)
    done()
  })

  it('should shuffle and return a new array same size with a float', function(done) {
    const seededShuffle = new SeededShuffle(4.1)
    const result = seededShuffle.shuffle(array)

    expect(result).not.toMatchObject(array)
    expect(result).toHaveLength(array.length)
    done()
  })
})
