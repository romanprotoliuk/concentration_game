const reset = document.querySelector(".button");
const grid = document.querySelector(".grid");
const scoreBoard = document.querySelector(".score");
let clickedArrNum = [];
let score = [];

document.querySelectorAll(".click-card").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("flipped");
    console.log(parseInt(item.id));
    clickedArrNum.push(parseInt(item.id));
    console.log(clickedArrNum);
  });
});

const playAgainBtn = () => {
  clickedArrNum = [];
  score = [];
  console.log(clickedArrNum);
  console.log(score);
  // go through all divs and find div with a class of flipped at the end
  const divsThatAreTurned = grid.getElementsByClassName("flipped").length;
  for (let i = 1; i <= divsThatAreTurned; i++) {
    // ******bug here******
    const boxWithFlipped = grid.getElementsByClassName("flipped")[i];
    console.log(boxWithFlipped);
    boxWithFlipped.classList.remove("flipped");
  }
  // document.querySelectorAll(".click-card").forEach((item) => {
  //   item.addEventListener("click", () => {
  //     item.classList.remove("flipped");
  //   });
  // });
};

reset.addEventListener("click", playAgainBtn);

// grid.addEventListener("click", startTimer);
