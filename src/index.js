import "./styles.css";
import alertIcon from "./assets/alert.svg";
import checkIcon from "./assets/check-circle.svg";

const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');

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


function checkCommonErrors(inputField, errorField) {
    if (inputField.validity.valueMissing) {
        console.log(inputField.validity.valueMissing);
        errorField.innerHTML = `
            <span class='pic'><img src="${alertIcon}" height="20px" width="20px"></span>
            <span class='text'> Don't leave the field empty</span>
        `;
        inputField.classList.add('invalid');
        errorField.classList.add('active')
        return true;
    } else if (inputField.validity.tooShort) {
        errorField.innerHTML = `
            <span class='pic'><img src="${alertIcon}" height="20px" width="20px"></span>
            <span class='text'> Too short!</span>
        `
        inputField.classList.add('invalid');
        errorField.classList.add('active')
        return true;
    }

    return false;
}

function userValidation (inputField, errorField) {
    if (checkCommonErrors(inputField, errorField)) {
        return false;

    } else {
        errorField.innerHTML = `
            <span class='pic'><img src="${checkIcon}" height="20px" width="20px"></span>
            `;
        errorField.classList.remove('active');
        inputField.classList.remove('invalid');
        
        return true;
    }
}

// email validation

function emailValidation(inputField, errorField) {
    if (checkCommonErrors(inputField, errorField)) {
        return false;

    } else if (inputField.validity.typeMismatch) {
        errorField.innerHTML = `
            <span class='pic'><img src="${alertIcon}" height="20px" width="20px"></span>
            <span class='text'>Please enter a valid email address.</span>
        `
        inputField.classList.add('invalid');
        errorField.classList.add('active')
        return false;
        
        
    } else if (!validateEmailPatern(inputField)) {
        console.log(validateEmailPatern(inputField))
        errorField.innerHTML = `
            <span class='pic'><img src="${alertIcon}" height="20px" width="20px"></span>
            <span class='text'>Email must end with @example.com.</span>
        `
        inputField.classList.add('invalid');
        errorField.classList.add('active')
        return false;
    } else {
        errorField.innerHTML = `
            <span class='pic'><img src="${checkIcon}" height="20px" width="20px"></span>
            `;
        errorField.classList.remove('active');
        inputField.classList.remove('invalid');
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
    if (checkCommonErrors(inputField, errorField)) {
        return false;
    } else {
        errorField.innerHTML = `
            <img src="${checkIcon}" height="20px" width="20px">
            `;
        errorField.classList.remove('active');
        inputField.classList.remove('invalid');
        return true;
    }
}


function postalCodeValidation (inputField, errorField) {
    if (checkCommonErrors(inputField, errorField)) {
        return false;
    } else if (inputField.validity.rangeUnderflow || inputField.validity.rangeOverflow) {
        errorField.innerHTML = `
            <span class='pic'><img src="${alertIcon}" height="20px" width="20px"></span>
            <span class='text'>5 digits are required</span>
        `;
        
        errorField.classList.add('active')
        return false;
    } else {
        errorField.innerHTML = `
            <span class='pic'><img src="${checkIcon}" height="20px" width="20px"></span>
            `;
        errorField.classList.remove('active');
        inputField.classList.remove('invalid');
        return true;
    }
}


function passwordValidation (inputField, errorField) {
    if (checkCommonErrors(inputField, errorField)) {
        return false;
    } //it must have at least one capital letter
    else if (!hasCapitalLetter(inputField.value)) {
        errorField.innerHTML = `
            <span class='pic'><img src="${alertIcon}" height="20px" width="20px"></span>
            <span class='text'>must have at least a capital letter</span>
        `;
        inputField.classList.add('invalid');
        errorField.classList.add('active')
        return false;
    }
    else if (!hasNumber(inputField.value)) {
        errorField.innerHTML = `
            <span class='pic'><img src="${alertIcon}" height="20px" width="20px"></span>
            <span class='text'>must have at least a number</span>
        `;
        inputField.classList.add('invalid');
        errorField.classList.add('active')
        return false;
    }

    else if (!hasSpecialChar(inputField.value)) {
        errorField.innerHTML = `
            <span class='pic'><img src="${alertIcon}" height="20px" width="20px"></span>
            <span class='text'>must have at least a special char</span>
        `;
        inputField.classList.add('invalid');
        errorField.classList.add('active')
        return false;
    }
        //it must have at least one digit
        //it must have at least one special char
    else {
        errorField.innerHTML = `
            <span class='pic'><img src="${checkIcon}" height="20px" width="20px"></span>
            `;
        errorField.classList.remove('active')
        inputField.classList.remove('invalid');
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
    return /[@,#,$,%,^,&,*,-,_,+,=]/.test(str);
}



function confirmPassValidation (inputField, errorField, password) {
    if (checkCommonErrors(inputField, errorField)) {
        return false;
    } else if (inputField.value !== password.value) {
        errorField.innerHTML = `
            <span class='pic'><img src="${alertIcon}" height="20px" width="20px"></span>
            <span class='text'>does not match</span>
        `;
        inputField.classList.add('invalid');
        errorField.classList.add('active')
        return false;
    } else {
        errorField.innerHTML = `
            <span class='pic'><img src="${checkIcon}" height="20px" width="20px"></span>
            `;
        errorField.classList.remove('active');
        inputField.classList.remove('invalid');
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

inputs.forEach(input => {
    input.addEventListener('blur', () => {
        input.classList.add('touched');
    });
});