// problem2: sum of range of numberes (1 to N)
// 7 = 1 + 2+ 3 + 4 + 5 + 6 + 7 =28

// without function
// let number = 7
// let sum = 0
// for(let i = 1; i<=number; i++){
//     sum = sum + i;

//     console.log("i=",i)
// }
// console.log("sum=", sum);


// with function

function sumrange(number){
    let sum =0;
   for(let i = 1; i<=number; i++){
    sum = sum + i;
    console.log("i=",i) 
}
return sum;
}
console.log(sumrange(5));
console.log(sumrange(10));