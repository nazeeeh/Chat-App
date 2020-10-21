/* TEAM INIFINITY - i2talk */

var receiver = titleCase(JSON.parse(localStorage.getItem("chat")));
var isender = titleCase(JSON.parse(localStorage.getItem("nchat")));
var messageScreen = document.getElementById("pmessages");
var messageForm = document.getElementById("pmessageForm");
const msgInput = document.getElementById("pmsg-input");
const msgBtn = document.getElementById("pmsg-btn");
const chatRef = db.collection("private-chats");
const privateChatID = getPrivateChatID(isender, receiver);
const chatScreen = document.getElementById("chat-menu");
var chatData = JSON.parse(localStorage.getItem("chatData"))
var Chatheaders = document.getElementById("Chatsheader")
displayChats();


String.prototype.replaceAt = function(index, character) {
    return (
      this.substr(0, index) + character + this.substr(index + character.length)
    );
  };
  
  function titleCase(str) {
    const newTitle = str.split(" ");
    const updatedTitle = [];
    for (var st in newTitle) {
      updatedTitle[st] = newTitle[st]
        .toLowerCase()
        // .replaceAt(0, newTitle[st].charAt(0).toUpperCase());
    }
    return updatedTitle.join(" ");
  }
  
function newChat(userName) {
    userName = userName.getAttribute("data-username");
    // alert(userName);
    localStorage.setItem("nchat", JSON.stringify(loggedUser));
    localStorage.setItem("chat", JSON.stringify(userName));
    setTimeout(function(){ window.location.assign(`PrivateChat.html`) }, 500);
}

function newChats(userName) {
  userName = userName.getAttribute("data-username");
  // alert(userName);
  localStorage.setItem("nchat", JSON.stringify(loggedUser));
  localStorage.setItem("chat", JSON.stringify(userName));
  setTimeout(function(){ window.location.assign(`PrivateChat.html`) }, 500);
}

function getPrivateChatID(isender, receiver) {
    const chatOwner = [isender, receiver];
    chatOwner.sort((a, b) => a.localeCompare(b));
    return  `${chatOwner[0]}_${chatOwner[1]}`
}

function ChatScreenName(chatroomiid) {
  const a = chatroomiid.replace(isender, "")
  const fresult = a.replace("_", "")
  return fresult;
}

function createChat() {
    const chatInfo = {
        chatID : privateChatID,
        users : [isender, receiver],
        latestMessage: {
          text : "",
          createdAt: new Date().getTime()
        }
    }
    chatRef.doc(privateChatID).set(chatInfo);
}

var query = chatRef
            .doc(privateChatID)
            .collection('imessages')
            .orderBy('timestamp', 'desc')
            .limit(12);
chatRef.doc(privateChatID).collection('imessages').onSnapshot(snapshot => {
  if (snapshot.docChanges()[0] === undefined) {
      const msg = `
          <div class="chat-msg-other">
			<p>No Previous Messages found. Send message now to Start Chatting!</p>
		  </div>
`
        messageScreen.innerHTML += msg;
    setTimeout(function(){ 
        var elem = document.querySelector('#no-msg');
        elem.parentNode.removeChild(elem);
        }, 3000);
        } else {
        shown = snapshot.docChanges()[0].doc.data()
        const {isender, text} = shown;
        if (shown) {
            if (!shown.createdAt && snapshot.metadata.hasPendingWrites) {
                // 
            }
            else {
                // now we have the final timestamp value
                if (isender === loggedUser) {
                    var msg = `
            <div class="chat-msg-self">
					<p>${text}</p>
			</div>
                `
                } else {
                    var msg = `
            <div class="chat-msg-other">
            <p>${isender}: ${text}</p>
				</div>
                `
                }
                messageScreen.innerHTML += msg;
                document.getElementById("pmessages").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
            }}
        }
});

function showChat() {
    chatRef.doc(privateChatID).collection('imessages').orderBy("timestamp", "asc").get().then((querySnapshot) => {                                                                                                                                                                                                                                                                                                                                              
    querySnapshot.forEach((doc) => {
        const {isender, text} = doc.data();
        if (isender === loggedUser) {
            var msg = `
    <div class="chat-msg-self">
            <p>${text}</p>
    </div>
        `
        } else {
            var msg = `
    <div class="chat-msg-other">
    <p>${isender}: ${text}</p>
        </div>
        `}
        messageScreen.innerHTML += msg;
        });
        });
    setTimeout(function(){ document.getElementById("pmessages").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})}, 1000);
    }
showChat();




// var query = chatRef
//             .doc(privateChatID)
//             .collection('imessages')
//             .orderBy('timestamp', 'desc')
//             .limit(12);

function displayChats() {
    var querychat = chatRef.where('users', 'array-contains', isender).orderBy('latestMessage.createdAt', 'desc')
    
  // var querychat = db.collectionGroup('imessages').where('isender', '==', isender).orderBy("timestamp", "desc").limit(1);
//   Start listening to the query.
  unsubscribe = querychat.onSnapshot(function(snapshot) {
    var data = snapshot.docs.map(function (documentSnapshot) {
      return documentSnapshot.data();
    });
    console.log(data)
    chatScreen.innerHTML=""
        for (i=0; i<data.length; i++) {
          latest=""
        // details
        latest += `
        <div class="chat-box">
  		<div class="chat-box-img">
  			<img src="../../users/mira.jfif">
  		</div>
  		<div class="chat-box-msg" >
  			<h4 onclick="newChat(this)" data-username="${ChatScreenName(data[i].chatID)}">${ChatScreenName(data[i].chatID)}</h4>
  			<p>${data[i].latestMessage.text}</p>
  		</div>
  		<div class="chat-box-stats">
  			<p><span class="chat-counter">1</span></p>
  			<h6>${data[i].latestMessage.createdAt}</h6>
  		</div>
  	</div>
      `
    chatScreen.innerHTML += latest;
}});
}

function displayChatnow() {
  var querychat = chatRef.where('users', 'array-contains', isender)
.orderBy('latestMessage.createdAt', 'desc')
  
unsubscribe = querychat.onSnapshot(function(snapshot) {
  var data = snapshot.docs.map(function (documentSnapshot) {
    return documentSnapshot.data();
  });
  console.log(data)

  chatScreen.innerHTML=""
      for (i=0; i<data.length; i++) {
        latest=""
      // details
      latest += `
      <div class="chat-box">
    <div class="chat-box-img">
      <img src="../../users/mira.jfif">
    </div>
    <div class="chat-box-msg" >
      <h4 onclick="newChat(this)" data-username="${ChatScreenName(data[i].chatID)}">${ChatScreenName(data[i].chatID)}</h4>
      <p>${data[i].latestMessage.text}</p>
    </div>
    <div class="chat-box-stats">
      <p><span class="chat-counter">1</span></p>
      <h6>${data[i].latestMessage.createdAt}</h6>
    </div>
  </div>
    `
  chatScreen.innerHTML += latest;
    }});
}

  // unsubscribe();
 
messageForm.addEventListener("submit", event => {
  createChat();  
  event.preventDefault();
    text = msgInput.value;
    const msg = {
        receiver : receiver,
        isender : loggedUser,
        text : text,
        timestamp : firebase.firestore.FieldValue.serverTimestamp()
    }
    document.getElementById("messageForm").reset();
      var batch = db.batch();
      var nycRef = chatRef.doc(privateChatID).collection("imessages").doc(uuidv4());
      batch.set(nycRef, msg);
      var sfRef = chatRef.doc(privateChatID);
      batch.update(sfRef, {latestMessage: {
        text : text,
        createdAt: new Date().getTime()
      }});
      batch.commit().then(function () {
});
});

function enterChatroom(chatroomName) {
    ChatroomName = chatroomName.getAttribute("data-chatroom-name");
    localStorage.setItem("chatroomName", JSON.stringify(ChatroomName));
    chatId = chatroomName.getAttribute("data-chatroom-id");
    localStorage.setItem("chatId", JSON.stringify(chatId));
    window.location.assign(`chat-room.html`)
}

var t = document.createTextNode(`${ChatScreenName(privateChatID)}`);     // Create a text node
Chatheaders.appendChild(t);