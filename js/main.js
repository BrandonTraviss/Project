// Type is Module so loading is deferred meaning all elements are loaded before this is executed ( I always use Type module for my scripts as I usually have multiple JS Files and load them as modules)
let open = false;
// Function to load components
async function loadComponent(component) {
    const response = await fetch(`./components/${component}.html`);
    const loadedComponent = await response.text();
    document.getElementById(`${component}-container`).innerHTML = loadedComponent;
}
// Function to open and close menu, can only be created after Header is loaded so it is now nested in the loadComponent function
function openMenu() {
        if (open == false) {
          menuIcon.src = "./svg/close.svg";
          open = true;
          navMenu.classList.add("is-active");
        } else {
          menuIcon.src = "./svg/hamburger.svg";
          open = false;
          navMenu.classList.remove("is-active");
        }
      }
      
// Code being executed
await loadComponent('header');
await loadComponent('footer');
const menuIcon = document.getElementById("menuIcon");
const navMenu = document.getElementById("navMenu");
menuIcon.addEventListener("click", openMenu);