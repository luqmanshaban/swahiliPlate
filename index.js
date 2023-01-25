

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

// HEADER 

const images = ['./images/bg11.jpg','./images/bg2.jpg','./images/bg3.jpg'];
const interval = setInterval( () => {
    startCarousel();
}, 3000)

let index = 1;

startCarousel = () => {
    header.style.backgroundImage = `url(${images[index++]})`;
    header.classList.remove('fade');
    void header.offsetWidth;
    header.classList.add('fade');
    if(index > images.length -1) index = 0;
}