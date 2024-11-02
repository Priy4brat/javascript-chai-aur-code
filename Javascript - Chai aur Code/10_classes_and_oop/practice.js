// initialising function 
function details(username, id, password){
    this.username=username
    this.id=id
    this.password=password

    return this
}

// passing values into the function
let user1=details('vishal','hfgd43','432')
let user2=details('vishu','453vgh','54')
console.log(user1); 
// username: 'vishu',  
// id: '453vgh',
// password: '54'


// to prevent this new keyword is used as it creates a new instance rather than overwritting the same 
 user1=new details('vishal','hfgd43','432')
 user2=new details('vishu','453vgh','54')
console.log(user1);  // return this is not mandetory 

///  N   O   T   E   S 
// 1. new obj is created 
// 2. constructor function is called 
// 3. this keyword m jo v saaare arguments sab construcxtor k through inject ho jate h 
// 4. give s the final output 
// { username: 'vishal', id: 'hfgd43', password: '432' }