function maxMultiple(divisor, bound) {
  let res
  for(let i = bound; i >= divisor; i--){
    if(i % divisor === 0 && !res){
      res = i
    }
  }
  return res
}
console.log(maxMultiple(2,7)) // 6
console.log(maxMultiple(3,10)) // 9
console.log(maxMultiple(7,17)) // 14
console.log(maxMultiple(10,50)) // 50