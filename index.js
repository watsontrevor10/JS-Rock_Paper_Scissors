var choices = document.getElementsByClassName("choices")
var compChoiceOptions = ["rock", "paper", "scissors"]
var compChoice = ""
var userChoice = ""
var whoWon = ""
var userWin = 0
var compWin = 0
var tiedGame = 0

for(var i = 0; i < choices.length; i++) {
  choices[i].addEventListener("click", function() {
    userChoice = this.id
    document.getElementById("userDecision").innerHTML = "You Chose: " + userChoice
    
    compChoice = compChoiceOptions[Math.floor(Math.random() * compChoiceOptions.length)];
    document.getElementById("compDecision").innerHTML = "Computer Chose: " + compChoice;
    
    compare(userChoice, compChoice)
    
    userWin = document.getElementById("userWins").innerHTML = userWin 
    compWin = document.getElementById("compWins").innerHTML = compWin
    tiedGame = document.getElementById("tie").innerHTML = tiedGame
  })
}

var compare = function(userChoice, compChoice) {
  if (userChoice === compChoice) {
    document.getElementById("whoWon").innerHTML = "It was a tie"
    document.getElementById("whoWon").style.color = "blue"
    tiedGame++
  } else {
    if (userChoice === "rock") {
      if (compChoice === "paper") {
        document.getElementById("whoWon").innerHTML = "Computer Wins"
        document.getElementById("whoWon").style.color = "red"
        compWin++
      } else {
        document.getElementById("whoWon").innerHTML = "You Win"
        document.getElementById("whoWon").style.color = "green"
        userWin++
      }
    };

    if (userChoice === "paper") {
      if (compChoice === "scissors") {
        document.getElementById("whoWon").innerHTML = "Computer Wins"
        document.getElementById("whoWon").style.color = "red"
        compWin++
      } else {
        document.getElementById("whoWon").innerHTML = "You Win"
        document.getElementById("whoWon").style.color = "green"
        userWin++
      }
    };

    if (userChoice === "scissors") {
      if (compChoice === "rock") {
        document.getElementById("whoWon").innerHTML = "Computer Wins"
        document.getElementById("whoWon").style.color = "red"
        compWin++
      } else {
        document.getElementById("whoWon").innerHTML = "You Win"
        document.getElementById("whoWon").style.color = "green"
        userWin++
      }
    };
  }
}

