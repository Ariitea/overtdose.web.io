//Selectors
let header = document.querySelector(".header");
let hamburgerMenu = document.querySelector(".hamburger-menu");


const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");


// Hamburger Menu animation
window.addEventListener('scroll', function(){
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('active', windowPosition)
});

// Hamburger Menu open function
hamburgerMenu.addEventListener('click', function() {
  header.classList.toggle('menu-open')
});


// Cookie fucntion for storage et remove banner
cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true")
});

// Time out storage displayed
setTimeout(() => {
  if(!localStorage.getItem("cookieBannerDisplayed"))
    cookieContainer.classList.add("active")
}, 2000);






// Email Form 
function sendMail()
{
    var yourMessage = document.getElementById("message").value;
    var subject = document.getElementById("selectList").value;
    document.location.href = "mailto:contact@overtdose.com?subject="
         + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent(yourMessage)
};