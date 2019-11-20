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

        for (let i = 0; i < arregloDeDatos.length; i++) {

            let id = arregloDeDatos[i]
            let nombre = completeData[id].nombre;
            let correoDB = completeData[id].correo;
            let contraseñaDB = completeData[id].contraseña;


            if (correo == correoDB) {

                if (contraseña == contraseñaDB) {
                    document.location.href = "./../views/Suggestions.html";
                }else{
                    alert("Contraseña es incorrecta")
                }

            }
        }

    }, function (err) {
        console.log(err)
    });




})





