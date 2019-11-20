
let btn = document.querySelector(".botton-main")
let body = document.querySelector(".body");

// Your web app's Firebase configuration


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