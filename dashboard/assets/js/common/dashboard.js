//CHECKS IF A USER IS LOGGED IN. IF NOT REDIRECT BACK TO LOGIN
if(isLoggedIn() == false) {
  window.location.assign("../login.html");
}
else {
  var loggedUser = isLoggedIn();
  // var loggedUser = JSON.parse(localStorage.getItem("logged"));
}
// window.location.reload();
//GET USER RECORD
nnUsers = JSON.parse(localStorage.getItem("iUsers"));
function getUserByUser(uname) {
  userIndexer = nnUsers.findIndex(x=>x.userName.toLowerCase() == uname.toLowerCase());
  usersRecordz = nnUsers[userIndexer];
  return usersRecordz;
}
var loggedUserRecord = getUserByUser(loggedUser)

profile = `<div class="side-profile-img">
<img src="${loggedUserRecord.img}">
</div>
<p>@${loggedUserRecord.userName}</p>
`;
document.getElementById("profile").innerHTML = profile; 

document.getElementById("menu-profile").innerHTML = profile; 

profileBox = `<h3><a href="./profile.html">${loggedUserRecord.fullName}</a></h3>`;
document.getElementById("profile-box").innerHTML = profileBox; 

userType = loggedUserRecord.userType;

if(userType == "admin") {
  isAdmin = `<li><a href="./admin3/index.html" id="side-menu-extra"><i class="fas fa-user-cog fa-1x"></i><b> Admin Panel</b></a></li>`;
} else { isAdmin = ``; }
sideMenu = `<ul class="side-menu">
      <li><a href="./chatroom.html"><i class="fas fa-comments fa-1x"></i> Chat Rooms</a></li>
      <li><a href="./idiary.html"><i class="fas fa-book fa-1x"></i> iDiary</a></li>
      <li><a href="./ireminder.html"><i class="fas fa-business-time fa-1x"></i> iReminder</a></li>
      <li><a href="./isearch.html"><i class="fas fa-search fa-1x"></i> iSearch</a></li>
      <li><a href="./settings.html"><i class="fas fa-cog fa-1x"></i> Settings</a></li> 
          ${isAdmin}  
          <li><a href="./logout.html"><i class="fas fa-reply-all fa-1x"></i> Log Out</a></li>   			
        </ul>`

document.getElementById("side-menu-container").innerHTML = sideMenu; 

// sideBarIcons = `<div>
//                 <ul>
//                   <li><a href="./chatroom.html"><i class="fas fa-comments fa-1x"></i> Chat Rooms</a></li>
//                   <li><a href="./idiary.html"><i class="fas fa-book fa-1x"></i> iDiary</a></li>
//                   <li><a href="./ireminder.html"><i class="fas fa-business-time fa-1x"></i> iReminder</a></li>
//                   <li><a href="./isearch.html"><i class="fas fa-search fa-1x"></i> iSearch</a></li>
//                   <li><a href="./settings.html"><i class="fas fa-cog fa-1x"></i> Settings</a></li> 
//                     ${isAdmin}  
//                   <li><a href="./logout.html"><i class="fas fa-reply-all fa-1x"></i> Log Out</a></li>
//                 </ul>
//               </div>`
// document.getElementById("side-bar-icons").innerHTML = sideBarIcons; 


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

function backToMenu(show, hide){
  let x = document.getElementById(show);
  let y = document.getElementById(hide);
  if(show === 'user-chat-menu') {
    x.classList.add('chat-menu-back-arrow');
    // x.style.width = "100%";
    y.classList.add('mobile-direct-msg');
  }
}






