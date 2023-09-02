function narcissistic(value) {
  const str = value.toString()
  const count = str.length
  let summ = 0
  for(let i = 0; i < str.length; i++){
    const elem = str[i]
    const res = Math.pow(elem, count)
    summ += res
  }
  return value === summ 
}
console.log(narcissistic(7))
console.log(narcissistic(153))

console.log(narcissistic(122))
console.log(narcissistic(487))