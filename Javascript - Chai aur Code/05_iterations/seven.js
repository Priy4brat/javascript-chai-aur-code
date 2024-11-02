const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newNums = myNumers.map( (num) => { return num + 10})

 newNums = myNumers
                .map((num) => num * 10 ) // [10, 20, to 100 ]
                .map( (num) => num + 1)  // [11, 21 , 31 to 101 ]
                .filter( (num) => num >= 40) // [ 41,51 to 101 ]

console.log(newNums);  // [ 41,51 to 101 ]