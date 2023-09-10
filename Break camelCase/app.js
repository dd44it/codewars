// complete the function
function solution(string) {
  let res = ''
  for (let i = 0; i < string.length; i++) {
    const word = string[i]
    res += word
    if(word === word.toUpperCase()){
      res = res.slice(0, -1)
      res += ` ${word}`
    }
  }
  return res
}

console.log(solution("camelCasing")); // camel Casing
