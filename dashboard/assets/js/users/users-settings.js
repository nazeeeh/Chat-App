// Declaration of variables
const userChatMenu = document.getElementById("user-chat-menu");
const userSideBar = document.getElementById("user-side-bar");
const userMessageContainer = document.getElementById("user-message-container");

// chat menu functions
function showSideBar(show, hide) {
    let a = document.getElementById(show);
    let b = document.getElementById(hide);
    if (a.style.display === "none" && b.style.display === "flex") {
        a.style.display = "flex";
        b.style.display = "none";
    } else {
        a.style.display = "none";
        b.style.display = "flex";
    }
    
}

function displayMsgContainer(chat, feature){

}
