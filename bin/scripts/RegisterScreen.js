var firebaseConfig = {
  
    apiKey: "AIzaSyAR-JARidY_1aTaYZKdQnJhAAv4YPupL2Q",
    authDomain: "universitariospi.firebaseapp.com",
    databaseURL: "https://universitariospi.firebaseio.com",
    projectId: "universitariospi",
    storageBucket: "universitariospi.appspot.com",
    messagingSenderId: "503987964464",
    appId: "1:503987964464:web:7058acab764c913c2bbbf5"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  
  
  // Get a reference to the database service
  var database = firebase.database();
  /////////////////////////////////////
  ///////////////////////////////////////
  let nombre = document.querySelector(".nombre")
  let correo = document.querySelector(".correo")
  let contraseña = document.querySelector(".contraseña")
  let confirmarContraseña = document.querySelector(".confirmarContraseña")
// cHECK
let check = document.querySelector(".circle-botton");

check.addEventListener("click",function(){
   document.querySelector(".circle-botton").src = "./../../data/img/circle2.png";
})

//Pass to Suggestions

let btn = document.querySelector(".botton-main");

btn.addEventListener("click",function(){
    let nombreInput = nombre.value;
    let correoInput = correo.value;
    let contraseñaInput = contraseña.value;
    let confirmarConInput = confirmarContraseña.value;

 
 if(contraseñaInput==confirmarConInput){firebase.database().ref('usuarios/').push({
    nombre: nombreInput, 
    correo: correoInput,
    contraseña: contraseñaInput
    
});} else{
    alert("no coninciden contraeñas");
} 
   // document.location.href="./../views/Suggestions.html";
})
