function enterEmail() {
    return new Promise((reslove,reject)=>{
        setTimeout(() => {
            console.log("Enter Email")
            return reject("Error in Email");
            }, 3000);
    })
        
}
function enterPassword() {
    return new Promise((reslove) =>{
        setTimeout(() =>{
            console.log("Enter Password")
            reslove();
            },2000)
    })
    
}
function Signing() {
    return new Promise((reslove) =>{
        setTimeout(()=>{
            console.log("Sign In")
            reslove();
            },1000)
    })
    
}

// enterEmail().
// then(enterPassword).
// then(Signing).
// catch((err)=>{
//     alert('Error:', err)
// })

// async

async function authuntication() {
    try{
        await enterEmail();
        await enterPassword();
        await Signing();
    } catch(err) {
        console.log(err)
    }
    throw new Error();
}

authuntication().then(() =>{
    console.log("Login Sucessfully")
}).catch((err) =>{
    console.log(err)
})