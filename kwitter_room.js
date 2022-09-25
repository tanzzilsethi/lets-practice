const firebaseConfig = {
    apiKey: "AIzaSyDS0t9V0czJ9ImFJJu3Shodla1HQ0z_-7Q",
    authDomain: "let-s-chat-be5f9.firebaseapp.com",
    databaseURL: "https://let-s-chat-be5f9-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-be5f9",
    storageBucket: "let-s-chat-be5f9.appspot.com",
    messagingSenderId: "633109242646",
    appId: "1:633109242646:web:fd65a2dea5dd1fc7f92637",
    measurementId: "G-Z3GTBBGEQP"
  };
  function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      });});}
getData();
