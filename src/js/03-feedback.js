import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.feedback-form input');
const messageInput = document.querySelector('.feedback-form textarea');
const STORAGE_KEY = 'feedback-form-state';
const formData = {
  email: '',
  message: '',
};

updateFormData();

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  console.log(formData);
}

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function updateFormData() {
  const savedFormData = localStorage.getItem(STORAGE_KEY);

  if (savedFormData) {
    const parsedFormData = JSON.parse(savedFormData);
    emailInput.value = parsedFormData.email;
    messageInput.value = parsedFormData.message;
  }
}

