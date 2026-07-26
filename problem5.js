// problem 5: Reveres a string
// Revers option for Array
// let arr = [1,2,3]
// console.log(arr.reverse());

// Now let's revers a "string"
// without function

// let str = "Asadul";

// console.log(str[0]);
// console.log("str length", str.length);
// let reverseword="";
// for(let i=str.length-1; i>=0;i--){
//     let letter=str[i]
//     console.log("i-->",i,str[i]);
//     reverseword=reverseword+letter
// }
// console.log(reverseword);

// with function

function reverseword(word){
    let reverseword="";
    for(let i=word.length-1; i>=0;i--){
    let letter=word[i]
    console.log("i-->",i,word[i]);
    reverseword=reverseword+letter
}
return reverseword;
}
console.log(reverseword("programming"));