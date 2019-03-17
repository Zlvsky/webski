var bar = document.getElementById('bar');
var width = 1;
var id = setInterval (progressbar, 10);
clicker = document.getElementById('clicker');
clicker.addEventListener('click', function(){
  if(width<= 100){
    width = width + 0.5;
  } else if(width > 99) {
    currentClick++;
    width = 0.2;
}}, false);

function progressbar(){
  if (width >= 101) {
    clearInterval(id);
  } else {
    bar.style.width = width +'%';
  }
}
clearing = setInterval(subtraction, 10);
function subtraction() {
  if(width >= 0.2) {
    width = width - 0.01;
    bar.style.width = width +'%';
  }
}

var comment = document.getElementById('comment');
checking = setInterval(comments, 1000);
function comments(){
  if(totalscore >= 1000 && totalscore < 5000) {
    comment.textContent = "Nauczyles sie hymnu elektryka"
  } else if(totalscore >= 5000 && totalscore < 10000) {
    comment.textContent = "Przechodzisz na warunku"
  } else if(totalscore >= 10000 && totalscore < 15000) {
    comment.textContent = "Zostajesz zgarniety przez miejskie"
  } else if(totalscore >= 15000 && totalscore < 30000) {
    comment.textContent = "Bierzesz udzial w memoriale drzewka na bocznym"
  } else if(totalscore >= 30000 && totalscore < 60000) {
    comment.textContent = "Dostajesz miano króla bocznego"
  } else if(totalscore >= 60000 && totalscore < 120000) {
    comment.textContent = "Sadzisz drzewko na bocznym"
  } else if(totalscore >= 120000 && totalscore < 240000) {
    comment.textContent = "Mimo kilku potknięc zaczyna Ci sie udawac w zyciu"
  } else if(totalscore >= 240000 && totalscore < 400000) {
    comment.textContent = "Zaczynasz elegancko kumac matme"
  } else if(totalscore >= 400000 && totalscore < 600000) {
    comment.textContent = "Czerwony pasek i te sprawy"
  } else if(totalscore >= 600000 && totalscore < 900000) {
    comment.textContent = "No wzor do nasladowania"
  } else if(totalscore >= 900000 && totalscore < 1300000) {
    comment.textContent = "Rodzina dumna, znajomi zazdroszcza"
  } else if(totalscore >= 1300000 && totalscore < 2000000) {
    comment.textContent = "5000 netto świeżo po skończeniu szkoly"
  } else if(totalscore >= 2000000) {
    comment.textContent = "Stales sie totalnym szefem, wygrywasz zycie"
  }
}
