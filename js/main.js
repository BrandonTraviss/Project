console.log("Main Loaded")

let open = false;
const navMenu = document.getElementById("navMenu");

function openMenu(){
    console.log("Clicked")
    if(open == false) {
        menuIcon.src = "./svg/close.svg"
        open = true;
        navMenu.classList.add("is-active")
          
    } else {
        menuIcon.src = "./svg/hamburger.svg"
        open = false;
        navMenu.classList.remove("is-active")
    }
}


document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menuIcon");
  menuIcon.addEventListener("click", openMenu);
});



