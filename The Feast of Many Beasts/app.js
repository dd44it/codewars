function feast(beast, dish) {
  return beast.slice(0, 1) === dish.slice(0, 1) && beast.slice(-1) === dish.slice(-1)
}
console.log(feast("great blue heron", "garlic naan"))
console.log(feast("chickadee", "chocolate cake"))
console.log(feast("brown bear", "bear claw"))