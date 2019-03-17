// UPGRADES

  var upgrade = [
{                                      // 0
  name: "liquid",
  price: 50,
  jps: 1
}, {                                   // 1
  name: "boczne",
  price: 300,
  jps: 3
}, {                                   // 2
  name: "zapiekanka",
  price: 600,
  jps: 5
}, {                                   // 3
  name: "obuwie",
  price: 2000,
  jps: 9
}, {                                   // 4
  name: "mpk",
  price: 4000,
  jps: 15
}, {                                   // 5
  name: "szatnia",
  price: 7500,
  jps: 20
}, {                                   // 6
  name: "chemia",
  price: 10000,
  jps: 25
}, {                                   // 7
  name: "upomnienie",
  price: 20000,
  jps: 35
}, {                                   // 8
  name: "kino",
  price: 40000,
  jps: 55
}, {                                   // 9
  name: "erasmus",
  price: 120000,
  jps: 90
},  {                                   // 10
  name: "matura",
  price: 300000,
  jps: 200
}, {                                   // 11
  name: "disco",
  price: 800000,
  jps: 350
}, {                                   // 12
  name: "dyrektor",
  price: 3000000,
  jps: 550
}, {                                   // 13
  name: "walesa",
  price: 10000000,
  jps: 1990
}, {                                   // 14
  name: "miejska",
  price: 5000000,
}, {                                   // 15
  name: "technikum",
  price: 50000000,
  jps: 5000
}]

// TIMERS
var counter1 = 0,
    counter2 = 0,
    timeleft1 = 300,
    timeleft2 = 420;

var zagrozenietrue = false,
    otwartetrue = false,
    liquidtrue = false ;

var zagrozenietimer = document.getElementById('zagrozenieDiv'),
    otwartetimer = document.getElementById('otwarte');

function convertSeconds(s) {
  var min = Math.floor(s / 60),
      sec = s % 60;
  return min + ':' + sec;
}

(function() {
  zagrozenietimer.innerHTML = convertSeconds(timeleft1 - counter1);
  otwartetimer.innerHTML = convertSeconds(timeleft2 - counter2);

  function timeIt1() {
    counter1++;
    zagrozenietimer.innerHTML = convertSeconds(timeleft1 - counter1);
    if(counter1 >= 300) {
      zagrozenietrue = true;
      clearInterval(counterTime1);
    }
  }
  function timeIt2() {
    counter2++;
    otwartetimer.innerHTML = convertSeconds(timeleft2 - counter2);
     if(counter2 >= 420) {
      otwartetrue = true;
      clearInterval(counterTime2);
    }
  }
  counterTime1 = setInterval(timeIt1, 1000);
  counterTime2 = setInterval(timeIt2, 1000);
  document.getElementById('btnn1').addEventListener('click', function(){use('zagrozenie')}, false);
  document.getElementById('btnn2').addEventListener('click', function(){use('otwarte')}, false);
  function use(what){
  if(what == 'zagrozenie' && zagrozenietrue === true) {
    // if() {
      currentClick = currentClick * 2;
      counterTime1 = setInterval(timeIt1, 1000);
      counter1 = 0;
      timeleft1 = 300;
      zagrozenietrue = false;
      update();
    // }
  } else if (what == 'otwarte' && otwartetrue === true) {
    totalscore += score * 2;
    score = score * 2;
    counterTime2 = setInterval(timeIt2, 1000);
    counter2 = 0;
    timeleft2 = 420;
    otwartetrue = false;
    update();
  }}
}());


// SCORES
var score = 0,
    totaljps = 0,
    totalscore = 0,
    currentClick = 1;
// PRICES
var liquidPrice = 50;

// BUTTONS
var clicker = document.getElementById('clicker'),


// DIVS
    scoreDiv = document.getElementById('score'),
    jpsDiv = document.getElementById('jps'),
    totalscoreDiv = document.getElementById('totalscore'),

// UPGRADES COSTS
    liquidCost = document.getElementById('liquidCost'),
    boczneCost = document.getElementById('boczneCost'),
    zapiekankaCost = document.getElementById('zapiekankaCost'),
    obuwieCost = document.getElementById('obuwieCost'),
    mpkCost = document.getElementById('mpkCost'),
    szatniaCost = document.getElementById('szatniaCost'),
    chemiaCost = document.getElementById('chemiaCost'),
    upomnienieCost = document.getElementById('upomnienieCost'),
    kinoCost = document.getElementById('kinoCost'),
    erasmusCost = document.getElementById('erasmusCost'),
    maturaCost = document.getElementById('maturaCost'),
    discoCost = document.getElementById('discoCost'),
    dyrektorCost = document.getElementById('dyrektorCost'),
    walesaCost = document.getElementById('walesaCost');
    miejskaCost = document.getElementById('miejskaCost');
    technikumCost = document.getElementById('technikumCost');


function addScore() {
  score = score + currentClick;
  totalscore = totalscore + currentClick;
  update();
}
clicker.addEventListener('click', addScore, false);

setInterval(function() {
  score = score + totaljps;
  totalscore = totalscore + totaljps;
  update();
}, 1000);
function priceUpdate() {
  liquidCost.innerHTML = Math.round(upgrade[0].price);
  boczneCost.innerHTML = Math.round(upgrade[1].price);
  zapiekankaCost.innerHTML = Math.round(upgrade[2].price);
  obuwieCost.innerHTML = Math.round(upgrade[3].price);
  mpkCost.innerHTML = Math.round(upgrade[4].price);
  szatniaCost.innerHTML = Math.round(upgrade[5].price);
  chemiaCost.innerHTML = Math.round(upgrade[6].price);
  upomnienieCost.innerHTML = Math.round(upgrade[7].price);
  kinoCost.innerHTML = Math.round(upgrade[8].price);
  erasmusCost.innerHTML = Math.round(upgrade[9].price);
  maturaCost.innerHTML = Math.round(upgrade[10].price);
  discoCost.innerHTML = Math.round(upgrade[11].price);
  dyrektorCost.innerHTML = Math.round(upgrade[12].price);
  walesaCost.innerHTML = Math.round(upgrade[13].price);
  miejskaCost.innerHTML = Math.round(upgrade[14].price);
  technikumCost.innerHTML = Math.round(upgrade[15].price);
}
function update() {
  scoreDiv.innerHTML = Math.round(score);
  totalscoreDiv.innerHTML = Math.round(totalscore);
  jpsDiv.innerHTML = Math.round(totaljps);
}
function buy(what){
if(what == 'liquid' && liquidtrue == true) {
  if(score >= upgrade[0].price) {
    totaljps += upgrade[0].jps;
    score -= upgrade[0].price
    upgrade[0].price += upgrade[0].price * 0.2;
    update();
    priceUpdate();
  }
} else if(what == 'boczne') {
  if(score >= upgrade[1].price) {
    totaljps += upgrade[1].jps;
    score -= upgrade[1].price
    upgrade[1].price += upgrade[1].price * 0.2;
    liquidtrue = true;
    update();
    priceUpdate();
  }
} else if(what == 'zapiekanka') {
  if(score >= upgrade[2].price) {
    totaljps += upgrade[2].jps;
    score -= upgrade[2].price
    upgrade[2].price += upgrade[2].price * 0.2;
    update();
    priceUpdate();
  }
} else if(what == 'obuwie') {
  if(score >= upgrade[3].price) {
    totaljps += upgrade[3].jps;
    score -= upgrade[3].price
    upgrade[3].price += upgrade[3].price * 0.2;
    update();
    priceUpdate();
  }
} else if(what == 'mpk') {
  if(score >= upgrade[4].price) {
    totaljps += upgrade[4].jps;
    score -= upgrade[4].price
    upgrade[4].price += upgrade[4].price * 0.2;
    update();
    priceUpdate();
  }
} else if(what == 'szatnia') {
  if(score >= upgrade[5].price) {
    totaljps += upgrade[5].jps;
    score -= upgrade[5].price
    upgrade[5].price += upgrade[5].price * 0.2;
    update();
    priceUpdate();
  }
} else if(what == 'chemia') {
  if(score >= upgrade[6].price) {
    totaljps += upgrade[6].jps;
    score -= upgrade[6].price
    upgrade[6].price += upgrade[6].price * 0.2;
    update();
    priceUpdate();
  }
} else if(what == 'upomnienie') {
  if(score >= upgrade[7].price) {
    totaljps += upgrade[7].jps;
    score -= upgrade[7].price
    upgrade[7].price += upgrade[7].price * 0.2;
    update();
    priceUpdate();
    }
  }
  else if(what == 'kino') {
    if(score >= upgrade[8].price) {
      totaljps += upgrade[8].jps;
      score -= upgrade[8].price
      upgrade[8].price += upgrade[8].price * 0.3;
      update();
      priceUpdate();
    }
  }
  else if(what == 'erasmus') {
    if(score >= upgrade[9].price) {
      totaljps += upgrade[9].jps;
      score -= upgrade[9].price
      upgrade[9].price += upgrade[9].price * 0.4;
      update();
      priceUpdate();
    }
  } else if(what == 'matura') {
    if(score >= upgrade[10].price) {
      totaljps += upgrade[10].jps;
      score -= upgrade[10].price
      upgrade[10].price += upgrade[10].price * 0.6;
      update();
      priceUpdate();
    }
  } else if(what == 'disco') {
    if(score >= upgrade[11].price) {
      totaljps += upgrade[11].jps;
      score -= upgrade[11].price
      upgrade[11].price += upgrade[11].price * 0.6;
      update();
      priceUpdate();
    }
  } else if(what == 'dyrektor') {
    if(score >= upgrade[12].price) {
      totaljps += upgrade[12].jps;
      score -= upgrade[12].price
      upgrade[12].price += upgrade[12].price * 1.2;
      update();
      priceUpdate();
    }
  }  else if(what == 'walesa') {
    if(score >= upgrade[13].price) {
      totaljps += upgrade[13].jps;
      score -= upgrade[13].price
      upgrade[13].price += upgrade[13].price * 2;
      update();
      priceUpdate();
    }
  } else if(what == 'miejska') {
    if(score >= upgrade[14].price) {
      totaljps = totaljps * 4;
      currentClick = currentClick * 4;
      score -= upgrade[14].price
      upgrade[14].price += upgrade[14].price * 10;
      update();
      priceUpdate();
    }
  } else if(what == 'technikum') {
    if(score >= upgrade[15].price) {
      totaljps += upgrade[15].jps;
      score -= upgrade[15].price
      upgrade[15].price += upgrade[15].price * 2;
      update();
      priceUpdate();
    }
  }
}
