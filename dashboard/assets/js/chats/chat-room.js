
/* TEAM INIFINITY - i2talk */
var chatId = JSON.parse(localStorage.getItem("chatId"))
var messageScreen = document.getElementById("messages");
var messageForm = document.getElementById("messageForm");
const msgInput = document.getElementById("msg-input");
const msgBtn = document.getElementById("msg-btn");
const msgRef = db.collection("messages");
var leaveRoom = document.getElementById("leaveRoomidd");
var ChatroomName = JSON.parse(localStorage.getItem("chatroomName"))
var Chatheader = document.getElementById("chat-header")

function displayChat() {
    
}



messageForm.addEventListener("submit", event => {
    // if (!text.trim()) return;
    event.preventDefault();
    var text = msgInput.value;
    const msg = {
        sender : loggedUser,
        chat_room_id: chatId,
        text : text,
        timestamp : firebase.firestore.FieldValue.serverTimestamp()
    }
    document.getElementById("messageForm").reset();
    msgRef.add(msg).then((ref) => {
        console.log("Added message with ID:", ref.id)
})

});


var unsubscribe = msgRef.where("chat_room_id", "==", chatId).onSnapshot(snapshot => {
        if (snapshot.docChanges()[0] === undefined) {
            const msg = `
                <li id="no-msg">
                <span id="chat-new">
                    No Previous Messages..Send one now!
                </span>
                </li>
    `
    messageScreen.innerHTML += msg;
    setTimeout(function(){ 
    var elem = document.querySelector('#no-msg');
    elem.parentNode.removeChild(elem);
    }, 3000);

        } else {
        shown = snapshot.docChanges()[0].doc.data()
        // console.log(shown)
        const {sender, text} = shown;
        if (shown) {
            if (!shown.createdAt && snapshot.metadata.hasPendingWrites) {
                // we don't have a value for createdAt yet
                // const ts = firebase.firestore.Timestamp.now()
                // console.log(`timestamp: ${ts} (estimated)`)
            }
            else {
                // now we have the final timestamp value
                if (sender === loggedUser) {
                    var msg = `
            <div class="chat-msg-self">
					<p>${text}</p>
			</div>
                `
                } else {
                    var msg = `
            <div class="chat-msg-other">
            <p>${sender}: ${text}</p>
				</div>
                `
                }
        messageScreen.innerHTML += msg;
    document.getElementById("messages").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
                // console.log(`timestamp: ${shown.createdAt} (actual)`)
            }}
        }
        leaveRoom.addEventListener("click", function() {
            unsubscribe();
            localStorage.removeItem("chatId");
            window.location.assign("chatroom.html")
        })
    });

function showChat() {
    msgRef.where("chat_room_id", "==", chatId).orderBy("timestamp", "asc").get().then((querySnapshot) => {                                                                                                                                                                                                                                                                                                                                              
        querySnapshot.forEach((doc) => {
            const {sender, text} = doc.data();
            if (sender === loggedUser) {
                var msg = `
        <div class="chat-msg-self">
                <p>${text}</p>
        </div>
            `
            } else {
                var msg = `
        <div class="chat-msg-other">
        <p>${sender}: ${text}</p>
            </div>
            `
            }
    messageScreen.innerHTML += msg;
        });
    });
    setTimeout(function(){ document.getElementById("messages").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})}, 1000);
}
showChat();

// Chat room

// function enterChatroom(chatroomName) {
//     ChatroomName = chatroomName.getAttribute("data-chatroom-name");
//     localStorage.setItem("chatroomName", JSON.stringify(ChatroomName));
//     chatId = chatroomName.getAttribute("data-chatroom-id");
//     localStorage.setItem("chatId", JSON.stringify(chatId));
//     window.location.assign(`chat-room.html`)
// }

var t = document.createTextNode(`${ChatroomName} Group Chat`);     // Create a text node
Chatheader.appendChild(t);