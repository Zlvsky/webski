let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById('user-score');
let computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
let ramka = document.getElementById('end');
let ramka2 = document.getElementById('end2');
let wybor = document.getElementsByClassName('choice');

function endd(){
    userScore_span.innerHTML = 0;
    computerScore_span.innerHTML = 0;
    userScore = 0;
    computerScore = 0;
    ramka.style.display = 'none';
    ramka2.style.display = 'none';
    result_div.innerHTML = "Let's play!";
  }



function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3  );
  return choices[randomNumber];
}

function convert(letter) {
  if(letter === 'r') return "Rock";
  if(letter === 'p') return "Paper";
  if(letter === 's') return "Scissors";
}



function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const sUser = 'user'.fontsize(3).sup();
  const sComp = 'comp'.fontsize(3).sup();


  const userChoice_div = document.getElementById(userChoice);
  result_div.innerHTML = `${convert(userChoice)}${sUser} beats ${convert(computerChoice)}${sComp}. You win! `;
  userChoice_div.classList.add('green-glow');
  setTimeout(function() { userChoice_div.classList.remove('green-glow')},300);


  function gumsko(){
    if (userScore >= 3){
      ramka.style.display = "block";
    }
  }

  gumsko();

  }





function lose(userChoice, computerChoice) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = 'You lost!';


  const userChoice_div = document.getElementById(userChoice);
  userChoice_div.classList.add('red-glow');
  setTimeout(function() { userChoice_div.classList.remove('red-glow')},300);


  function gumsko2(){
    if (computerScore >= 3){
      ramka2.style.display = "block";
      wybor.style.cursor = "not-allowed";
    }
  }

  gumsko2();
}


function draw(userChoice, computerChoice) {
  result_div.innerHTML = 'Draw!';

  const userChoice_div = document.getElementById(userChoice);
  userChoice_div.classList.add('gray-glow');
  setTimeout(function() { userChoice_div.classList.remove('gray-glow')},300);
}





function game(userChoice) {
  var computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
    win(userChoice, computerChoice);
      break;
      case 'sr':
      case 'rp':
      case 'ps':
      lose(userChoice, computerChoice);
        break;
        case 'rr':
        case 'pp':
        case 'ss':
        draw(userChoice, computerChoice);
          break;
  }
}

function main() {
  rock_div.addEventListener('click', function(){
    game('r');
  } )

  paper_div.addEventListener('click', function(){
    game('p');
  } )

  scissors_div.addEventListener('click', function(){
    game('s');
  } )
}

main();
