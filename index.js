var randomNumber = Math.floor(Math.random() * 6) + 1;
// console.log(randomNumber);
var randomDiceImage ="images/dice" + randomNumber +".png";
// console.log(randomDiceImage);
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// console.log(randomNumber);
var randomDiceImage2 ="images/dice" + randomNumber2 +".png";
// console.log(randomDiceImage);
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);

if(randomNumber > randomNumber2){
  document.querySelector("h1").innerHTML = "🎈PLayer 1 wins!!";
}else if(randomNumber2>randomNumber) {
  document.querySelector("h1").innerHTML = "❤ Player 2 wins!!";
}else{
  document.querySelector("h1").innerHTML = "Draw!!👏👏👏"
}
