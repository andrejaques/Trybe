/* ----- function alert button ----- */
const buttonLoggin = document.querySelector('#button-login');

function alertaT() {
  const user = document.querySelector('#user-email-phone');
  alert(user.value);
}

buttonLoggin.addEventListener('click', alertaT);

/* ----- function add personalized gender ----- */
function createCustomGender() {
  const personalizado = document.querySelector('#Personalizado');
  const genderCustom = document.querySelector('#custom-gender');
  if (personalizado.checked === true) {
    genderCustom.setAttribute('type', 'text');
    genderCustom.value = '';
  } else {
    genderCustom.setAttribute('type', 'hidden');
  }
}

createCustomGender();

/* ----- function validate inputs ----- */
const registerButton = document.querySelector('#facebook-register');
const form = document.querySelector('#form');
let validateCheck = 0;

function validate(e) {
  e.preventDefault();
  validateCheck = 0;
  const arrayInputs = document.querySelectorAll('.is-filled');

  for (let index = 0; index < arrayInputs.length; index += 1) {
    if (arrayInputs[index].value === '') {
      validateCheck += 1;
    }
  }

  if (validateCheck !== 0) {
    const errorMessage = document.createElement('p');
    errorMessage.innerHTML = 'Campos inválidos';
    form.appendChild(errorMessage);
  }
}

registerButton.addEventListener('click', validate);

/* ----- function replace container ----- */
function replaceContainer(e) {
  e.preventDefault();

  if (validateCheck === 0) {
    const name = document.querySelector('input[name="firstname"]');
    const lastName = document.querySelector('input[name="lastname"]');
    const phoneEmail = document.querySelector('input[name="phone_email"]');
    const birthDate = document.querySelector('input[name="birthdate"]');
    const gender = document.querySelectorAll('input[name="gender"]');
    let genderValue = 'Male';
    const rightContainer = document.querySelector('.right-content');

    /* get the gender value */
    for (let index = 0; index < gender.length; index += 1) {
      if (gender[index].checked) {
        genderValue = gender[index].value;
      }
    }

    /* remove all rightContainer Children */
    while (rightContainer.hasChildNodes()) {
      rightContainer.removeChild(rightContainer.firstChild);
    }

    /* inputs in right container */
    const inputName = document.createElement('p');
    inputName.innerHTML = `Olá, ${name.value} ${lastName.value}`;
    rightContainer.appendChild(inputName);

    const inputEmail = document.createElement('p');
    inputEmail.innerHTML = phoneEmail.value;
    rightContainer.appendChild(inputEmail);

    const inputBirth = document.createElement('p');
    inputBirth.innerHTML = birthDate.value;
    rightContainer.appendChild(inputBirth);

    const inputGender = document.createElement('p');
    inputGender.innerHTML = genderValue;
    rightContainer.appendChild(inputGender);
  }
}

registerButton.addEventListener('click', replaceContainer);
