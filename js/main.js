let open = false;
// Header to be loaded
const header = `<div class="logo-container">
            <img src="./svg/logo.svg" alt="">
        </div>
        <nav>
            <menu id="navMenu">
                <li><a href="./index.html">Home</a></li>
                <li><a href="./about.html">About</a></li>
                <li><a href="./shop.html">Shop</a></li>
                <li><a href="./contact.html">Contact</a></li>
            </menu>
            <div class="svg-container">
                <img src="./svg/hamburger.svg" alt="Menu Icon" id="menuIcon">
            </div>
        </nav>`
        // Footer to be loaded
const footer = `<div class="footer1">
                <img src="./svg/logo.svg" alt="Commadore Logo">
                <div class="footer-socials">
                    <!-- Links do not work as this company does not have socials-->
                     <a href=""><img src="./svg/instaSVG.svg" alt="Instragram Logo"></a>
                     <a href=""><img src="./svg/xSVG.svg" alt="X Logo"></a>
                     <a href=""><img src="./svg/facebookSVG.svg" alt="Facebook Logo"></a>
                </div>
        </div>
        <ul class="footer2">
            <li><a href="./index.html">Home</a></li>
            <li><a href="./about.html">About</a></li>
            <li><a href="./shop.html">Shop</a></li>
            <li><a href="./contact.html">Contact</a></li>
        </ul>
        <ul class="footer3">
            <li>1200 Wilson Drive</li>
            <li>West Chester PA 19380</li>
            <li><a href="tel:5555555555">(555) 456-7891</a></li>
        </ul>
        <p class="footer4">
            © 2025 Commodore. All rights reserved.
        </p>`
// Get elements from DOM
        const footerContainer = document.getElementById('footer-container')
        const headerContainer = document.getElementById('header-container')
        // Add innerhtml to elements
        footerContainer.innerHTML = footer;
        headerContainer.innerHTML = header;
        // get menuIcon
        const menuIcon = document.getElementById("menuIcon");
        // Add open menu to click event on menuIcon
        menuIcon.addEventListener("click", openMenu);
        // Get navMenu so we can add a class to it when it is active.
        const navMenu = document.getElementById("navMenu");

        // Function to toggle menu
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