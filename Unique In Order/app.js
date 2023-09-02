function uniqueInOrder(iterable) {
  let res = []
  for(let i = 0; i < iterable.length; i++){
    const elem = iterable[i]
    if(elem !== iterable[i + 1]){
      res.push(elem)
    }
  }
  return res
}

console.log(uniqueInOrder('AAAABBBCCDAABBB')) // ['A', 'B', 'C', 'D', 'A', 'B']
// console.log(uniqueInOrder('ABBCcAD')) // ['A', 'B', 'C', 'c', 'A', 'D']

// console.log(uniqueInOrder([1,2,2,3,3]))