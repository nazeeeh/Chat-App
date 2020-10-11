/* TEAM INIFINITY - i2talk */

//GET ALL USERS DATA FROM THE LOCAL STORAGE
function getUsers() {
    let users = JSON.parse(localStorage.getItem("iusers"));
    return users;
}

function getUserIdTracker() {
    let usersIdTracker = localStorage.getItem("usersIdTracker");
    return usersIdTracker;
}


//GET USER DETAILS BY THEIR USERNAME
function getUserByUsername(uname) {
    users = getUsers();
    userIndex = users.findIndex(x=>x.userName.toLowerCase() == uname.toLowerCase());
    usersRecord = users[userIndex];
    return usersRecord;
    
}

//GET USER DETAILS BY THEIR MAIL
function getUserByMail(mail) {
  users = getUsers();
  userIndex = users.findIndex(x=>x.mail.toLowerCase() == mail.toLowerCase());
  usersRecord = users[userIndex];
  return usersRecord;
  
}

//GET USER DETAILS BY THEIR ID
function getUserByID(userID) {
    users = getUsers();
    userIndex = users.findIndex(x=>x.userID == userID);
    usersRecord = users[userIndex];
    return usersRecord;
}

//GET CURRENT USER INDEX IN LOCAL STORAGE
function getUserIndex(username) {
  users = getUsers();
  userIndex = users.findIndex(x=>x.userName == username);
  return userIndex;
}

function getUserDetails() {

}

//ENCODES THE PASSWORD
function hashPassword(password) {
    password = btoa(password);
    return password;
}

//VALIDATE LOGIN
function validateLogin(userName, upassword) {
    userName = getUserByUsername(userName);
    upassword = hashPassword(upassword);
    if (userName != null || userName != undefined) {
        if(userName.password == upassword) {
            return true;
        } else {
            return false;
        }
    }
    else {
        return false;
    }
}

//USER LOGIN
function userLogin(event) {
    userName = document.getElementById("_username").value;
    upassword = document.getElementById("_password").value;
    rememberMe = document.getElementById("rememberMe").value;
    validateUser = validateLogin(userName, upassword);
    if(validateUser == true) {
        /*  if(rememberMe == true) {
          setCookie(userName, false);
         } else {
          setCookie(userName, true);
         } */  
        loggedUserIn(userName);
        window.location.assign("dashboard/index.html");
    }
    else {
        document.getElementById("error-login").style.display = "Block";
        document.getElementById("error-login").innerHTML = "Invalid Username/Password!!";
        
    }
    event.preventDefault();
}

//ADD NEW USER TO THE DATABASE (LOCAL STORAGE)
function addUser(event) {
  users = getUsers();
  usersIdTracker = parseInt(getUserIdTracker()) + 1;
  validateUserSignup = validateSignup();
  
  if(validateUserSignup == true) { 
        password = hashPassword(document.getElementById("password").value);
        username = document.getElementById("userName").value
        newUser = {	
              "userID" : usersIdTracker,
              "img" : "",
              "userName" : username,
              "fullName" : document.getElementById("fullName").value,
              "mail" : document.getElementById("mail").value,
              "phone" : "",
              "password" : password,
              "location" : "",
              "sex" : "",
              "userType" : "user",
              "level" : "0",
              "ban" : "0" ,
              "latlong" : [7.621111,5.221389]
        }
        users.push(newUser); 
        localStorage.setItem("iusers", JSON.stringify(users)); 
        localStorage.setItem("usersIdTracker", usersIdTracker);
        loggedUserIn(username);
        window.location.assign("./welcome.html");
    } else {
      document.getElementById("error-signup").style.display = "Block";
      document.getElementById("error-signup").innerHTML = validateUserSignup;
      window.location.assign("#formSignUp");
    }
    event.preventDefault();
}

//COMPLETE USER REGISTRATION AND UPDATE THE DATABASE (LOCAL STORAGE)
function addUserComplete(event) {
users = getUsers();
loggedIn = isLoggedIn();

if (loggedIn == false) {
  window.location.assign("login.html");
} else {
    userIndex = getUserIndex(loggedIn);
    sex = document.getElementById("sex").value;
    phone = document.getElementById("phone").value;
    userLocation = document.getElementById("userLocation").value;

    if(sex == "male") {
         img = "male.png";
    } else if(sex == "female") {
         img = "female.png";
    } else {
       img = "default.png";
    }
    newUser = {	
        "userID" : users[userIndex].userID,
        "img" : img,
        "userName" : loggedIn,
        "fullName" : users[userIndex].fullName,
        "mail" : users[userIndex].mail,
        "phone" : phone,
        "password" : users[userIndex].password,
        "location" : userLocation,
        "sex" : sex,
        "userType" : "user",
        "level" : "0",
        "ban" : "0",
        "latlong" : [6.4516,3.3894]
    }
    users[userIndex] = newUser; 
    localStorage.setItem("iusers", JSON.stringify(users));
    window.location.assign("dashboard/index.html");
  }
  event.preventDefault();
}

//VALIDATE SIGNUP
function validateSignup() {
    userName = document.getElementById("userName").value
    password = document.getElementById("password").value
    cpassword = document.getElementById("c-password").value
    mail = document.getElementById("mail").value

    if(getUserByUsername(userName) != undefined || getUserByUsername(userName) != null) {
      error = "Username Already Exists";
      return error;
    } 
    else if(getUserByMail(mail) != undefined || getUserByMail(mail) != null) {
      error = "Mail Already Exists";
      return error;
    } 
    else if (password != cpassword) {
      error = "Passwords don't match";
      return error;
    } 
    else if (password.length < 6) {
      error = "Password is less than 6 Letters";
      return error;
    } 
    else {
      return true;
    }
}

//CHECK IF ANY USER IS LOGGED IN
function loggedUserIn(username) {
  user = username;
  localStorage.setItem("loggedUserIn", username);
}

//GET THE USER LOGGED IN
function isLoggedIn() {
  user = localStorage.getItem("loggedUserIn");
  if (user == null || user == undefined) {
    return false;
  } else {
    return user;
  }
}

//CHECK IF USER IS LOGGED IN
function isUserLoggedIn(username) {
  user = localStorage.getItem("loggedUserIn");
  if (user != username || user == null || user == undefined) {
    return false;
  } else {
    return true;
  }
}

//



//TIME FUNCTIONS
/* var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
alert(dateTime)
timestamp = today.getTime();
alert(timestamp);

function toTimestamp(year,month,day,hour,minute,second){
    var datum = new Date(Date.UTC(year,month-1,day,hour,minute,second));
    return datum.getTime();
   }
toTimestamp("2020","10","1","22","14","30")
alert(toTimestamp("2020","10","1","22","14","30")) 

function toTimestamp(strDate){
 var datum = Date.parse(strDate);
 return datum/1000;
}

alert(toTimestamp('02/13/2009 23:31:30'));

alert(toTimestamp('2009 02 13 23:31:30'));

var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("demo").innerHTML = months[d.getMonth()];
*/

//COOKIES
/* function setCookie(userName, isExp) {
    var d = new Date();
    if(isExp == true) {
      document.cookie = "username=" + userName;
    } else {
      d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
      var expires = "expires="+d.toUTCString();
      document.cookie = "username=" + userName + ";" + expires + ";path=/";
    }  
  }



//GET COOKIE
function readCookie() {
  var allcookies = document.cookie;
  // Get all the cookies pairs in an array
  cookiearray = allcookies.split(';');
  // Now take key value pair out of this array
  for(var i=0; i<cookiearray.length; i++) {
     uname = cookiearray[i].split('=')[0];
     value = cookiearray[i].split('=')[1];
  }
  return value;
}
  
function checkCookie(username) {
    var user = readCookie();
    if (user == username) {
      return true;
    } else {
      return false;
      }
  }
//DELETE COOKIE
  function deleteCookie(username) {
    var now = new Date();
    now.setMonth( now.getMonth() - 1 );
    cookievalue = username + ";"
    
    document.cookie = "username=" + cookievalue;
    document.cookie = "expires=" + now.toUTCString() + ";"
 } */

function editUser() {

}

function searchUsers () {

}

function displayUsers() {

}