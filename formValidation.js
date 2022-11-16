const form = document.querySelector("#submit");
const email = document.querySelector("#email");
const emailError = document.querySelector(".error");

form.addEventListener("click", (event) => {
  if (email.validity.typeMismatch) {
    emailError.textContent = "Please enter a valid email adress in lower case";
  } else {
    emailError.textContent = "";
  }
});
