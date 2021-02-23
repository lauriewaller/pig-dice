//BUSINESS LOGIC

function Scores() {
  this.playerOneGlobalScore = 0;
  this.playerTwoGlobalScore = 0;
  this.turnScore = 0;
};
//move this inside doc.ready function
let gameScores = new Scores();

// Scores.prototype.hold = function

//   return this.playerOneGlobalScore + this.turnScore;
//   this.turnScore = 0;
// 

Scores.prototype.diceNumber = function() {
  let roll = Math.floor(Math.random() * 6) + 1;
  return this.turnScore += roll;
};

//UI LOGIC
$(document).ready(function() {
  
  $(".roll").click(function () {
    gameScores.diceNumber()});
  //$(".hold").click(gameScores.diceNumber());
  

  });









/*
Scores.prototype.roll = function() {
  let diceNumber = this.diceNumber;
  if (diceNumber === 1) {
  this.turnScore = 0;
  //switch player
} else {
  let roll = this.turnScore;
  this.turnScore += diceNumber;
  this.turnScore = roll;
};

alert(this.turnScore);
//$("p").text(roll);
//this.turnScore += roll;
}

Scores.prototype.hold = function() {
  this.playerOneGlobalScore = this.turnScore;
  this.turnScore = 0;
  // switch player
}

    // If score === 100 return "You win!"
    // else add number to player total.


// hold(): add player round score to global score, return round score to zero, switch player
// rollOne(): return round score to zero, switch player

*/





















/*  

Call prototype:
> myPuppy.speak();

// Co-authored-by: Nick Hennessy <njhnny@gmail.com>"

//Business logic:
//one round object
//create constructor for objects: two global objects (one for each player)
// rollDice function: need a dice method to roll 1-6



//------------------------------------
// Player can play multiple rounds in a row, or choose to hold. 

    //Questions: 
// Is it possible to mandate player turn? or provide a hold button to 
//total player score and return a message for next player turn.

// let dice = Math.floor(Math.random() * 6) + 1;
*/