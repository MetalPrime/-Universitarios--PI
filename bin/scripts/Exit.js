let btn = document.querySelector(".botton-main");

btn.addEventListener("click",function(){
    localStorage.setItem("accountState", "false");
    console.log(localStorage.getItem("accountState"));
    document.location.href="./../views/LogInScreen.html"
})