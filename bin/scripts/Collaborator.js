let btnBurger = document.querySelector(".burger-bottom");
let menuDesplegable = document.querySelector(".menu");
let back = document.querySelector(".menu-return");
let config = document.querySelector(".options");
let exit= document.querySelector(".exitBotton");
let camara= document.querySelector("#navigation-elements");
let search= document.querySelector("#search-botton");
let contact= document.querySelector("#contact-botton");

// boton hamburguesa bn perron

console.log(localStorage.getItem("accountState"));

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

// boton para ir a camara

camara.addEventListener("click",function(){
    document.location.href="./../views/Camara.html";
})

// boton para ir a search

search.addEventListener("click",function(){
    document.location.href="./../views/Suggestions.html";
})

// boton para ir a collaborator

contact.addEventListener("click",function(){
    document.location.href="./../views/Collaborator.html";
})