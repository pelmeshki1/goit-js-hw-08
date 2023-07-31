import throttle from 'lodash.throttle';

const inputEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');
const form = document.querySelector('.feedback-form');
const FORM_STATE = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};
