// let str="tat";
// let reversestr=""

// for(let i = str.length-1; i>=0; i--){
//     let letter= str[i];
//     reversestr=reversestr+letter;
// }

// console.log(reversestr);

// if (str===reversestr){
//     console.log("palindrome");
// }else{
//     console.log("not palindrome")
// }

// with function
let str="civic"
let reversestr=" "
function isPalindrome(str){
 for(let i = str.length-1; i>=0; i--){
    let letter= str[i];
    reversestr=reversestr+letter;
}

console.log(reversestr);

if (str===reversestr){
    return true;
}else{
    return false;
}   
}
console.log(isPalindrome(str));