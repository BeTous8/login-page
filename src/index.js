import "./styles.css";


const form = document.querySelector('form');

const userName = document.querySelector('#user');
const userNameError = document.querySelector('#user + span.error');

const email = document.querySelector('#email');
const emailError = document.querySelector('#email + span.error');

const country = document.querySelector('#country');
const countryError = document.querySelector('#country + span.error');

const postalCode = document.querySelector('#postal');
const postalCodeError = document.querySelector('#postal + span.error');

const password = document.querySelector('#password');
const passError = document.querySelector('#password + span.error');

const confPass = document.querySelector('#conf-pass');
const confPassError = document.querySelector('#conf-pass + span.error');

// emailError.textContent ='hello'
// console.log(userNameError);


function userValidation (inputField, errorField) {
    if (inputField.validity.valueMissing) {
        console.log(inputField.validity.valueMissing);
        errorField.textContent = "Don't leave the field empty!";
        errorField.classList.add('active')
        return false;
    } else if (inputField.validity.tooShort) {
        errorField.textContent = 'too short';
        errorField.classList.add('active')
        return false;
    } else {
        errorField.textContent = 'Checked.';
        errorField.classList.remove('active');
        
        return true;
    }
}

// email validation

function emailValidation(inputField, errorField) {
    console.log(inputField.value)
    // check if it is not empty
    // check if it has min char
    if (inputField.validity.valueMissing) {
        console.log(inputField.validity.valueMissing);
        errorField.textContent = "Don't leave the field empty!";
        errorField.classList.add('active')
        return false;

    } else if (inputField.validity.tooShort) {
        errorField.textContent = 'too short';
        errorField.classList.add('active')
        return false;

    } else if (inputField.validity.typeMismatch) {
        errorField.textContent = 'Please enter a valid email address.';
        errorField.classList.add('active')
        return false;
        
        
    } else if (!validateEmailPatern(inputField)) {
        console.log(validateEmailPatern(inputField))
        errorField.textContent = 'Email must end with @example.com';
        errorField.classList.add('active')
        return false;
    } else {
        errorField.textContent = 'Checked.';
        errorField.classList.remove('active')
        return true;
    }  
}


function validateEmailPatern(inputField) {
    const email = inputField.value;
    console.log(email)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
        return true;
    } else {
        return false;
    }
}


function countryValidation (inputField, errorField) {
    if (inputField.validity.valueMissing) {
        console.log(inputField.validity.valueMissing);
        errorField.textContent = "Don't leave the field empty!";
        errorField.classList.add('active')
        return false;
    } else {
        errorField.textContent = 'Checked.';
        errorField.classList.remove('active')
        return true;
    }
}


function postalCodeValidation (inputField, errorField) {
    if (inputField.validity.valueMissing) {
        console.log(inputField.validity.valueMissing);
        errorField.textContent = "Don't leave the field empty!";
        errorField.classList.add('active')
        return false;
    } else if (inputField.validity.rangeUnderflow || inputField.validity.rangeOverflow) {
        errorField.textContent = '5 digits are required';
        errorField.classList.add('active')
        return false;
    } else {
        errorField.textContent = 'Checked.';
        errorField.classList.remove('active')
        return true;
    }
}


function passwordValidation (inputField, errorField) {
    if (inputField.validity.valueMissing) {
        console.log(inputField.validity.valueMissing);
        errorField.textContent = "Don't leave the field empty!";
        errorField.classList.add('active')
        return false;
    } else if (inputField.validity.tooShort) {
        console.log(inputField.validity.tooShort);
        errorField.textContent = 'the password is weak';
        errorField.classList.add('active')
        return false;
    } //it must have at least one capital letter
    else if (!hasCapitalLetter(inputField.value)) {
        console.log('the function is fired');
        errorField.textContent = 'must have at least a capital letter ';
        errorField.classList.add('active')
        return false;
    }
    else if (!hasNumber(inputField.value)) {
        console.log('the function is fired');
        errorField.textContent = 'must have at least a number ';
        errorField.classList.add('active')
        return false;
    }

    else if (!hasSpecialChar(inputField.value)) {
        console.log('the function is fired');
        errorField.textContent = 'must have at least a special char';
        errorField.classList.add('active')
        return false;
    }
        //it must have at least one digit
        //it must have at least one special char
    else {
        errorField.textContent = 'Checked.';
        errorField.classList.remove('active')
        return true;
    }
}


function hasCapitalLetter(str) {
    return /[A-Z]/.test(str);
}

function hasNumber(str) {
    return /[0-9]/.test(str);
}

function hasSpecialChar(str) {
    return /[@,#,$,%,^,&,*]/.test(str);
}



function confirmPassValidation (inputField, errorField, password) {
    if (inputField.validity.valueMissing) {
        console.log(inputField.validity.valueMissing);
        errorField.textContent = "Don't leave the field empty!";
        errorField.classList.add('active')
        return false;
    } else if (inputField.value !== password.value) {
        errorField.textContent = 'does not match';
        errorField.classList.add('active')
        return false;
    } else {
        errorField.textContent = 'Checked.';
        errorField.classList.remove('active')
        return true;
    }
}

// function checkShortChar (inputField, errorField) {
//     if (inputField.validity.tooShort) {
//         errorField.textContent = 'too short';
//     } else {
//         errorField.textContent = '';
//     }
// }


// username input
// userName.addEventListener('input', () => {
//     userValidation(userName, userNameError);
    
// });


userName.addEventListener('blur', () => {
    userValidation(userName, userNameError);
});


// email input
// email.addEventListener('input', () => {
    
//     emailValidation(email, emailError);
    
// });


email.addEventListener('blur', () => {
    emailValidation(email, emailError);
});



// email input
// country.addEventListener('input', () => {
//     countryValidation(country, countryError);
    
// });


country.addEventListener('blur', () => {
    countryValidation(country, countryError);
});


// // email input
// postalCode.addEventListener('input', () => {
//     postalCodeValidation(postalCode, postalCodeError);
    
// });


postalCode.addEventListener('blur', () => {
    postalCodeValidation(postalCode, postalCodeError);
});


// email input
// password.addEventListener('input', () => {
//     passwordValidation(password, passError);
    
// });


password.addEventListener('blur', () => {
    passwordValidation(password, passError);
});


// confPass.addEventListener('input', () => {
//     confirmPassValidation(confPass, confPassError, password);
    
// });


confPass.addEventListener('blur', () => {
    confirmPassValidation(confPass, confPassError, password);
});


form.addEventListener('submit', (event) => {
    const isUserValid = userValidation(userName, userNameError);
    const isEmailValid = emailValidation(email, emailError);
    const isCountryValid = countryValidation(country, countryError);
    const isPostaclValidate = postalCodeValidation(postalCode,postalCodeError);
    const isPasswordValidate = passwordValidation(password,passError);
    const isConfPassValidate = confirmPassValidation(confPass,confPassError,password)

    if (!isUserValid || !isEmailValid || !isCountryValid || !isPostaclValidate || !isPasswordValidate || !isConfPassValidate) {
        event.preventDefault(); // Prevent form submission if any field is invalid
    }
});