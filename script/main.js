//JS MENU RESPONSIVE
function toggler(){
    var header = document.getElementById("header");
    header.classList.toggle('active')
}

//BOTON IR ARRIBA
mybutton = document.getElementById("scrollUp");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//////////
const body = document.body;
const triggerMenu = document.querySelector(".header .toggler");
const nav = document.querySelector(".header ");
const menu = document.querySelector(".header .options");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

triggerMenu.addEventListener("click", () => {
  body.classList.toggle("header");
});

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll == 0) {
    body.classList.remove(scrollUp);
    return;
  }
  
  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
  } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
    // up
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
  }
  lastScroll = currentScroll;
});
