'user strict';
//VARIABLES
let balance = 50;
let chosenNumber = 0;
let betAmount = 0;

//CONSTANTES

const option1 = document.querySelector('.js-select');
option1.addEventListener('click', () => {
  const randomNumber = getRandomNumber(6);
  let chosenNumber = option1.value;
  console.log(chosenNumber);
});

const option2 = document.querySelector('.js-bet');
option2.addEventListener('click', () => {
  const randomNumberTwo = getRandomNumber(200);
  let betAmount = option2.value;
  console.log(betAmount);
});

const buttonClick = document.querySelector('');

//FUNCIONES
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function match(chosenNumber) {
  let randomNumber = getRandomNumber(6);

  if (chosenNumber == randomNumber) {
    balance = balance + betAmount * 2;
  } else {
    balance = balance - betAmount;
  }
}
