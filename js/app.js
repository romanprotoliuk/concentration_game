const reset = document.querySelector('.button');
const grid = document.querySelector('.grid');
const scoreBoard = document.querySelector('.score');

const hTimer = document.querySelector('.heading-timer');
const testStartBtn = document.querySelector('.teststart');
// const millisecondT = document.getElementById('millisecond');
// console.log(millisecondT);
// const secondT = document.getElementById('second');
// const minuteT = document.getElementById('minute');
const counterHeading = document.querySelector('.heading-timer');

let clickedArrNum = [];
let score = [];
let deckCards = [
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
	12,
	13,
	14,
	15,
	16,
	17,
	18,
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
	12,
	13,
	14,
	15,
	16,
	17,
	18
];

// let timerInterval;
// const timeRun = () => {
// 	clearInterval(timerInterval);

// 	let milliseconds = 0;
// 	let seconds = 0;
// 	let minutes = 0;

// 	timerInterval = setInterval(() => {
// 		millisecondT.innerText = returnDataTime(milliseconds);
// 		secondT.innerText = returnDataTime(seconds);
// 		minuteT.innerText = returnDataTime(minutes);

// 		if ((milliseconds += 10) == 1000) {
// 			milliseconds = 0;
// 			seconds++;
// 		}
// 		if (seconds == 60) {
// 			seconds = 0;
// 			minutes++;
// 		}
// 	}, 1000);
// };

// const returnDataTime = (input) => {
// 	return input > 10 ? input : `0${input}`;
// };

let time;
let minutes = 0;
let seconds = 0;

const timeRun = () => {
	// Update the count every 1 second
	time = setInterval(function() {
		seconds++;
		if (seconds === 60) {
			minutes++;
			seconds = 0;
		}
		// Update the timer in HTML with the time it takes the user to play the game
		hTimer.innerText = ' Timer: ' + minutes + ' Mins ' + seconds + ' Secs';
	}, 1000);
	document.querySelector('.lottie-animation').style.display = 'block';
	console.log('press');
};

/*
Stop the timer once the user has matched
all 16 cards, total of 8 pairs
Used: https://www.w3schools.com/js/js_timing.asp
*/
function stopTime() {
	clearInterval(time);
}

testStartBtn.addEventListener('click', timeRun);

// this function will shuffle deckCards
// The Fisher-Yates Algorithm
const shuffle = (arr) => {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
	console.log(arr);
	return arr;
};
shuffle(deckCards);

// console.log(deckCards)

const tiles = document.querySelectorAll('.click-card');

document.querySelectorAll('.click-card').forEach((item, i) => {
	item.addEventListener('click', () => {
		toggleOnClick(item);
		// clickedArrNum.push(parseInt(item.id));
		inputNumberInTile(item, i);
		// clickedArrNum.push(parseInt(item.lastElementChild.innerText = deckCards[i]))
		console.log(item.innerText);
		clickedArrNum.push(item);
		// This checks for a match, if yes adds a class that hides both elements
		if (clickedArrNum.length === 2) {
			document.body.style.pointerEvents = 'none';

			if (clickedArrNum[0].innerText === clickedArrNum[1].innerText) {
				setTimeout(() => {
					clickedArrNum[0].classList.add('match');
					clickedArrNum[1].classList.add('match');
					score++;

					document.body.style.pointerEvents = 'auto';
				}, 600);
			} else if (clickedArrNum[0].innerText != clickedArrNum[1].innerText) {
				setTimeout(() => {
					clickedArrNum[0].classList.remove('flipped');
					clickedArrNum[1].classList.remove('flipped');
					console.log(clickedArrNum);

					document.body.style.pointerEvents = 'auto';
				}, 700);
			}
			scoreBoard.innerText = score;
			clickedArrNum = [];
		}
	});
});

const inputNumberInTile = (el, i) => {
	el.lastElementChild.innerText = deckCards[i];
	// console.log(el.lastElementChild.innerText = deckCards[i])
};

const toggleOnClick = (el) => {
	el.classList.toggle('flipped');
};

// grid.addEventListener("click", startTimer);

// const unMatched = () => {
//   disabled()

//   setTimeout(() => {
//     clickedArrNum[0].classList.remove("flipped")
//     clickedArrNum[1].classList.remove("flipped")

//     enable()
//     clickedArrNum = []
//   }, 1100)

// }

// const disabled = () => {
//   Array.prototype.filter.call(clickedArrNum, (num) => {
//     console.log(num)
//     num.classList.add('disabled')
//   })
// }

// const enable = () => {
//   Array.prototype.filter.call(clickedArrNum, (num) => {
//     console.log(num)
//     num.classList.remove('disabled')
//   })
// }

//When clicked on a tile
//- add "flipped" css class
//- push value to the clickArrNum

//Check clickArrNum if it has 2 values

//if clickArrNum has two numbers
//- disable any clicks on other tiles on the board
//- setTimeout function *not sure where to place this* ???????
//- check if the two numbers match
//if they do
//- add css class matched
//- remove disabled
//- update score
//if they don't
//- set timeout
//- remove flipped
//- remove disabled
//- update clickArrNum to 0
