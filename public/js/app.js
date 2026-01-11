
let user_email = document.getElementById("email");
let user_password = document.getElementById("password");
let signUpBtn = document.getElementById("signUpBtn");


let emailMsg = document.createElement("p");
emailMsg.textContent = "Email invalid";
emailMsg.style.color = "red";
emailMsg.style.fontSize = "14px";
emailMsg.style.marginTop = "5px";
emailMsg.style.display = "none";
user_email.parentElement.parentElement.after(emailMsg);

let passwordMsg = document.createElement("p");
passwordMsg.textContent = "Password invalid";
passwordMsg.style.color = "red";
passwordMsg.style.fontSize = "14px";
passwordMsg.style.marginTop = "5px";
passwordMsg.style.display = "none";
user_password.parentElement.parentElement.after(passwordMsg);

function SING_UP() {
    let emailValue = user_email.value.trim();
    let passwordValue = user_password.value;

    let emailValid = emailValue.includes("@") && emailValue.includes(".") && emailValue.length >= 10;
    let passwordValid = passwordValue.length >= 7 && !passwordValue.includes(" ") && ["@", "#", "-", "+", "*", "/"].some(s => passwordValue.includes(s));

    if (!emailValid) {
        emailMsg.style.display = "block";
    } else {
        emailMsg.style.display = "none";
    }

    
    if (!passwordValid) {
        passwordMsg.style.display = "block";
    } else {
        passwordMsg.style.display = "none";
    }

    if (emailValid && passwordValid) {
        window.location.href = "success.html";
        return true;
    }
    return false;
}


let svg = document.getElementById("svg")

svg.addEventListener("click", () => {
    if (user_password.type == "password"){
    user_password.type = "text"
    }
    else {
        user_password.type = "password"
    }
})


signUpBtn.addEventListener("click", (e) => {
    e.preventDefault(); 
    SING_UP();
});




