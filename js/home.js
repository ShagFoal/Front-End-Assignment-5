const stars = document.querySelectorAll(".star");
const ratingResult = document.getElementById("rating-result");
const ratingSound = document.getElementById("rating-sound");

// forEach is a higher-order function: it receives a callback function.
stars.forEach(function (star, index) {
  star.addEventListener("click", function () {
    stars.forEach(function (item, itemIndex) {
      const selected = itemIndex <= index;
      item.classList.toggle("selected", selected);
      item.setAttribute("aria-pressed", String(selected));
    });

    ratingResult.textContent = "Your rating: " + (index + 1) + " out of 5.";

    // Reuse one audio element so repeated clicks cannot overlap sounds.
    ratingSound.currentTime = 0;
    ratingSound.play().catch(function () {
      ratingResult.textContent += " Sound is unavailable in this browser.";
    });
  });
});
