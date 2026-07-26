// problem 10: find smallest number from array

// let arr =[10, 20, 30, 40,400,500,900,5000]
// let smallest=arr[0]
// for (let i=1; i<arr.length; i++){
//     let currentElement= arr[i];
//     if (currentElement<smallest){
//         smallest=currentElement;
//     }
//     console.log("currentEliment",currentElement)
// }
// console.log("smallest",smallest);

// with function

function smallestNumberFromArray(arr){
    let smallest=arr[0]
for (let i=1; i<arr.length; i++){
    let currentElement= arr[i];
    if (currentElement<smallest){
        smallest=currentElement;
    }
    
}
return smallest;

}
console.log(smallestNumberFromArray([299, 499, 455,]));
