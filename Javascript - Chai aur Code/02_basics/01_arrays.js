// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]); // 1

// Array methods

myArr.push(6) // "push" adds a new element to the last position 
myArr.push(7) // [0, 1, 2, 3, 4, 5,6 ,7]
myArr.pop() // removes from last 7 is deleted 

myArr.unshift(9) // adds 9 to front [9, 0, 1, 2, 3, 4, 5,6 ]
myArr.shift() // removes the 1st element

console.log(myArr.includes(9)); // false 
console.log(myArr.indexOf(3)); // 3

const newArr = myArr.join() // return a new string from the given array

console.log(myArr); // [0, 1, 2, 3, 4, 5,6 ]  -> array
console.log( newArr); // 0, 1, 2, 3, 4, 5,6  -> string


// slice, splice

console.log("A ", myArr); // A [0, 1, 2, 3, 4, 5,6 ]

const myn1 = myArr.slice(1, 3) // returns a copy of the section of an array

console.log(myn1); // [1,2]
console.log("B ", myArr); // B [0, 1, 2, 3, 4, 5,6 ]


const myn2 = myArr.splice(1, 3) // removes element from the origial array
console.log("C ", myArr); // C [0,4,5,6]
console.log(myn2); // [1,2,3]
