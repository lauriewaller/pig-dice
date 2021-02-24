//BUSINESS LOGIC

function Scores() {
  this.playerOneGlobalScore = 0;
  this.playerTwoGlobalScore = 0;
  this.turnScore = 0;
  this.player1 = true;
  this.player2 = false;
};

let gameScores = new Scores();

//need to create an array 

Scores.prototype.diceNumber = function() {
  return Math.floor(Math.random() * 6) + 1;
};

Scores.prototype.changePlayer = function() {
  this.player1 = !this.player1;
  this.player2 = !this.player2;
};

Scores.prototype.hold = function() {
  if (this.player1) {
    this.playerOneGlobalScore += this.turnScore;
  }
  else {
    this.playerTwoGlobalScore += this.turnScore;
  }
  this.turnScore = 0;
  this.changePlayer();
};

Scores.prototype.roll = function() {
  let roll = this.diceNumber();
  console.log(roll);
  if (roll === 1) {
  this.turnScore = 0;
  this.changePlayer();
  } else {
  return this.turnScore += roll;
  }
  console.log(gameScores)
};


//UI LOGIC
$(document).ready(function() {
  
  $(".roll").click(function () {
    gameScores.roll();
  });
  
  $(".hold").click(function () {    
    gameScores.hold();
  });

//.toggle -- Display or hide the matched elements.

});


