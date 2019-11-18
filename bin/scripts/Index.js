
let btn = document.querySelector(".botton-main")
let body = document.querySelector(".body");

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDcw9TxeFA8dofUkpAQE-i4buNWHV8qHpA",
    authDomain: "universitarios-86d73.firebaseapp.com",
    databaseURL: "https://universitarios-86d73.firebaseio.com",
    projectId: "universitarios-86d73",
    storageBucket: "universitarios-86d73.appspot.com",
    messagingSenderId: "557583268134",
    appId: "1:557583268134:web:0ddcd718c5a356a0bee9e7",
    measurementId: "G-6HCQC6LETL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


// Get a reference to the database service
var database = firebase.database();

btn.addEventListener("click", function () {
body.classList.add("animated")
body.classList.add("slideOutLeft")


let retraso = setTimeout(function () {
  document.location.href="./bin/views/RegisterScreen.html";
},500)

 

   /* firebase.database().ref('infografias/').set({
        descripcion: "sdsdsa dasdsa jdas askjd naskj nksa djna k anksd jn"
     
      });*/

})