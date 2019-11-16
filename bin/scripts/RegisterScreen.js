// cHECK
let check = document.querySelector(".circle-botton");

check.addEventListener("click",function(){
   document.querySelector(".circle-botton").src = "./../../data/img/circle2.png";
})

//Pass to Suggestions

let btn = document.querySelector(".botton-main");

btn.addEventListener("click",function(){
    document.location.href="Suggestions.html"
})