//Area of clickables items
const menuArea = document.querySelector('.navbar');

//Clickables
const menuMobile = document.querySelector('#menu');


document.querySelectorAll('.image-slider img').forEach(images => {
    images.onclick = () => {
        let src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src
    }
});


window.onscroll = () => {
    menuMobile.classList.remove('fa-times');
    menuArea.classList.remove('active');
}


menuMobile.onclick = () => {
    menuMobile.classList.toggle('fa-times');
    menuArea.classList.toggle('active');
}
