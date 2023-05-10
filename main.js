

const navBar = document.querySelector('.nav-bar-ul')


document.querySelector('.menu').addEventListener('click', run) 

function run(){
    navBar.classList.toggle('menu-bar')
}