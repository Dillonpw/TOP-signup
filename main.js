const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const email = document.getElementById("email");
const phone = document.getElementById("phone-number");
const pw = document.getElementById("password");
const pwCheck = document.getElementById("password-verify");
const fNameError = document.getElementByClassName("fNameError");
const lNameError = document.getElementByClassName("lNameErorr");
const emailError = document.getElementByClassName("emailError");
const phoneError = document.getElementByClassName("phoneError");
const passwordError = document.getElementByClassName("passwordError");
const passwordVerifyError = document.getElementByClassName("passwordVerifyError");


fName.addEventListener("input", (e) =>{
    if (fName.value === ""){
        fNameError.textcontent = "Please enter your first name";
    }else {
        fNameError.textcontent = "";
    }
});

lName.addEventListener("input", (e) =>{
    if
}

email.addEventListener("input", (e) =>{
    if
}

phone.addEventListener("input", (e) =>{
    if
}

pw.addEventListener("input", (e) =>{
    if
}

pwCheck.addEventListener("input", (e) =>{
    if
}


