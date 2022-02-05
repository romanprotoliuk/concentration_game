let clickedArrNum = [];

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
  console.log(clickedArrNum);
};

const reset = document.querySelector(".button");
console.log(reset);
reset.addEventListener("click", playAgainBtn);
