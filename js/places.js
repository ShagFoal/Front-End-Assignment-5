const slides = document.querySelectorAll(".gallery-slide");
const dots = document.querySelectorAll(".gallery-dot");
const previousButton = document.getElementById("previous-slide");
const nextButton = document.getElementById("next-slide");
const counter = document.getElementById("gallery-counter");
let currentSlide = 0;

function showSlide(index) {
  // The remainder operator wraps from the last photo to the first.
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach(function (slide, slideIndex) {
    slide.hidden = slideIndex !== currentSlide;
    dots[slideIndex].setAttribute("aria-pressed", String(slideIndex === currentSlide));
  });
  counter.textContent = "Photo " + (currentSlide + 1) + " of " + slides.length;
}

previousButton.addEventListener("click", function () {
  showSlide(currentSlide - 1);
});
nextButton.addEventListener("click", function () {
  showSlide(currentSlide + 1);
});
dots.forEach(function (dot, index) {
  dot.addEventListener("click", function () {
    showSlide(index);
  });
});
