//Area of clickables items
const menuArea = document.querySelector('.navbar');

//Clickables
const menuMobile = document.querySelector('#menu-mobile');


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


//Slider Area
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    grapCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
    },
});