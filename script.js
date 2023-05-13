//TODO: Set theme Function
/* function setTheme() 
{
    const root = document.documentElement;
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
    
    document.querySelector('.theme-name').textContent = newTheme;
}

document.querySelector('.theme-toggle').addEventListener('click', setTheme); */

//Password mismatch variables
const password = document.getElementById("password");
const confpassword = document.getElementById("confpassword");
const passwordError = document.getElementById("passwordError");
const passwordMatch = document.getElementById("passwordMatch");

//Password mismatch function
function check() {
    if (password.value === confpassword.value) {
        passwordError.classList.remove("password-mismatch");
        passwordMatch.classList.add("password-match");
    } else {
        passwordMatch.classList.remove("password-match");
        passwordError.classList.add("password-mismatch");
    }
}