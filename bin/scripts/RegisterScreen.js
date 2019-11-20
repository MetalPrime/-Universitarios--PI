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
let aceptar = false;
// cHECK
let check = document.querySelector(".circle-botton");

check.addEventListener("click", function () {
    aceptar = !aceptar;
    if (aceptar == true) {
        document.querySelector(".circle-botton").src = "./../../data/img/circle2.png";
    } else if (aceptar == false) {
        document.querySelector(".circle-botton").src = "./../../data/img/circle.png";
    }

})

//Pass to Suggestions

let btn = document.querySelector(".botton-main");

btn.addEventListener("click", function () {
    let nombreInput = nombre.value;
    let correoInput = correo.value;
    correoInput=correoInput.toLowerCase();
    let contraseñaInput = contraseña.value;
    let confirmarConInput = confirmarContraseña.value;


    if (contraseñaInput == confirmarConInput && aceptar == true && correoInput.includes("@") && correoInput.includes(".com")
        && nombreInput.length > 0 && confirmarConInput.length > 0) {
        firebase.database().ref('usuarios/').push({
            nombre: nombreInput,
            correo: correoInput,
            contraseña: contraseñaInput

        });
        document.location.href = "./../views/Suggestions.html";

    } else if (contraseñaInput != confirmarConInput) {
        alert("no coninciden contraeñas");
    }
    if (nombreInput.length == 0) {
        alert("ingrese un nombre");
    }
    if (contraseñaInput.length == 0) {
        alert("ingrese una contraseña");
    }
    if (aceptar == false) {
        alert("no aceptaste los terminos y condiciones")
    }
    if (correoInput.includes("@") == false || correoInput.includes(".com") == false) {
        alert("ingrese un correo electronico valido");
    }
})

