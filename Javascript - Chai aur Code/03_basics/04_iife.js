// Immediately Invoked Function Expressions (IIFE)
// global scoope se jo pollution hota h  use hatane k liye iife ka use kiya jaaata h

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
 
//    ;   SEMICOLON is required after the iife to terminaate the function

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

