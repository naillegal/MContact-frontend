var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1600: {
      slidesPerView: 7,
    },
    1200: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 2,
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".responsive-navbar .fa-bars");
  const responsiveMenu = document.querySelector(".responsive-header-container");
  const closeButton = document.querySelector(".close-responsive-header-container button");
  const overlay = document.getElementById("overlay");

  function openMenu() {
    responsiveMenu.style.left = "0";
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    responsiveMenu.style.left = "-100%";
    overlay.style.display = "none";
    document.body.style.overflow = ""; 
  }

  menuIcon.addEventListener("click", openMenu);
  closeButton.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);
});


var adSwiper = new Swiper(".adSwiper", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: "#advertisement-slider .swiper-button-next",
    prevEl: "#advertisement-slider .swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: "#advertisement-slider .swiper-pagination",
    clickable: true, 
  },
});
