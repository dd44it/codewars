function doubleChar(str) {
  let res = ''
  for(let i = 0; i < str.length; i++){
    res += str[i] + str[i]
  }
  return res
}
console.log(doubleChar('String'))