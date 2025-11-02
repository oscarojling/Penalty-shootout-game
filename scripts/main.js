alert("Welcome to my penalty shootout game!")

let computerTeam;
let playerTeam = prompt("Choose your team: Sweden or Australia")

if (playerTeam === null) {
} else if (playerTeam === "Sweden" || playerTeam === "Australia") {
alert(`You have chosen ${playerTeam}!`)
if (playerTeam === "Sweden") {
  computerTeam = "Australia"
} else {
  computerTeam = "Sweden"
} 

} else {
  alert("You have not chosen a valid team!")
}

const DIRECTIONS = ["left", "center", "right"]
let playerScore = 0;
let computerScore = 0;
const TOTAL_ROUNDS = 5;

alert("Now you have to choose at which direction you want shoot!")
let userInput = prompt("Do you want shoot to the left, center or right?")
if (userInput === null) {} 

while (userInput !== "left" && userInput !== "center" && userInput !== "right") {
  alert ("Think you misspelled, try again!")
  userInput = prompt("Do you want shoot to the left, center or right?")
  if (userInput === null) {}
} 
playerShotDirection = userInput; 