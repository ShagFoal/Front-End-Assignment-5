const contactForm = document.getElementById("contact-form");
const detailsStep = document.getElementById("details-step");
const messageStep = document.getElementById("message-step");
const stepTitle = document.getElementById("step-title");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirmPassword");
const messageInput = document.getElementById("message");
const consentInput = document.getElementById("consent");
const nextButton = document.getElementById("next-button");
const backButton = document.getElementById("back-button");
const resetButton = document.getElementById("reset-button");
const formResult = document.getElementById("form-result");
const successMessage = document.getElementById("success-message");

// Existing Assignment 4 fields are hidden rather than recreated.
function showStep(step) {
  detailsStep.hidden = step !== 1;
  messageStep.hidden = step !== 2;
  formResult.hidden = true;
  stepTitle.textContent = step === 1 ? "Step 1 of 2: Your details" : "Step 2 of 2: Your enquiry";
  if (step === 1) {
    nameInput.focus();
  } else {
    document.getElementById("tour").focus();
  }
}

function validateDetails() {
  const nameValid = checkField(nameInput, nameInput.value.trim() !== "");
  const emailValid = checkField(emailInput, emailInput.value.trim() !== "" && emailInput.validity.valid);
  const passwordValid = checkField(passwordInput, passwordInput.value.trim() !== "" && passwordInput.value.length >= 6);
  const confirmValid = checkField(confirmInput, confirmInput.value !== "" && confirmInput.value === passwordInput.value);
  return nameValid && emailValid && passwordValid && confirmValid;
}

function goNext() {
  if (validateDetails()) {
    showStep(2);
  } else {
    detailsStep.querySelector(".invalid input").focus();
  }
}

// goNext is a callback: it is passed to the click event listener.
nextButton.addEventListener("click", goNext);
backButton.addEventListener("click", function () {
  showStep(1);
});

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  formResult.hidden = true;
  if (!detailsStep.hidden) {
    goNext();
    return;
  }
  const messageValid = checkField(messageInput, messageInput.value.trim() !== "");
  const consentValid = checkField(consentInput, consentInput.checked);
  if (messageValid && consentValid) {
    successMessage.textContent = "Thank you, " + nameInput.value.trim() + ". All fields are valid. This demo does not send your enquiry.";
    formResult.hidden = false;
  } else {
    messageStep.querySelector(".invalid input, .invalid textarea").focus();
  }
});

contactForm.addEventListener("input", function () {
  formResult.hidden = true;
});
contactForm.addEventListener("change", function () {
  formResult.hidden = true;
});

resetButton.addEventListener("click", function () {
  contactForm.reset();
  contactForm.querySelectorAll(".field.invalid").forEach(function (field) {
    field.classList.remove("invalid");
  });
  contactForm.querySelectorAll("[aria-invalid]").forEach(function (input) {
    input.removeAttribute("aria-invalid");
  });
  showStep(1);
});
