// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBROC64FZ1dTLqicBB63R-uqmS8GWFhrSs",
  authDomain: "cater2-63084.firebaseapp.com",
  databaseURL: "https://cater2-63084-default-rtdb.firebaseio.com",
  projectId: "cater2-63084",
  storageBucket: "cater2-63084.appspot.com",
  messagingSenderId: "500525186150",
  appId: "1:500525186150:web:85a83f3ff55c0ef81841a7",
  measurementId: "G-L39G6EWGYY"
};
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name;
// Initialize Firebase
const app = initializeApp(firebaseConfig);
function addroom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"testing"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row = "<div class='room_name' id='" + Room_names + "' onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      
      //End code
      });});}
getData();
function redirectToRoomNam(name) {
   localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html"; 
}