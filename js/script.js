/** NAVBAR HAMBURGER JS **/
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const signUpModal = document.querySelector(".signup-modal");

/** NAVBAR HAMBURGER JS **/
/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
         
        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = `<i class="fas fa-bars"></i>`;
    } else {
        menu.classList.add("active");
         
        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = `<i class="fas fa-times"></i>`;
    }
}
 
/* Event Listener */
toggle.addEventListener("click", toggleMenu, false)

// Sign up Modal
function modal(){
    if (signUpModal.classList.contains("reveal")) {
        signUpModal.classList.remove("reveal");
    } else {
        signUpModal.classList.add("reveal");
    }
}