let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-nav");

navBarToggle.addEventListener("click",function(){
    mainNav.classList.toggle("active");
});