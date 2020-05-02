function getDiceRandom() {
  return Math.floor(Math.random() * 6) + 1;
}

let randomNumber1 = getDiceRandom();
let randomNumber2 = getDiceRandom();

document.querySelector(".dice .img1").src = "images/dice" + randomNumber1 + ".png";
document.querySelector(".dice .img2").src = "images/dice" + randomNumber2 + ".png";

if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if(randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else document.querySelector("h1").innerHTML = "Draw!";
