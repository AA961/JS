let h1 = document.querySelector('.heading');
let button = document.querySelector('.btn');
let button2 = document.querySelector('.btn2');
let body = document.querySelector('body')
let button3 = document.querySelector('.remove')



button.addEventListener('click',() =>{
    h1.classList.add('text');
    button2.classList.remove('btn2')
    button.innerHTML = "Displayed"
})

button2.addEventListener('click',() =>{
    h1.classList.remove('text');
    button.innerHTML = "Display"
    button2.classList.add('btn2')
})

let i = 0;

h1.addEventListener('click',() =>{
    let h2 = document.createElement('h2')
    body.appendChild(h2);
    h2.classList.add('text')
    h2.innerHTML= "This is Created By Javascript"
    i++ ;
    button3.addEventListener('click',() =>{
        i--;
        body.removeChild(h2);
    })
    
    
})
