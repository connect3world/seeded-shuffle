import 'tslib'

export class SeededShuffle {
  seed: number

  constructor(
    seed: number | string
  ) {
    this.seed = typeof seed === 'string'
      ? Number(seed)
      : seed
  }

  shuffle<I>(
    array: I[]
  ): I[] {
    const result = [ ...array ]
    const size = result.length
    const map = this.generateMap(size)

    for (let i = size - 1; i > 0; i--) {
      result[i] = result.splice(map[size-1-i], 1, result[i])[0]
    }

    return result
  }

  generateMap(
    size: number
  ): number[] {
    const map: number[] = new Array(size)
    let tempSeed = this.seed

    for (let x = 0; x < size; x++) {
      map[x] = ((tempSeed = (tempSeed * 9301 + 49297) % 233280) / 233280.0) * size | 0
    }

    return map
}
}
