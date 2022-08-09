var firebaseConfig = {
  apiKey: "AIzaSyAXwlNWQx_ibnMtWcU4yxRKojzrucwFtHE",
  authDomain: "my-page-f8106.firebaseapp.com",
  databaseURL: "https://my-page-f8106-default-rtdb.firebaseio.com",
  projectId: "my-page-f8106",
  storageBucket: "my-page-f8106.appspot.com",
  messagingSenderId: "414370086220",
  appId: "1:414370086220:web:fe00bb1d8a740cdabee3e9",
};

firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="Welcome " + user_name +"!";

function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding Room_name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Roomname= " + Room_names);
      row="<div class='room_name' id="+ Room_names + " onclick='redirectToRoomname(this.id)'>#"+ Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();

function redirectToRoomname(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
} 

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}
