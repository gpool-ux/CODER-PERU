////////////Parallax///////////
var headerBg = document.getElementById('slider')
window.addEventListener('scroll', function () {
  headerBg.style.opacity = 1 - +window.pageYOffset / 1000 + ''
  headerBg.style.top = +window.pageYOffset / 800 + 'px'
  headerBg.style.backgroundPositionY = +window.pageYOffset / 2 + 'px'
})

/////// MENU RESPONSIVE/////////////////
function toggler() {
  var header = document.getElementById("header");
  header.classList.toggle("active");
}

//////////BOTON IR ARRIBA/////////
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $('#scrollUp').fadeIn();

    } else {
      $('#scrollUp').fadeOut();
    }
  });

  $("#scrollUp").click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 10);
  });

});

//////////////////SCROLLBAR CUSTOM///////////////////////

let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + "%";
}
