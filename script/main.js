////////////Parallax///////////
var headerBg = document.getElementById('slider')
window.addEventListener('scroll', function () {
  headerBg.style.opacity = 1 - +window.pageYOffset / 550 + ''
  headerBg.style.top = +window.pageYOffset / 800 + 'px'
  headerBg.style.backgroundPositionY = +window.pageYOffset / 2 + 'px'
})

/////// MENU RESPONSIVE/////////////////
function toggler() {
  var header = document.getElementById("header");
  header.classList.toggle("active");
}

//////////BOTON IR ARRIBA/////////
mybutton = document.getElementById("scrollUp");

window.onscroll = function () {
  scrollFunction();
};

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

/////////////////////////////////////////////////////////////////////////////////////////
