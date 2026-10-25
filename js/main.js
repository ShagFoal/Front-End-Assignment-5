// Shared validation: add an error class and return whether the field is valid.
function checkField(input, valid) {
  input.closest(".field").classList.toggle("invalid", !valid);
  input.setAttribute("aria-invalid", String(!valid));
  return valid;
}

// The clock is retained from Assignment 4.
const clock = document.getElementById("current-date-time");
function updateClock() {
  clock.textContent = new Date().toLocaleString("en-GB");
}
updateClock();
setInterval(updateClock, 1000);

// The former background button now switches between day and night.
const themeButton = document.getElementById("theme-button");
themeButton.addEventListener("click", function () {
  const night = document.body.classList.toggle("night");
  themeButton.textContent = night ? "Day theme" : "Night theme";
  themeButton.setAttribute("aria-pressed", String(night));
});

// switch chooses which menu item receives keyboard focus.
const menuLinks = document.querySelectorAll(".menu-link");
menuLinks.forEach(function (link, index) {
  link.addEventListener("keydown", function (event) {
    let nextIndex;
    switch (event.key) {
      case "ArrowRight":
        nextIndex = (index + 1) % menuLinks.length;
        break;
      case "ArrowLeft":
        nextIndex = (index - 1 + menuLinks.length) % menuLinks.length;
        break;
      default:
        return;
    }
    event.preventDefault();
    menuLinks[nextIndex].focus();
  });
});

// Both FAQ sections use the same simple HTML structure.
const questions = document.querySelectorAll(".faq-question");
questions.forEach(function (question) {
  question.addEventListener("click", function () {
    const answer = question.nextElementSibling;
    const open = answer.hidden;
    answer.hidden = !open;
    question.setAttribute("aria-expanded", String(open));
    question.querySelector(".faq-icon").textContent = open ? "-" : "+";
  });
});

// Subscription popup: the native dialog handles focus and the Escape key.
const popup = document.getElementById("subscription-popup");
const openPopup = document.getElementById("open-popup");
const closePopup = document.getElementById("close-popup");
const subscribeForm = document.getElementById("subscribe-form");
const popupEmail = document.getElementById("popup-email");
const popupResult = document.getElementById("popup-result");

openPopup.addEventListener("click", function () {
  subscribeForm.reset();
  checkField(popupEmail, true);
  popupResult.hidden = true;
  popup.showModal();
});
closePopup.addEventListener("click", function () {
  popup.close();
});
popup.addEventListener("click", function (event) {
  if (event.target === popup) popup.close();
});
subscribeForm.addEventListener("submit", function (event) {
  event.preventDefault();
  popupResult.hidden = true;
  const valid = popupEmail.value.trim() !== "" && popupEmail.validity.valid;
  if (checkField(popupEmail, valid)) {
    popupResult.hidden = false;
    subscribeForm.reset();
  }
});
popupEmail.addEventListener("input", function () {
  popupResult.hidden = true;
});
