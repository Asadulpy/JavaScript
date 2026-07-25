// without function
// problem3: factorial of a number
// 5! = 1 * 2 * 3 * 4 * 5 = 120
// let number = 3;
// let result= 1;
// for(let i=1; i<=number;i++){
// console.log("i=>", i)
// result= result*i;
// }
// console.log("result=>", result)

// with function

function factorial(number){
let result= 1;
for(let i=1; i<=number;i++){
console.log("i=>", i)
result= result*i;
}
return result;
}
console.log(factorial(5));
