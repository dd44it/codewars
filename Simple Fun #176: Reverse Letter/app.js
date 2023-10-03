function reverseLetter(str) {
  const arr = []
  for(let i = str.length; i >= 0; i--){
    const regex = /[a-z]/gi; 
    if(regex.test(str[i])){
      arr.push(str[i])
    }
  }
  return arr.join('')
}
// console.log(reverseLetter('krishan'))
console.log(reverseLetter('ultr53o?n'))
// console.log(reverseLetter('ab23c'))
// console.log(reverseLetter('krish21an'))