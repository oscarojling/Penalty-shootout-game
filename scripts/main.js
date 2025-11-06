function shoot(userInput, computerKeeperDirection) {
  if (userInput !== computerKeeperDirection) {
    return true;
  } else {
    return false;
  }
}
function chooseTeams() {
  let computerTeam;
  let playerTeam = prompt("Choose your team: Sweden or Australia");
  if (playerTeam === null) {
    alert("You have cancelled the game");
    return null;
  }
  playerTeam = playerTeam.toLowerCase();
  while (playerTeam !== "sweden" && playerTeam !== "australia") {
    alert(`You have not chosen a valid team!`);
    playerTeam = prompt("Choose your team: Sweden or Australia");
    if (playerTeam === null) {
      alert("You have cancelled the game");
      return null;
    }
    playerTeam = playerTeam.toLowerCase();
  }
  alert(`You have chosen ${playerTeam}!`);
  if (playerTeam === "sweden") {
    playerTeam = "Sweden";
    computerTeam = "Australia";
  } else {
    playerTeam = "Australia";
    computerTeam = "Sweden";
  }
  return { playerTeam, computerTeam };
}

function getDirection(message) {
  let direction = prompt(message);
  if (direction === null) {
    alert("You have cancelled the game");
    return null;
  }
  direction = direction.toLowerCase();
  while (
    direction !== "left" &&
    direction !== "center" &&
    direction !== "right"
  ) {
    alert("Think you misspelled, try again!");
    direction = prompt(message);
    if (direction === null) {
      alert("You have cancelled the game");
      return null;
    }
    direction = direction.toLowerCase();
  }
  return direction;
}
const randomDirection = (directionsArray) => {
  return directionsArray[Math.floor(Math.random() * directionsArray.length)];
};

function startPenaltyGame() {
  alert("Welcome to my penalty shootout game!");
  const teams = chooseTeams();
  if (!teams) return;
  const { playerTeam, computerTeam } = teams;

  const DIRECTIONS = ["left", "center", "right"];
  let playerScore = 0;
  let computerScore = 0;
  const TOTAL_ROUNDS = 5;
  for (let round = 1; round <= TOTAL_ROUNDS; round++) {
    alert(`Round: ${round} - Choose where to shoot!`);
    let userInput = getDirection(
      "Where do you want to shoot? left, center or right?"
    );
    if (!userInput) return;
    let computerKeeperDirection = randomDirection(DIRECTIONS);
    if (shoot(userInput, computerKeeperDirection)) {
      alert(`GOOOOOAAAL! for ${playerTeam}`);
      playerScore++;
    } else {
      alert("What a save by the keeper!");
    }
    alert(
      `This is how the scores stand! ${playerTeam} ${playerScore} - ${computerTeam} ${computerScore}`
    );
    alert(`Now it's time for ${computerTeam} to take the penalty`);
    let diveInput = getDirection(
      "Where do you want to dive? left, center or right?"
    );
    if (!diveInput) return;
    let computerShotDirection = randomDirection(DIRECTIONS);
    if (computerShotDirection !== diveInput) {
      alert(`GOOOOOOAAAL! for ${computerTeam}`);
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
      let userInput = getDirection(
        "Where do you want to shoot? left, center or right?"
      );
      if (!userInput) return;
      let computerKeeperDirection = randomDirection(DIRECTIONS);
      if (shoot(userInput, computerKeeperDirection)) {
        alert(`GOOOOOAAAL! for ${playerTeam}`);
        playerScore++;
      } else {
        alert("What a save by the keeper!");
      }
      alert(
        `This is how the scores stand! ${playerTeam} ${playerScore} - ${computerTeam} ${computerScore}`
      );
      alert(`Now it's time for ${computerTeam} to take the penalty`);
      let diveInput = getDirection(
        "Where do you want to dive? left, center or right?"
      );
      if (!diveInput) return;
      let computerShotDirection = randomDirection(DIRECTIONS);
      if (computerShotDirection !== diveInput) {
        alert(`GOOOOOOAAAL! for ${computerTeam}`);
        computerScore++;
      } else {
        alert("What a save! Stunning footwork!");
      }
      alert(
        `This is how the scores stand! ${playerTeam} ${playerScore} - ${computerTeam} ${computerScore}`
      );
      if (playerScore !== computerScore) {
        const winner = playerScore > computerScore ? playerTeam : computerTeam;
        alert(`${winner} wins!`);
        return;
      }
    }
  }
}
startPenaltyGame();
