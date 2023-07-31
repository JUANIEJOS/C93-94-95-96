
//ADD YOUR FIREBASE LINKS HERE
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
document.getElementById("user_name").innerHTML="Welcome "+ user_name+"!";

function AddRoom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({Purpose: "adding new room"});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name"+ Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}
