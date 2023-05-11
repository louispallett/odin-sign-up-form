console.log("Hello World!");

function setTheme() 
{
    const root = document.documentElement;
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
    
    document.querySelector('.theme-name').textContent = newTheme;
}

document.querySelector('.theme-toggle').addEventListener('click', setTheme);

//Password mismatch
const passwordEle = document.getElementById("password");
const password = passwordEle.value;
const confpasswordEle = document.getElementById("confpassword");
const confpassword = confpasswordEle.value;
const passwordError = document.getElementById("passwordError");


// if (password != confpassword)
// {
//     console.log("No match!");  
// }

console.log(password);
console.log(confpassword);

while (password != confpassword)
{
    passwordError.classList.add("password-mismatch");
}

