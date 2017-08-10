// @flow

export const isOdd = (num: number): boolean => num % 2 !== 0

export const sumOddFibonacciNumbers = (maxFibonnaciNumber: number): number => {
  let twoFibsAgo: number = 0
  let oneFibAgo: number = 1
  let sum: number = 1
  if (maxFibonnaciNumber === 1) {
    return 1
  }
  for (let i = 1; i <= maxFibonnaciNumber; i++) {
    if (i === twoFibsAgo + oneFibAgo) {
      twoFibsAgo = oneFibAgo
      oneFibAgo = i
      if (isOdd(i)) {
        sum = sum + i
      }
    }
  }
  return sum
}
