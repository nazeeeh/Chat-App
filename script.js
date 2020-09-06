
/** JS Code For Hamburger Menu **/
/** Declaring Variables **/
const toggle = document.querySelector(".toggle");
const navbar = document.querySelector(".navbar");
 
/** Toggle mobile menu **/
function toggleMenu() {
    if (navbar.classList.contains("active")) {
        navbar.classList.remove("active");
         
        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<i class=\"fas fa-bars\"></i>";
    } else {
        navbar.classList.add("active");
         
        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = "<i class=\"fas fa-times\"></i>";
    }
}
 
/** Event Listener **/
toggle.addEventListener("click", toggleMenu, false);