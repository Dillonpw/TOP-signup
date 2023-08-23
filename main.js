const form = document.getElementById('sign-up');
const fName = document.getElementById('fName');
const lName = document.getElementById('lName');
const email = document.getElementById('email');
const phone = document.getElementById('phone-number');
const pw = document.getElementById('password');
const pwCheck = document.getElementById('password-verify');
const fNameError = document.querySelector('.fNameError');
const lNameError = document.querySelector('.lNameError');
const emailError = document.querySelector('.emailError');
const phoneError = document.querySelector('.phoneError');
const pwError = document.querySelector('.passwordError');
const pwVerifyError = document.querySelector('.passwordVerifyError');

form.addEventListener('submit', (event) => {
    let isValid = true;

    if (fName.value.trim() === '') {
        fNameError.textContent = 'Please enter your first name';
        isValid = false;
    } else {
        fNameError.textContent = '';
    }

    if (lName.value.trim() === '') {
        lNameError.textContent = 'Please enter your last name';
        isValid = false;
    } else {
        lNameError.textContent = '';
    }

    if (
        email.value.match() !==
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) {
        emailError.textContent = 'Please enter a valid email address';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    if (
        phone.value.match() !==
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    ) {
        phoneError.textContent = 'Please enter a phone number';
        isValid = false;
    } else {
        phoneError.textContent = '';
    }
    if (pw.value.length < 8) {
        pwError.textContent = 'Password must be atleast 8 characters';
        isValid = false;
    } else {
        pwError.textContent = '';
    }
    if (pw.value !== pwCheck.value) {
        pwVerifyError.textContent = 'Passwords do not match';
        isValid = false;
    } else {
        pwVerifyError.textContent = '';
    }

    if (!isValid) {
        event.preventDefault();
    }
});
