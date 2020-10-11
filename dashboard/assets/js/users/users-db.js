/* TEAM INIFINITY - i2talk */

//gets the data stored in the local storage
iusers = JSON.parse(localStorage.getItem("iusers"));

//to check if local storage contains users data
if(iusers == null || iusers == undefined) { //if local storage is empty, assign data to local storage

iusers = [ 
    //array that contains dummy info about users
        {
            "userID" : 1,
            "img" : "female.png",
            "userName" : "Maureen3",
            "fullName" : "Anyanwu Maureen",
            "mail" : "A3Maureen@tiidelab.com",
            "bio" : "Team Infinity",
            "phone" : "09048940949",
            "password" : "aW5maW5pdHk=",
            "location" : "Lagos",
            "sex" : "Female",
            "userType" : "user",
            "level" : "0",
            "ban" : "0" ,
            "latlong" : [6.4516,3.3894]
        },
        {
            "userID" : 2,
            "img" : "female.png",
            "userName" : "Jan3",
            "fullName" : "Jane Andeh",
            "mail" : "AndehJane@tiidelab.com",
            "phone" : "09099377477",
            "password" : "aW5maW5pdHk=",
            "location" : "Abuja",
            "sex" : "Female",
            "userType" : "user",
            "level" : "0",
            "ban" : "0" ,
            "latlong" : [9.0667,7.4833]
        },
        {
            "userID" : 3,
            "img" : "male.png",
            "userName" : "Ife2020",
            "fullName" : "Adepoju Ifeoluwa",
            "mail" : "Ife@tiidelab.com",
            "phone" : "09063627278",
            "password" : "aW5maW5pdHk=",
            "location" : "Abuja",
            "sex" : "Male",
            "userType" : "user",
            "level" : "0",
            "ban" : "0" ,
            "latlong" : [9.0667,7.4833]
        },
        {						
            "userID" : 4,
            "img" : "male.png",
            "userName" : "TJ4shot",
            "fullName" : "Oyetunji Atilade",
            "mail" : "OyetunjiAtilade@tiidelab.com",
            "phone" : "09097363723",
            "password" : "aW5maW5pdHk=",
            "location" : "Abuja",
            "sex" : "Male",
            "userType" : "admin",
            "level" : "1",
            "ban" : "0" ,
            "latlong" : [9.0667,7.4833]
        },
        {
            "userID" : 5,
            "img" : "male.png",
            "userName" : "Rasho",
            "fullName" : "Ayoade Rasheed",
            "mail" : "Rasho@tiidelab.com",
            "phone" : "09037463836",
            "password" : "aW5maW5pdHk=",
            "location" : "Ibadan",
            "sex" : "Male",
            "userType" : "admin",
            "level" : "2",
            "ban" : "0" ,
            "latlong" : [7.4233,3.9846]
        }
    ];
    //This gives room for the data to be accessible from any browser in any device (Apart from Internet Explorer)
    localStorage.setItem("iusers", JSON.stringify(iusers)); //Stores the data in the Local Storage
    iusers = JSON.parse(localStorage.getItem("iusers"));
} 

//gets the data stored in the local storage
usersIdTracker = JSON.parse(localStorage.getItem("usersIdTracker"));

//to check if local storage contains users id tracker
if(usersIdTracker == null || usersIdTracker == undefined) { //if local storage is empty, assign data to local storage
    usersIdTracker = 5;
    localStorage.setItem("usersIdTracker", usersIdTracker); //Stores the data in the Local Storage
    usersIdTracker = localStorage.getItem("usersIdTracker");
}
