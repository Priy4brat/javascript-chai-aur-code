const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this); // {}  
// in browser global obj is window obj but in node empty {}

function chai(){
    let username = "hitesh"
    console.log(this.username); // undefined //
    // this keyword is used only inside a obj not a function               
}

chai() // here it will not show any {} as the this is called inside a function show it will show some properties

const chai = function () {           
    let username = "hitesh" 
    console.log(this.username); //  undefined  // 
}

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


chai()

const addTwo = (num1, num2) => { // basic arrow function 
    return num1 + num2
}

// const addTwo = (num1, num2) =>  num1 + num2   // implicit return 


// const addTwo = (num1, num2) => ( num1 + num2 )      // *** () pe return nhi likhna h 

// const addTwo = (num1, num2) => {     // *** {} pe return likhna h
//     return  num1 + num2 
// }

// const addTwo = (num1, num2) => ({username: "hitesh"})   // *** obj return karte waqt


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()