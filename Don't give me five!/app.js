function dontGiveMeFive(start, end){
  let res = 0
  for(let i = start; i <= end; i++){
    const str = i.toString()
    const regex = new RegExp('5')
    if(!regex.test(str)){
      res += 1
      continue
    }
  }
  return res
}

console.log(dontGiveMeFive(1, 9))
// [1, 2, 3, 4, 6, 7, 8, ]

// console.log(dontGiveMeFive(4, 17))
// [4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]