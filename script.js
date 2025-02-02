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

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 1500, 
    disableOnInteraction: false, 
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


document.querySelectorAll(".services .box").forEach((box) => {
  const img = box.querySelector("img");
  const darkSrc = box.getAttribute("data-dark");
  const lightSrc = box.getAttribute("data-light");

  box.addEventListener("mouseenter", () => {
      img.src = lightSrc;
  });

  box.addEventListener("mouseleave", () => {
      img.src = darkSrc;
  });
});
