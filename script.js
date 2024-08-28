// Abrir y cerrar menú

const nav = document.querySelector("#nav");
const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");

openMenu.addEventListener("click", () => {
  nav.classList.add("visible");
  document.body.style.overflow = "hidden";
});

closeMenu.addEventListener("click", () => {
  nav.classList.remove("visible");
  document.body.style.overflow = "";
});

// Cambiar nav cuando se hace scroll

document.addEventListener("scroll", function () {
  var header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Slider de tweets

let currentIndex = 0;

function updateSlidePosition() {
  const slides = document.querySelector(".tweets-slides");
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function moveSlide(direction) {
  const totalSlides = document.querySelectorAll(".tweets-slide").length;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  updateSlidePosition();
  updateDots();
}

function moveSlideTo(index) {
  const totalSlides = document.querySelectorAll(".tweets-slide").length;

  if (index >= 0 && index < totalSlides) {
    currentIndex = index;
    updateSlidePosition();
    updateDots();
  }
}

function updateDots() {
  const dots = document.querySelectorAll(".tweets-dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateDots();
});
