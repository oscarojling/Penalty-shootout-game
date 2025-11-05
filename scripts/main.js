alert("Welcome to my penalty shootout game!");

let computerTeam;
let playerTeam = prompt("Choose your team: Sweden or Australia");

if (playerTeam === null) {
} else if (playerTeam === "Sweden" || playerTeam === "Australia") {
  alert(`You have chosen ${playerTeam}!`);
  if (playerTeam === "Sweden") {
    computerTeam = "Australia";
  } else {
    computerTeam = "Sweden";
  }
} else {
  alert("You have not chosen a valid team!");
}

const DIRECTIONS = ["left", "center", "right"];
let playerScore = 0;
let computerScore = 0;
const TOTAL_ROUNDS = 5;

for (let round = 1; round <= TOTAL_ROUNDS; round++) {
  alert(`Round: ${round} - Choose where to shoot!`);
  let userInput = prompt("Do you want shoot to the left, center or right?");
  if (userInput === null) {
  }
  while (
    userInput !== "left" &&
    userInput !== "center" &&
    userInput !== "right"
  ) {
    alert("Think you misspelled, try again!");
    userInput = prompt("Do you want shoot to the left, center or right?");
    if (userInput === null) {
    }
  }
  playerShotDirection = userInput;
  let computerKeeperDirection =
    DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];
  if (playerShotDirection !== computerKeeperDirection) {
    alert(`GOOOOOAAAL!`);
    playerScore++;
  } else {
    alert("What a save by the keeper!");
  }
  alert(
    `This is how the scores stand! ${playerTeam} ${playerScore} - ${computerTeam} ${computerScore}`
  );
  alert("Now the computer is shooting!");
  let diveInput = prompt("Where do you want to dive? left, center or right?");
  if (diveInput === null) {
  }
  while (
    diveInput !== "left" &&
    diveInput !== "center" &&
    diveInput !== "right"
  ) {
    alert("Think you misspelled, try again!");
    diveInput = prompt("Where do you want to dive? left, center or right?");
    if (diveInput === null) {
    }
  }
  let computerShotDirection =
    DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];
  if (computerShotDirection !== diveInput) {
    alert(`GOOOOOOAAAL!`);
    computerScore++;
  } else {
    alert("What a save! Stunning footwork!");
  }
  alert(
    `This is how the scores stand! ${playerTeam} ${playerScore} - ${computerTeam} ${computerScore}`
  );
}
if (playerScore > computerScore) {
  alert(`${playerTeam} wins!`);
} else if (computerScore > playerScore) {
  alert(`${computerTeam} wins!`);
} else {
  alert("We are going to sudden death!");
  while (playerScore === computerScore) {
    alert("Time for sudden death! Good luck!");
    let userInput = prompt("Do you want shoot to the left, center or right?");
    if (userInput === null) {
    }
    while (
      userInput !== "left" &&
      userInput !== "center" &&
      userInput !== "right"
    ) {
      alert("Think you misspelled, try again!");
      userInput = prompt("Do you want shoot to the left, center or right?");
      if (userInput === null) {
      }
    }
    playerShotDirection = userInput;
    let computerKeeperDirection =
      DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];
    if (playerShotDirection !== computerKeeperDirection) {
      alert(`GOOOOOAAAL!`);
      playerScore++;
    } else {
      alert("What a save by the keeper!");
    }
    alert(
      `This is how the scores stand! ${playerTeam} ${playerScore} - ${computerTeam} ${computerScore}`
    );
    alert("Now the computer is shooting!");
    let diveInput = prompt("Where do you want to dive? left, center or right?");
    if (diveInput === null) {
    }
    while (
      diveInput !== "left" &&
      diveInput !== "center" &&
      diveInput !== "right"
    ) {
      alert("Think you misspelled, try again!");
      diveInput = prompt("Where do you want to dive? left, center or right?");
      if (diveInput === null) {
      }
    }
    let computerShotDirection =
      DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];
    if (computerShotDirection !== diveInput) {
      alert(`GOOOOOOAAAL!`);
      computerScore++;
    } else {
      alert("What a save! Stunning footwork!");
    }
    alert(
      `This is how the scores stand! ${playerTeam} ${playerScore} - ${computerTeam} ${computerScore}`
    );
    if (playerScore !== computerScore) {
      break;
    } 
    if (playerScore > computerScore) {
      alert(`${playerTeam} wins!`)
    } else {
      alert (`${computerTeam} wins!`)
    }
  }
}
