

//HEADER

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navMenu');
const main = document.querySelector('main')
const footer = document.querySelector('footer')
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    body.classList.toggle('active');
    navMenu.classList.toggle('active');
    main.classList.toggle('active');
    footer.classList.toggle('active');
})