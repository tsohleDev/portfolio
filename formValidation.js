const form = document.querySelector('#submit');
const email = document.querySelector('#email');
const emailError = document.querySelector('.error');

form.addEventListener('click', () => {
  if (email.validity.typeMismatch) {
    emailError.textContent = 'Please enter a valid email address in lower case';
  } else {
    emailError.textContent = '';
  }
});
