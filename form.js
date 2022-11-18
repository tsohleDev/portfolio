const form = document.querySelector('#submit');
const nametag = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const emailError = document.querySelector('.error');

form.addEventListener('click', () => {
  if (email.validity.typeMismatch) {
    emailError.textContent = 'Please enter a valid email address in lower case';
  } else {
    emailError.textContent = '';
  }
});

let formData = {
  name: '',
  email: '',
  message: '',
};

const loadFormData = () => {
  const persistantData = localStorage.getItem('form');
  if (persistantData) {
    const data = JSON.parse(persistantData);
    nametag.value = data.name;
    email.value = data.email;
    message.value = data.message;
    formData = data;
  }
};

const stringfyForm = () => {
  const data = JSON.stringify(formData);
  localStorage.setItem('form', data);
};

nametag.addEventListener('input', () => {
  formData.name = nametag.value;
  stringfyForm();
});
email.addEventListener('input', () => {
  formData.email = email.value;
  stringfyForm();
});
message.addEventListener('input', () => {
  formData.message = message.value;
  stringfyForm();
});

loadFormData();
