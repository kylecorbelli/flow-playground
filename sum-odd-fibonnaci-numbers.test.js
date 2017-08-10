// @flow

import {
  isOdd,
  sumOddFibonacciNumbers,
} from './sum-odd-fibonacci-numbers'

describe('isOdd', () => {
  it('returns true if the given number is odd', () => {
    expect(isOdd(3)).toBe(true)
  })

  it('returns false if the given number is even', () => {
    expect(isOdd(4)).toBe(false)
  })
})

describe('sumOddFibonacciNumbers', () => {
  interface InputAndExpectedOutput {
    +input: number,
    +expectedOutput: number
  }

  const sumOddFibonacciInputsAndOutputs: Array<InputAndExpectedOutput> = [
    {
      input: 1,
      expectedOutput: 1,
    },
    {
      input: 2,
      expectedOutput: 2,
    },
    {
      input: 1000,
      expectedOutput: 1785,
    },
    {
      input: 4000000,
      expectedOutput: 4613732,
    },
    {
      input: 4,
      expectedOutput: 5,
    },
    {
      input: 75024,
      expectedOutput: 60696,
    },
    {
      input: 75025,
      expectedOutput: 135721,
    },
  ]

  sumOddFibonacciInputsAndOutputs.forEach((inputAndExpectedOutput: InputAndExpectedOutput): void => {
    const {
      input,
      expectedOutput
    } = inputAndExpectedOutput
    it(`returns the correct sum of odd Fibonacci numbers given ${input} as input`, () => {
      expect(sumOddFibonacciNumbers(input)).toBe(expectedOutput)
    })
  })
})
