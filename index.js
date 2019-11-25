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
    tiedGame++
  } else {
    if (userChoice === "rock") {
      if (compChoice === "paper") {
        document.getElementById("whoWon").innerHTML = "Computer Wins"
        compWin++
      } else {
        document.getElementById("whoWon").innerHTML = "You Win"
        userWin++
      }
    };

    if (userChoice === "paper") {
      if (compChoice === "scissors") {
        document.getElementById("whoWon").innerHTML = "Computer Wins"
        compWin++
      } else {
        document.getElementById("whoWon").innerHTML = "You Win"
        userWin++
      }
    };

    if (userChoice === "scissors") {
      if (compChoice === "rock") {
        document.getElementById("whoWon").innerHTML = "Computer Wins"
        compWin++
      } else {
        document.getElementById("whoWon").innerHTML = "You Win"
        userWin++
      }
    };
}

}
  

// switch(userChoice == "rock") {
//   case compChoice == "paper":
//     document.getElementById("whoWon").innerHTML = "Computer Wins!"
//   break;
//   case compChoice == "scissors":
//     document.getElementById("whoWon").innerHTML = "You Win!"
//   break;
//   default:
//     document.getElementById("whoWon").innerHTML = "It is a tie!"
// }

// if (userChoice == "rock" && compChoice == "paper") {
//   document.getElementById("whoWon").innerHTML = "Computer Wins"
// } else if (userChoice == "rock" && compChoice == "scissors") {
//   document.getElementById("whoWon").innerHTML = "You Win"
// } else {
//   document.getElementById("whoWon").innerHTML = "It was a tie"
// }

// if (userChoice == "paper" && compChoice == "scissors") {
//   document.getElementById("whoWon").innerHTML = "Computer Wins"
// } else if (userChoice == "paper" && compChoice == "rock") {
//   document.getElementById("whoWon").innerHTML = "You Win"
// } else {
//   document.getElementById("whoWon").innerHTML = "It was a tie"
// }

// if (userChoice == "scissors" && compChoice == "rock") {
//   document.getElementById("whoWon").innerHTML = "Computer Wins"
// } else if (userChoice == "scissors" && compChoice == "paper") {
//   document.getElementById("whoWon").innerHTML = "You Win"
// } else {
//   document.getElementById("whoWon").innerHTML = "It was a tie"
// }


// tasks: display user and computer choices on-screen (boxes to display images of choices)
// Logic to see who won 
// display winner
