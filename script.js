let gameInProcess = false;

function computerInput() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber == 1) {
    return "paper";
  } else if (randomNumber == 2) {
    return "rock";
  } else {
    return "scissors";
  }
}

function play(playerInput) {
  if (!gameInProcess) {
    gameInProcess = true;
    let computerAction = computerInput();
    gameAnimation(playerInput, computerAction);
    evaluateAndDisplayWinner(playerInput, computerAction);
  }
}

function gameAnimation(playerInput, computerAction) {
  startAnimation();
  stopAnimationAndDisplayInput(playerInput, computerAction);
  resetGame();
}

function startAnimation() {
  document.getElementById("playerMove").classList.add("animated");
  document.getElementById("computerMove").classList.add("animated");
}

function stopAnimationAndDisplayInput(playerInput, computerAction) {
  setTimeout(() => {
    document.getElementById("playerMove").classList.remove("animated");
    document.getElementById("computerMove").classList.remove("animated");
    rotateScissorInput(playerInput, computerAction);
    displayGame(playerInput, computerAction);
  }, 1000);
}

function rotateScissorInput(playerInput, computerAction) {
  if (playerInput === "scissors") {
    document.getElementById("playerMove").style = "transform: rotate(0deg);";
    setTimeout(() => {
      document.getElementById("playerMove").style = "transform: rotate(90deg);";
    }, 2500);
  }
  if (computerAction === "scissors") {
    document.getElementById("computerMove").style =
      "transform: scaleX(-1) rotate(0deg);";
    setTimeout(() => {
      document.getElementById("computerMove").style =
        "transform: scaleX(-1) rotate(90deg);";
    }, 2500);
  }
}

function displayGame(playerInput, computerAction) {
  document.getElementById("playerMove").src = `/images/${playerInput}.png`;
  document.getElementById("computerMove").src = `/images/${computerAction}.png`;
}

function resetGame() {
  setTimeout(() => {
    document.getElementById("playerMove").src = `/images/rock.png`;
    document.getElementById("computerMove").src = `/images/rock.png`;
    gameInProcess = false;
  }, 3500);
}

function evaluateAndDisplayWinner(playerInput, computerAction) {
  let winner = null;
  if (playerInput === computerAction) {
    winner = "Niemand";
  } else if (playerLoses(playerInput, computerAction)) {
    winner = "der Computer";
    document.getElementById("computerScore").innerHTML++;
  } else {
    winner = "Spieler";
    document.getElementById("playerScore").innerHTML++;
  }
  setTimeout(() => {
    document.getElementById(
      "title"
    ).innerHTML = `Und der Gewinner ist ${winner}!`;
    winner = null;
  }, 1000);
}

function playerLoses(playerInput, computerAction) {
  return (
    (playerInput === "paper" && computerAction === "scissors") ||
    (playerInput === "scissors" && computerAction === "rock") ||
    (playerInput === "rock" && computerAction === "paper")
  );
}
