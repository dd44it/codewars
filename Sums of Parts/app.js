function partsSums(ls) {
  const n = ls.length
  const resArr = new Array(n + 1)
  let sum = 0

  for (let i = n - 1; i >= 0; i--) {
    sum += ls[i]
    resArr[i] = sum
  }

  resArr[n] = 0
  return resArr
}


console.log(partsSums([0, 1, 3, 6, 10])) // [20, 20, 19, 16, 10, 0]