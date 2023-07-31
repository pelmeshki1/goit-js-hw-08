import throttle from 'lodash.throttle';

const inputEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');
const form = document.querySelector('.feedback-form');
const FORM_STATE = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};
updateForm();

inputEl.addEventListener(
  'input',
  throttle(() => {
    formData.email = inputEl.value;
    localStorage.setItem(FORM_STATE, JSON.stringify(formData));
  }, 500)
);

messageEl.addEventListener(
  'input',
  throttle(() => {
    formData.message = messageEl.value;
    localStorage.setItem(FORM_STATE, JSON.stringify(formData));
  }, 500)
);
