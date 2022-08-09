//YOUR FIREBASE LINKS
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

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    
    function send(){
        msg=document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
    
        });
    
        document.getElementById("msg").value="";
    
    }
    
    
    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
           firebase_message_id = childKey;
           message_data = childData;
    //Start code
    
    //End code
        } });  }); }
    getData();
    
    function logout(){
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location.replace("index.html");
    }
    