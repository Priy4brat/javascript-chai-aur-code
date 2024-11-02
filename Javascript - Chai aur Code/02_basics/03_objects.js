// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", // * * * representation of symbol
    age: 18, 
    location: "Jaipur", 
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email) // hitesh@google.com
console.log(JsUser["email"]) // hitesh@google.com
console.log(JsUser["full name"]) // Hitesh Choudhary
console.log(JsUser[mySym]) // mykey1    

JsUser.email = "hitesh@chatgpt.com"
//  Object.freeze(JsUser)  // changes canot be done furthermore
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser); // email will be changed to hitesh@chatgpt.com

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting()); // Hello JS user
console.log(JsUser.greetingTwo());  // Hello JS user, Hitesh