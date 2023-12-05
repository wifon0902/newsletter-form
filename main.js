const form = document.querySelector('.newsletter-form');
const successMessage = document.querySelector('#email');
const signup = document.querySelector('.signup');
const success = document.querySelector('#success');
const dismiss = document.querySelector('#dismiss');
const error = document.querySelector('#error-message');

function switchSections() {
  signup.classList.toggle('hidden');
  success.classList.toggle('hidden');
}

function updateSuccessMessage(email) {
  successMessage.textContent = email;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = form.querySelector('#email-input');
  if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    error.textContent = 'Valid email required';
    email.classList.add('error-input');
    return false;
  }
  email.classList.remove('error-input');
  updateSuccessMessage(email.value);
  switchSections();
});

dismiss.addEventListener('click', () => {
  switchSections();
  updateSuccessMessage("");
  error.textContent = '';
});