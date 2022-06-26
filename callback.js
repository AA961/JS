function enterEmail(cb) {
    setTimeout(() => {
    console.log("Enter Email")
        cb();
    }, 5000);
}
function enterPassword(cb) {
    setTimeout(() =>{
    console.log("Enter Password")
        cb();
    },3000)
}
function Signing() {
    setTimeout(()=>{
    console.log("Sign In")
    },1000)
}


enterEmail(function cb() {
    enterPassword(function cb() {
        Signing()
    })
})

