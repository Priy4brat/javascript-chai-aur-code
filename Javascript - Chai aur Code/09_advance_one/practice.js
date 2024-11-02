const promisethree=new Promise((resolve, reject) => {
    resolve({
        username : "vishal",
        password : "1234",

    })  
})

promisethree.then(function(user){
    console.log(user)
})