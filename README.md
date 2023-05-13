# odin-sign-up-form
The Odin Project: Sign-up Form Project (Full Stack JS)

Background image is from here: https://unsplash.com/photos/d30sszrW7Vw

Moon icon from(to be added): https://freeicons.io/halloween-vol-1-outline/moon-halloween-festival-thanksgiving-horror-ghost-scary-spooky-fear-death-dark-evil-event-icon-746997#



Some really useful things I learned:
HTML:
1. <label> and <input> are naturally side by side. You have to put the <label> in an element (<div>) and the input outside that wrapping element to have the label go above.
2. To use the display: grid; property properly, wrap what needs to go together in another <div> element - so you have div>div>label^input (to achieve the <label> and <input> structure as above). The whole thing is wrapped by a <div> element.
3. You can use the onkeyup="functionName();" command in the <input> element to call a function once the user has started typing. This was critical for the 'password mismatch' function.

CSS:
1. Used Display grid for the form. I ended up using grid-template-columns: auto auto; My understanding is that the number of values given states the number of columns (i.e. two 'autos' made two columns with the logical number of rows).
2. Using a function to set the --padding-left and --left-width meant that I could assign this to various elements and have them align much easier. If I needed to change it, they would do so together.
3. Using the background-image property. This needs to be accompanied by the background-size property - the value I set for this was 'cover' which allowed me to set the image to fill the box it contained. My only issue with this is that the image changes as you resize the browser.
4. position: absolute; and position: relative were brilliant. Unlike position: fixed; they did not interact with other elements on the page or move about when you change the browser size.

JavaScript:
1. Getting the user input from a form element -> const variable = document.getElementById("elementID").value; The value method here is what gets the value. In the .js file, I created a variable which selected the element and then used that plus .value - i.e. password.value = the user password entered.
2. variable.classList.remove/add -> this allowed me add the appropriate classes to the <span> elements along with an if statement. In the end, the function was much more simplistic than first envisioned. When looking up online, it suggested creating a variable named check whose value was a function. This was fine, but looks a bit more complicated to me. 


TODO (things I plan on doing in the future):
Complete dark/light theme. 
Current issue is that when page initially loads neither theme is showing (light should be done by default) and it is only after you select the icon that the light theme becomes active.