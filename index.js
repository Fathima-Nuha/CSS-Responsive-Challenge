var toggle_button= document.querySelector('.toggle-button');
var navbar=document.querySelector('.nav');
var hamburger=document.querySelector('.hamburger');
var close_sign =  document.querySelector('.close')

toggle_button.addEventListener("click",()=>{
    navbar.classList.toggle('nav--visible');
    hamburger.classList.toggle('no-display')
    close_sign.classList.toggle('no-display')
    
})