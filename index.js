
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // string from dice1.png to dice6.png

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png to dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

// SECOND IMAGE

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// changing the h1 according to the refresh

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins!!"; //if player 1 wins
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!!"; //if player 2 wins
}
else{
  document.querySelector("h1").innerHTML = "Draw!!"; //if both the player gets same value
}
