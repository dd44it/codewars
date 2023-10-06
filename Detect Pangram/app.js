function isPangram(string){
  const copyStr = string.slice().toLowerCase()
  const alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const arr = copyStr.split(' ').map(word => word.split('')).flat().filter(item => /\w/.test(item) )
  const set = new Set(alphabetArray)
  const res = []
  for(let item of arr){
    if(set.has(item) && !res.includes(item)){
      res.push(item)
    }
  }
  return res.length === alphabetArray.length
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."))
// console.log(isPangram("This is not a pangram."))