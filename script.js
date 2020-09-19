
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

//##Declaration of functions for faq answers##//

function answers1(){
    let answer=`i2talk is an online chatting platform that infuses a diary for message storage, schedular and reminder to notify you of events as well  as location-based user search. These amazing features make communication easier and effective `

    document.getElementById("answer1").innerHTML= answer
}

function answers2(){
    let answer=`To find other users, you have to turn on locations on your device settings, go to your profile dashboard and click iSearch.`

    document.getElementById("answer2").innerHTML= answer
}

function answers3(){
    let answer=`If you forget your password while trying to login, click the forget password link and it takes you to a page to input the email address you used in creating your accounnt. After submitting this, a reset password/link is sent to that e-mail address and you are good to go.`

    document.getElementById("answer3").innerHTML= answer
}

function answers4(){
    let answer=`To save a message to iDiary, select the message and click the "iDiary" option. To eventually access the message, go to your profile dashboard and select "iDiary", all your saved messages become visible.`

    document.getElementById("answer4").innerHTML= answer
}

function answers5(){
    let answer=`To schedule a message or status, go to your profile dashboard and select "iSchedule". Input the message to be scheduled as well as the recipient of this message. The recipient can be a friend or your status that is if you want the message to be posted on your status. After this, select the time and date for the message to be sent. `

    document.getElementById("answer5").innerHTML= answer
}

function answers6(){
    let answer=`To use the iReminder option, go to your profile dashboard and select "iReminder". Input the topic of reminder ,date and time to be reminded. `

    document.getElementById("answer6").innerHTML= answer
}

function answers7(){
    let answer=`Go to your profile dashboard, select "chatrooms". Input the topic you're looking for and select from suggestions provided and you're in!`

    document.getElementById("answer7").innerHTML= answer
}