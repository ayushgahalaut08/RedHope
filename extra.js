let menu=document.querySelector('#menu-btn');
let navbar=document.querySelector('.header .navbar');

function reload() {
    window.location.reload();
}

menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll=()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".reviews-slider", {
    loop: true,
    spaceBetween: 20,
    autoHeight: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

