// problem 4: fizzbuzz (1 to N)
// loop through numbers from 1 to n, if a number is divisible by 3, print "fizz"; if divisible by 5, print "buzz";
//  if divisible by both print "fizzbuzz" , otherwise print the number itself.

// without function
// let number = 15;
// for (let i=1; i<=number; i++){
//     console.log("i=>",i)
//     if(i %3===0 && i %5===0){
//         console.log("fizzbuzz")
//     }
//     else if (i %3===0){
//         console.log("fizz")
//     }
//     else if(i %5===0){
//         console.log("buzz")
//     } 
    
//     else(i)

// }

// with function

function fizzbuzz(number){
    
for (let i=1; i<=number; i++){
    console.log("i=>",i)
    if(i %3===0 && i %5===0){
        console.log("fizzbuzz")
    }
    else if (i %3===0){
        console.log("fizz")
    }
    else if(i %5===0){
        console.log("buzz")
    } 
    
    else(i)

}

}
fizzbuzz(15);