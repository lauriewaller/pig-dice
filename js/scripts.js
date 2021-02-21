//BUSINESS LOGIC
function Scores(playerOneGlobalScore, playerTwoGlobalScore, turnScore) {
  this.playerOneGlobalScore = playerOneGlobalScore;
  this.playerTwoGlobalScore = playerTwoGlobalScore;
  this.turnScore = turnScore;
};


function diceRoll() {
  let roll = Math.floor(Math.random() * 6) +1;
  $("p").text(roll);
};

// let dice = Math.floor(Math.random() * 6) + 1;

//UI LOGIC
$(document).ready(function() {
  let gameScores = new Scores(0, 0, 0);
  $(".roll").click(diceRoll);
  $(".hold").click(diceRoll);
  
  });



/*  
Create a new protoype:

Dog.prototype.speak = function() {
  console.log("Woof!");
}

Dog.prototype.humanYears = function() {
  return this.age * 7;
}
Call prototype:
> myPuppy.speak();

//user clicks the roll dice button: 
//diceRoll

//user clicks the hold button 

// Co-authored-by: Nick Hennessy <njhnny@gmail.com>"

//Business logic:
//one round object
//create constructor for objects: two global objects (one for each player)
// rollDice function: need a dice method to roll 1-6
// hold(): add player round score to global score, return round score to zero, switch player
// rollOne(): return round score to zero, switch player

//UI logic
// if/else 
    // If a player chooses to "hold", their round total is added to their global score
    // it becomes the next player's turn.
    // roll a 1 === return 0 
      //it becomes the next player's turn.
    // If score === 100 return "You win!"
    // else add number to player total. 


// Player can play multiple rounds in a row, or choose to hold. 

    //Questions: 
// Is it possible to mandate player turn? or provide a hold button to 
//total player score and return a message for next player turn.