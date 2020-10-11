
/** JS Code For Hamburger Menu **/
/** Declaring Variables **/
const toggle = document.querySelector(".toggle");
const navbar = document.querySelector(".navbar");
 

const chat_box = document.getElementById("chatbox");

// chat_box.style.display = "none";

const chatboxButton = document.getElementById("chatBoxButton");
const logInPage = document.getElementById("log-page");
const signUpPage = document.getElementById("sign-page");
const logInTab = document.querySelector("#login-tab");
const signUpTab = document.querySelector("#signup-tab");
const adminUserSetting1 = document.getElementById("admin-user-setting1");
const adminUserSetting2 = document.getElementById("admin-user-setting2");
const adminUserSetting3 = document.getElementById("admin-user-setting3");
const adminUserSetting4 = document.getElementById("admin-user-setting4");
const adminChatSetting1 = document.getElementById("admin-chat-setting1");
const adminChatSetting2 = document.getElementById("admin-chat-setting2");
const adminChatSetting3 = document.getElementById("admin-chat-setting3");
const adminChatSetting4 = document.getElementById("admin-chat-setting4");
const adminUserList = document.getElementById("admin-user-list");
const adminChatroomList = document.getElementById("admin-chatroom-list");
const adminLivechatList = document.getElementById("admin-livechat-list");
const adminLivechatActive = document.getElementById("admin-livechat-active");
const adminSupportTicket = document.getElementById("admin-support-ticket");
const adminSupportTicket1 = document.getElementById("admin-support-ticket1");
const adminSupportTicket2 = document.getElementById("admin-support-ticket2");
const adminSupportTicket3 = document.getElementById("admin-support-ticket3");
 
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

//##Declaration of functions for faq answers##//

function answers1(){
    let x= document.getElementById("answer1")

    if(x.style.display==="none"){
        x.style.display="block"
    } 

    else{
        x.style.display="none"
    }
}

function answers2(){
    let x= document.getElementById("answer2")

    if(x.style.display==="none"){
        x.style.display="block"
    } 

    else{
        x.style.display="none"
    }
}

function answers3(){
    let x= document.getElementById("answer3")

    if(x.style.display==="none"){
        x.style.display="block"
    } 

    else{
        x.style.display="none"
    }
}

function answers4(){
    let x= document.getElementById("answer4")

    if(x.style.display==="none"){
        x.style.display="block"
    } 

    else{
        x.style.display="none"
    }
}

function answers5(){
    let x= document.getElementById("answer5")

    if(x.style.display==="none"){
        x.style.display="block"
    } 

    else{
        x.style.display="none"
    }
}

function answers6(){
    let x= document.getElementById("answer6")

    if(x.style.display==="none"){
        x.style.display="block"
    } 

    else{
        x.style.display="none"
    }
}

function answers7(){
    let x= document.getElementById("answer7")

    if(x.style.display==="none"){
        x.style.display="block"
    } 

    else{
        x.style.display="none"
    }
}

function toggleChatBox(e){

    e.preventDefault();

    console.log(chat_box.style.display);
    //const chat_box = document.getElementById("chatbox");

    if(chat_box.style.display == "none"){
        
        chat_box.style.display = "block"
    }else{
        chat_box.style.display = "none"
    }
    
}

// chatboxButton.addEventListener("click", toggleChatBox, false);

// toggleChatBox();

// LOGIN AND SIGN UP TAB

function tabForm(param) {
    if(param === 'signup'){
        logInTab.style.display = "none";
        signUpTab.style.display = "block";
        signUpPage.classList.add("current");
        logInPage.classList.remove("current");
    } else {
        logInTab.style.display = "block";
        signUpTab.style.display = "none";
        logInPage.classList.add("current");
        signUpPage.classList.remove("current");
    }
}

function dropDown(use) {
    switch (use) {
        case 1:
            reveal(adminUserSetting1);
            break;
        case 2:
            reveal(adminUserSetting2);
            break;
        case 3:
            reveal(adminUserSetting3);
            break;
        case 4:
            reveal(adminUserSetting4);
            break;
        case 5:
            reveal(adminChatSetting1);
            break;
        case 6:
            reveal(adminChatSetting2);
            break;
        case 7:
            reveal(adminChatSetting3);
            break;
        case 8:
            reveal(adminChatSetting4);
            break;
        case 9:
            reveal(adminUserList);
            break;
        case 10:
            reveal(adminChatroomList);
            break;
        case 11:
            reveal(adminLivechatList);
            break;
        case 12:
            reveal(adminLivechatActive);
            break;
        case 13:
            reveal(adminSupportTicket);
            break;
        case 14:
            reveal(adminSupportTicket1);
            break;
        case 15:
            reveal(adminSupportTicket2);
            break;
        case 16:
            reveal(adminSupportTicket3);
            break;
        default:
            adminUserSetting1.style.display = "none";
    }   
}
function reveal(x){
    if(x.style.display === "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}