const form = document.getElementById('form');
const uname = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateInputs();
});


const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message
  inputControl.classList.add('error')
  inputControl.classList.remove('success')

  errorDisplay.style.color ="red";
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = ''
  inputControl.classList.add('success');
  inputControl.classList.remove('error')
}

const validateInputs = () => {
  const unameValue = uname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();


  if (unameValue === '') {
    setError(uname, 'Your name is required')
  } else {
    setSuccess(uname);
  }
  
  if (emailValue === '') {
    setError(email, 'Your email is required')
  } else {
    setSuccess(email)
  }


  if (passwordValue === '') {
    setError(password, 'Your password is required');
  } else if (passwordValue.length < 8) {
    setError(password, 'Your pasword must be at least 8 character')
  } else {
    setSuccess(password)
  }

  if (password2Value === '') {
    setError(password2, 'Please confirm your email')
  } else if (password2Value !== passwordValue) {
    setError(password2, 'Your password do not match')
  } else {
    setSuccess(password2);
  }
}