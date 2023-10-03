String.prototype.camelCase=function(){
  return this.split(' ').map(word => word.slice(0, 1).toUpperCase() + word.slice(1, word.length)).join('')
}

console.log("test case".camelCase())