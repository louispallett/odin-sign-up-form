console.log("Hello World!");

/* function setTheme() 
{
    const root = document.documentElement;
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
    
    document.querySelector('.theme-name').textContent = newTheme;
}

document.querySelector('.theme-toggle').addEventListener('click', setTheme); */

//Password mismatch
const password = document.getElementById("password");
const confpassword = document.getElementById("confpassword");
const passwordError = document.getElementById("passwordError");
const passwordMatch = document.getElementById("passwordMatch");

/* console.log(password);
console.log(confpassword); */


/* while (confpassword != password) 
{
    passwordError.classList.add("password-mismatch");
} */

function check() {
    if (password.value === confpassword.value) {
        passwordError.classList.remove("password-mismatch");
        passwordMatch.classList.add("password-match");
    } else {
        passwordMatch.classList.remove("password-match");
        passwordError.classList.add("password-mismatch");
    }
}

