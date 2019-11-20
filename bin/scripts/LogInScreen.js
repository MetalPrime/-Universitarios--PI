var accountState = localStorage.getItem("accountState") ? localStorage.getItem("accountState") : false;
console.log(accountState);


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




let btn = document.querySelector(".botton-main");
let correoInput = document.querySelector(".correoInput")
let passwordInput = document.querySelector(".passwordInput")
let id;
let nombre;
let correoDB;
let contraseñaDB;


//funtion to check the state of the account - log in or not
function checkState() {

    if (accountState==="true") {
        console.log("vendo chontaduro");
        document.location.href = "./../views/Suggestions.html";   
    
    }
    

}

checkState();


btn.addEventListener("click", function () {
    let correo = correoInput.value
    correo = correo.toLowerCase()

    let contraseña = passwordInput.value


    let usuarios = firebase.database().ref("usuarios/");
    usuarios.on('value', function (snapshot) {

        //snapshotVal() recoge todos los elementos del firebase
        let completeData = snapshot.val();

        //Object.Keys() transforma todos los elemntos en un arreglo
        let arregloDeDatos = Object.keys(completeData)

        console.log(arregloDeDatos);
        for (let i = 0; i < arregloDeDatos.length; i++) {

             id = arregloDeDatos[i]
             nombre = completeData[id].nombre;
             correoDB = completeData[id].correo;
             contraseñaDB = completeData[id].contraseña;


            
        }

        if (correo == correoDB) {

            if (contraseña == contraseñaDB) {

                localStorage.setItem("accountState", "true");
                document.location.href = "./../views/Suggestions.html";

            } else {
                alert("Contraseña es incorrecta");
            }

        } else{

            alert("El correo no coincide, porfavor chequear")

        }

    }, function (err) {
        console.log(err)
    });




})





