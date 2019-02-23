window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("navbar").style.backgroundColor = "#191919";
    document.getElementById("navbar").style.color = "white";
    document.getElementById("logo").style.color = "white";
    document.getElementById("hyperlink").style.color = "white";
    document.getElementById("navbar").style.fontSize = "19px";
    document.getElementById("navbar").style.height = "9%";
    document.getElementById("nav-wrap").style.marginTop = "8px";
  } else {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("navbar").style.color = "black";
    document.getElementById("logo").style.color = "black";
    document.getElementById("hyperlink").style.color = "black";
    document.getElementById("navbar").style.fontSize = "19px";
    document.getElementById("navbar").style.height = "12%";
    document.getElementById("nav-wrap").style.marginTop = "30px";
  }
}

var navi = document.getElementById('main-navigation');
var hamburger = document.getElementById('menuToggle');
var check = document.getElementById('myCheck');
check.addEventListener('click', function(){
  if (check.checked == true){
      navi.style.transform = "translateX(0)";
      navi.style.zIndex = "15";
      document.getElementById("navbar").style.padding = "10px 10px";
      document.getElementById("navbar").style.backgroundColor = "#191919";
      document.getElementById("navbar").style.color = "white";
      document.getElementById("logo").style.color = "white";
      document.getElementById("hyperlink").style.color = "white";
      document.getElementById("navbar").style.fontSize = "19px";
      document.getElementById("navbar").style.height = "9%";
      document.getElementById("nav-wrap").style.marginTop = "8px";
      document.getElementById('stopScroll').style.overflow = 'hidden';
  } else {
    navi.style.transform = "translateX(-100%)";
    navi.style.zIndex = "0";
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("navbar").style.color = "black";
    document.getElementById("logo").style.color = "black";
    document.getElementById("hyperlink").style.color = "black";
    document.getElementById("navbar").style.fontSize = "19px";
    document.getElementById("navbar").style.height = "12%";
    document.getElementById("nav-wrap").style.marginTop = "30px";
    document.getElementById('stopScroll').style.overflow = 'auto';
    document.getElementById('stopScroll').style.overflowX = 'hidden';
  }

}, false);
