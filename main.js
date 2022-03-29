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

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
