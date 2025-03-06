// home scripts 
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
  const closeButton = document.querySelector(
    ".close-responsive-header-container button"
  );
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



// products scripts 
document.addEventListener("DOMContentLoaded", function () {
  const filterByElements = document.querySelectorAll(".filter-by");

  filterByElements.forEach((filterBy) => {
    const toggleBtn = filterBy.querySelector(".toggle-filter");

    if (toggleBtn) {
      toggleBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        filterBy.classList.toggle("active");
      });
    }
  });

  const regulationDropdown = document.querySelector(
    ".regulation-products-dropdown"
  );
  const regulationItems = document.querySelectorAll(
    ".regulation-products-content > div"
  );

  regulationItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.stopPropagation();
      if (regulationDropdown.style.display === "block") {
        regulationDropdown.style.display = "none";
      } else {
        regulationDropdown.style.display = "block";
      }
    });
  });

  document.addEventListener("click", function (e) {
    if (
      regulationDropdown &&
      !regulationDropdown.contains(e.target) &&
      !document.querySelector(".regulation-products-content").contains(e.target)
    ) {
      regulationDropdown.style.display = "none";
    }
  });
});



// products-detail scripts 
var adSwiper = new Swiper(".productDetailSwiper", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: "#selected-product-info .swiper-button-next",
    prevEl: "#selected-product-info .swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: "#selected-product-info .swiper-pagination",
    clickable: true,
  },
});


document.addEventListener("DOMContentLoaded", function() {
  const counterValueElem = document.querySelector('.counter .counter-value');
  const minusButton = document.querySelector('.counter .counter-btn.minus');
  const plusButton = document.querySelector('.counter .counter-btn.plus');

  minusButton.addEventListener('click', function() {
    let currentValue = parseInt(counterValueElem.textContent, 10);
    if (currentValue > 1) {
      counterValueElem.textContent = currentValue - 1;
    }
  });

  plusButton.addEventListener('click', function() {
    let currentValue = parseInt(counterValueElem.textContent, 10);
    counterValueElem.textContent = currentValue + 1;
  });
});