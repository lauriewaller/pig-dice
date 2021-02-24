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
  if (roll === 1) {
  this.turnScore = 0;
  this.changePlayer();
  } else {
  return this.turnScore += roll;
  }
};
//separate out "you win" functionality into separate prototype?
//else if (this.playerOneGlobalScore && this.playerOneGlobalScore + this.turnScore >= 100) {
//  return "You win!";
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


/*
// hold(): add player round score to global score, return round score to zero, switch player
// rollOne(): return round score to zero, switch player

alert(this.turnScore);
//$("p").text(roll);
//this.turnScore += roll;
}
*/




// rollOne(): return round score to zero, switch player

    // If score === 100 return "You win!"
    // else add number to player total.


//Call prototype:
//> myPuppy.speak();


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

// let dice = Math.floor(Math.random() * 6) + 1