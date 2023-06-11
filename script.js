let gameInProcess = false;

function play() {
  if (!gameInProcess) {
    gameInProcess = true;

    //make game animation

    console.log("hallo");

    document.getElementById("playerMove").classList.add("animated");
    document.getElementById("computerMove").classList.add("animated");
    setTimeout(() => {
      document.getElementById("playerMove").classList.remove("animated");
      document.getElementById("computerMove").classList.remove("animated");
    }, 1000);

    //evaluate winner
    // playerInput === computerInput();

    //display winner

    gameInProcess = false;
  }
}

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
