const win = [2, 9, 14, 15, 7]
function bingo(a) {
  const winCombination = []
  a.forEach(item => {
    win.forEach(itemWin => !winCombination.includes(itemWin) && item === itemWin ? winCombination.push(item) : '' )
  })
  return winCombination.length === 5 ? "WIN" : "LOSE"
}

console.log(bingo([1,2,3,4,5,6,7,8,9,10])) // LOSE
console.log(bingo([21,13,2,7,5,14,7,15,9,10])) // WIN