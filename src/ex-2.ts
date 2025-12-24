function sumEvenNumbers(numbers: number[]): number {
  return numbers.filter(value => value%2 === 0).reduce((acc,value) => acc+value,0)
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // 12
console.log(sumEvenNumbers([11, 13, 15])); // 0
