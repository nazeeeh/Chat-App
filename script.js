
/** JS Code For Hamburger Menu **/
/** Declaring Variables **/
const toggle = document.querySelector(".toggle");
const navbar = document.querySelector(".navbar");
const chat_box = document.getElementById("chatbox");

// chat_box.style.display = "none";

const chatBoxBtn = document.getElementById("chatBoxButton");
const logInPage = document.getElementById("log-page");
const signUpPage = document.getElementById("sign-page");
const logInTab = document.querySelector("#login-tab");
const signUpTab = document.querySelector("#signup-tab");


/** Toggle mobile menu **/
function toggleMenu() {
    if (navbar.classList.contains("show")) {
        navbar.classList.remove("show");
         
        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<i class=\"fas fa-bars\"></i>";
    } else {
        navbar.classList.add("show");
         
        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = "<i class=\"fas fa-times\"></i>";
    }
}
 
/** Event Listener **/
toggle.addEventListener("click", toggleMenu, false);

function toggleChatBox(e){

    e.preventDefault();

    if(chat_box.style.display === "none"){
        chat_box.style.display = "block"
    }else{
        chat_box.style.display = "none"
    }
    
}

chatBoxBtn.addEventListener("click", toggleChatBox, false);

// toggleChatBox();

// LOGIN AND SIGN UP TAB

// function tabForm(param) {
//     if(param === 'signup'){
//         logInTab.style.display = "none";
//         signUpTab.style.display = "block";
//         signUpPage.classList.add("current");
//         logInPage.classList.remove("current");
//     } else {
//         logInTab.style.display = "block";
//         signUpTab.style.display = "none";
//         logInPage.classList.add("current");
//         signUpPage.classList.remove("current");
//     }
// }

function reveal(x){
    e = document.getElementById(x);
    if(e.style.display === "none"){
        e.style.display = "block";
    } else {
        e.style.display = "none";
    }
}