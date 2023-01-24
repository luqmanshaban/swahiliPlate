

//HEADER

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navMenu');
const header = document.querySelector('.header')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    header.classList.toggle('active');

})

document.querySelectorAll('.navLink').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');

}))