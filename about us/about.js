let mainHam = document.getElementById("hero-ham");
let subHam = document.getElementById("hero-ham2");
let mobileNavbar = document.querySelector(".mobile-navbar");
mainHam.onclick = function(){
    mobileNavbar.style.display = "flex";
    subHam.style.display = "block";
    mainHam.style.display = "none";
}

subHam.onclick = function(){
    mainHam.style.display = "block";
    subHam.style.display = "none";
    mobileNavbar.style.display = "none";
}