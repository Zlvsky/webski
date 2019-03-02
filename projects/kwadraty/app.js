var health = 3,
    speed = 1990,
    counter = 0,
    timeleft = 50,
    redSpeed = Math.floor(Math.random() * 5) + 2;

var divs = $('.squares').length;
var squares = document.querySelector('.squares');
var btn = document.getElementById('start');
var modal = document.getElementById('bg-modal');
var end = document.getElementById('modal-text');

// ODEJMOWANIE ZYCKA Z DIVA
function healthDiv() {
  if(health == 2) {
    document.getElementById('health3').style.display = 'none'
  } else if(health == 1) {
    document.getElementById('health2').style.display = 'none'
  } else if(health == 0) {
    document.getElementById('health1').style.display = 'none'
  }
}
// WYGRANA
function gameWin() {
  if (counter >= 50 && health > 0) {
    modal.style.display = 'flex';
    end.textContent = 'You Win! Congratulations!';
    clearInterval(timek);
    clearInterval(timek2);
    clearTimeout(counterTime);
    btn.addEventListener('click', function(){ document.location.reload(true)}, false);
  }
}
// ZAKONCZENIE GRY PRZEGRANA
function gameEnd() {
  if(health <= 0) {
    modal.style.display = 'flex';
    end.textContent = 'You lost;( Try again';
    clearInterval(timek);
    clearInterval(timek2);
    clearTimeout(counterTime);
    btn.addEventListener('click', function(){ document.location.reload(true)}, false);
  } else if (counter >= 50) {
    modal.style.display = 'flex';
    end.textContent = 'You lost;( Try again';
    clearInterval(timek);
    clearInterval(timek2);
    clearTimeout(counterTime);
    btn.addEventListener('click', function(){ document.location.reload(true)}, false);
  }
}
// POJAWIENIE SIE CZERWONYCH
function showRed() {
  random2 = Math.floor(Math.random() * divs);
  if(random2 != random) {
    $('.squares').eq(random2).addClass('bad');
    red();
  }
}
// POJAWIANIE SIE ZIELONYCH
function showGreen() {
   random = Math.floor(Math.random() * divs);
   if (!$(random).hasClass('bad')) {
  $('.squares').eq(random).addClass('good');
green();
}
}


// START GIERECZKI
function gameStart() {
// POJAWIANIE SIE ZIELONYCH
showGreen();
timek2 = setInterval('showRed()', speed);
modal.style.display = 'none';

// TIMER CONVERT MINUTES
function convertSeconds(s) {
  var min = Math.floor(s / 60);
  var sec = s % 60;
  return min + ':' + sec;
}

// TIMER
(function() {
  var timer = document.querySelector('#timer');
  timer.innerHTML= convertSeconds(timeleft - counter);

  function timeIt() {
    counter++;
    timer.innerHTML = convertSeconds(timeleft - counter);
    if(counter >= 50 && health > 0) {
      gameWin();
    }
  }
  counterTime = setInterval(timeIt, 1000);

}());

// KONIEC TIMERA

}


// TRACENIE ZYCIA
function healthDown() {
health = health - 1;
healthDiv();
console.log('Zostalo Ci: ' + health + ' życ');
$('.squares').removeClass('good');
timek = setTimeout('showGreen()', speed);

if(health <= 0) {
console.log('Przegrales');
  gameEnd();
}
}

// ZNIKANIE CZERWONEGO
function removeRed() {
  $('.squares').removeClass('bad');
}


// CO SIE DZIEJE JAK SIE ZAPALI ZIELONE
function green() {
if($('.squares').hasClass('good')) {
  timek = setTimeout( 'healthDown()', speed);
}
}
// CO SIE DZIEJE JAK SIE ZAPALI CZERWONE
function red() {
if($('.squares').hasClass('bad')) {
  setTimeout( 'removeRed()', speed / redSpeed);
}
}


// USUWANIE NA KLIKNIECIE ZIELONEGO
function essa(id) {
  if(id == random) {
    clearTimeout(timek);
    $('.squares').removeClass('good');
    console.log(';D');
    speed -= 70;
    setTimeout('showGreen()', speed);

  } else {
    health = health - 1;
    healthDiv();
    console.log(health);
    clearTimeout(timek);
    $('.squares').removeClass('good');
    console.log(';(');
    showGreen();
     if(health <= 0) {
       gameEnd();
     }
  }

}

btn.addEventListener('click', gameStart, false);
console.log(speed);
