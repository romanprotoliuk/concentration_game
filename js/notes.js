// have to make logic where if two boxes are clicked and are not the same close and move on
// algorithm for random image generation
// this function will start the game
const startGame = () => {
  console.log('Start Game')
}

// this function is resposible for timer
const timer = () => {
  console.log('Timer')
}

// this function is responsible for reseting the game 
const resetGame = () => {
  console.log('Reset Game')
}

// this function is responsible for updating score count each time theres a match of two cards
const updateScore = () => {
  console.log('Update score')
}

// this function is responsible for comparing two cards
const compareTwo = () => {
  console.log('Compate two')
}

// this function is responsible to detect match and pushed to an array 
const match = () => {
  console.log('match')
}

// this function is responsible for what to do if theres no match
const noMatch = () => {
  console.log('no match')
}

// this function is responsible for when the game is over showcase pop up with results 
const modalResultsPopUp = () => {
  console.log('Pop up Results')
}

// this function is responsible for checking the game for winning, check length of the matched array and if it's 18 pairs and 36 cards the game is won  
const checkForWinGame = () => {
  console.log('check for win')
}

// this function is responsible for displaying cards 
const flipCard = () => {
  console.log('Flip card')
}

// this function is responsible for adding cards to opened array
const addToOpen = () => {
  console.log('Add to open')
}





const playAgainBtn = () => {
  clickedArrNum = [];
  score = [];
  console.log(clickedArrNum);
  console.log(score);
  // go through all divs and find div with a class of flipped at the end
  const divsThatAreTurned = grid.getElementsByClassName("flipped").length;
  console.log(divsThatAreTurned)
  for (let i = 0; i <= divsThatAreTurned; i++) {
    // ******bug here******
    const boxWithFlippedClass = grid.getElementsByClassName("flipped")[i];
    console.log(boxWithFlippedClass);
    boxWithFlippedClass.classList.remove("flipped");
  }
  // document.querySelectorAll(".click-card").forEach((item) => {
  //   item.addEventListener("click", () => {
  //     item.classList.remove("flipped");
  //   });
  // });
};

reset.addEventListener("click", playAgainBtn);