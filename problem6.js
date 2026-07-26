// problem 6: count vowels in a string
// let str= "programming hero";
// let vowels= "aeiou";
// console.log(vowels.includes("e"));
// let count= 0;
// for(let i = 0; i<str.length; i++){
//     let letter= str[i];
//     console.log("i,->letter->>>",i, letter);
//     if (vowels.includes(letter)) {
//     console.log("vowel")
//     count++;
//     }
    
// }
// console.log("count->>",count);

// with functions
function countvowels(str){
    let vowels= "aeiou";
    let count= 0;
    for(let i = 0; i<str.length; i++){
    let letter= str[i];
    console.log("i,->letter->>>",i, letter);
    if (vowels.includes(letter)) {
    console.log("vowel")
    count++;
    }
    }
    return count;
    }
    console.log(countvowels("Programming Hero"));