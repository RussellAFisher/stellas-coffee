window.onload = function(){
  var screenWidth = document.documentElement.clientWidth;
  if(screenWidth > 750) {
    var video = '<video media="screen and (min-width: 750px)" preload="preload" id="video" autoplay="autoplay" loop="loop"><source src="assets/Videos/couple-drinking-coffee.mp4" type="video/mp4"></source></video>';
    document.body.innerHTML += video;
  }
  document.getElementById('faqs').addEventListener("click", showFaqs);
  document.getElementById('closeFaqs').addEventListener("click", hideFaqs);
  document.getElementById('faqModel').addEventListener("click", hideFaqs);
  document.getElementById('faqs-content')
          .addEventListener("click", function(e){
          e.stopPropagation()});
  document.getElementById('events').addEventListener("click", showEvents);
  document.getElementById('closeCal').addEventListener("click", hideEvents);
  document.getElementById('calModel').addEventListener("click", hideEvents);
}

function hideInfo() {
  var video = document.getElementById('video');
  video.pause();
  var sht = document.getElementById('short');
  sht.className = "hide";
  var hideHome = document.getElementsByClassName('info');
  for (var i = 0; i < hideHome.length; i++) {
    hideHome[i].className = "info hide";
  }
}

function showInfo() {
  setTimeout(function(){
    var video = document.getElementById('video');
    video.play();
    var sht = document.getElementById('short');
    sht.className = "show";
  }, 1000);
  var hideHome = document.getElementsByClassName('info');
  for (var i = 0; i < hideHome.length; i++) {
    hideHome[i].className = "info show";
  }
}


function showEvents() {
  var cal = document.getElementById('calModel');
  cal.className = "model-shield show";
  hideInfo();
}

function hideEvents() {
  var cal = document.getElementById('calModel');
  cal.className = "model-shield hide";
  showInfo();
}

function showFaqs() {
  var faq = document.getElementById('faqModel');
  faq.className = "model-shield show";
  hideInfo();
}

function hideFaqs() {
  var faq = document.getElementById('faqModel');
  faq.className = "model-shield hide";
  showInfo();
}

// js for mobile burger
function burgerFunction(x) {
    x.classList.toggle("change");
    var b = document.getElementsByClassName('mobileBurger');
    b[0].classList.toggle("flipFlop");
    var c = document.getElementsByClassName('header-nav');
    c[0].classList.toggle("header-nav-open");
}
