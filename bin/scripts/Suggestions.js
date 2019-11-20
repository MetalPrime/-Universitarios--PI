let btnBurger = document.querySelector(".burger-bottom");
let menuDesplegable = document.querySelector(".menu");
let back = document.querySelector(".menu-return");
let config = document.querySelector(".options");
let exit= document.querySelector(".exitBotton");

// boton hamburguesa bn perron

btnBurger.addEventListener("click", function (event) {
    menuDesplegable.style.transition = "left 0.5s ease-in-out";
    menuDesplegable.style.left = "0px";

})

// boton cerrar hamburguesa

back.addEventListener("click", function(event) {
    menuDesplegable.style.transition = "left 0.5s ease-in-out";
    menuDesplegable.style.left = "-50%";
    console.log("chupelo");
})

// boton para ir a configuraciones

config.addEventListener("click",function(event){
    document.location.href="./../views/Settings.html";
})

// boton para cerrar sesión

exit.addEventListener("click",function(event){
    document.location.href="./../views/Exit.html";
})





