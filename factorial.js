// 4! = 4*3*2*1

// let factorial = 1;
// for(let i = 4; i >= 1; i--){
//   factorial = factorial * i;
// }
// console.log(factorial);

function factorial(i) {
  if (i == 1) {
    return 1;
  }
  return factorial(i-1) * i;
}
console.log(factorial(4));