
let camara= document.querySelector("#navigation-elements");
let search= document.querySelector("#search-botton");
let contact= document.querySelector("#contact-botton");


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