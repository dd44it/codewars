const sequenceSum = (begin, end, step) => {
  if(begin > end) return 0
  let summ = 0

  for(let i = begin; i <= end; i += step) {    
    summ += i
  }

  return summ
}

console.log(sequenceSum(2, 6, 2)) // 12
console.log(sequenceSum(1, 5, 1)) // 15
console.log(sequenceSum(1, 5, 3)) // 5