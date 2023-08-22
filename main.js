const form = document.getElementById("sign-up");
const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const email = document.getElementById("email");
const phone = document.getElementById("phone-number");
const pw = document.getElementById("password");
const pwCheck = document.getElementById("password-verify");
const fNameError = document.querySelector(".fNameError"); 
const lNameError = document.querySelector(".lNameError"); 
const emailError = document.querySelector(".emailError");
const phoneError = document.querySelector(".phoneError");
const passwordError = document.querySelector(".passwordError");
const passwordVerifyError = document.querySelector(".passwordVerifyError");

form.addEventListener("submit", (event) => {
    let isValid = true;

    if (fName.value.trim() === "") {
        fNameError.textContent = "Please enter your first name";
        isValid = false;
    } else {
        fNameError.textContent = "";
    }

    if (lName.value.trim() === "") {
        lNameError.textContent = "Please enter your last name";
        isValid = false;
    } else {
        lNameError.textContent = "";
    }


    if (!isValid) {
        event.preventDefault();
    }
});