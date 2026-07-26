// problem9: find the largest number
// let arr =[10, 20, 30, 40,400,500,900,5000]
// let largest=arr[0]
// for (let i=1; i<arr.length; i++){
//     let currentElement= arr[i];
//     if (currentElement>largest){
//         largest=currentElement;
//     }
//     console.log("currentEliment",currentElement)
// }
// console.log("largest",largest);


// with function
function largestNumberFromArray(arr){
let largest=arr[0]
for (let i=1; i<arr.length; i++){
    let currentElement= arr[i];
    if (currentElement>largest){
        largest=currentElement;
    }
    
}
return largest;

}
console.log(largestNumberFromArray([299, 499, 455,]))