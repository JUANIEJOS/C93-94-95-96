const firebaseConfig = {
      apiKey: "AIzaSyD6XWBulOpDYmnumGtRfBTsCFdyTpYMrZ0",
      authDomain: "c92classproject.firebaseapp.com",
      databaseURL: "https://c92classproject-default-rtdb.firebaseio.com",
      projectId: "c92classproject",
      storageBucket: "c92classproject.appspot.com",
      messagingSenderId: "776596461111",
      appId: "1:776596461111:web:2699dffd90d55fce5011b2"
    };
    
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user name");
room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

}




