let btnBurger = document.querySelector(".burger-bottom");
let menuDesplegable = document.querySelector(".menu");

// boton hamburguesa bn perron

btnBurger.addEventListener("click", function (event) {
    menuDesplegable.style.transition = "left 0.5s ease-in-out";
    menuDesplegable.style.left = "0px";

})



