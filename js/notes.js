// have to make logic where if two boxes are clicked and are not the same close and move on
// algorithm for random image generation
// this function will start the game
const startGame = () => {
	console.log('Start Game');
};

// this function is resposible for timer
const timer = () => {
	console.log('Timer');
};

// this function is responsible for reseting the game
const resetGame = () => {
	console.log('Reset Game');
};

// this function is responsible for updating score count each time theres a match of two cards
const updateScore = () => {
	console.log('Update score');
};

// this function is responsible for comparing two cards
const compareTwo = () => {
	console.log('Compate two');
};

// this function is responsible to detect match and pushed to an array
const match = () => {
	console.log('match');
};

// this function is responsible for what to do if theres no match
const noMatch = () => {
	console.log('no match');
};

// this function is responsible for when the game is over showcase pop up with results
const modalResultsPopUp = () => {
	console.log('Pop up Results');
};

// this function is responsible for checking the game for winning, check length of the matched array and if it's 18 pairs and 36 cards the game is won
const checkForWinGame = () => {
	console.log('check for win');
};

// this function is responsible for displaying cards
const flipCard = () => {
	console.log('Flip card');
};

// this function is responsible for adding cards to opened array
const addToOpen = () => {
	console.log('Add to open');
};

const playAgainBtn = () => {
	clickedArrNum = [];
	score = [];
	console.log(clickedArrNum);
	console.log(score);
	// go through all divs and find div with a class of flipped at the end
	const divsThatAreTurned = grid.getElementsByClassName('flipped').length;
	console.log(divsThatAreTurned);
	for (let i = 0; i <= divsThatAreTurned; i++) {
		// ******bug here******
		const boxWithFlippedClass = grid.getElementsByClassName('flipped')[i];
		console.log(boxWithFlippedClass);
		boxWithFlippedClass.classList.remove('flipped');
	}
	// document.querySelectorAll(".click-card").forEach((item) => {
	//   item.addEventListener("click", () => {
	//     item.classList.remove("flipped");
	//   });
	// });
};

reset.addEventListener('click', playAgainBtn);

// when a div is clicked
// store it's id to to an arr
// when another div is clicked again
// check if it is a match with first div id
// if it is clear out the arr

const reset = document.querySelector('.button');
const grid = document.querySelector('.grid');
const scoreBoard = document.querySelector('.score');
const promptHeadingScore = document.querySelector('.prompt-heading-score');

const hTimer = document.querySelector('.heading-timer');
const counterHeading = document.querySelector('.heading-timer');

const restartGameBtn = document.querySelector('.button');

const finalPropmt = document.querySelector('.wrapper-final-prompt');
const finalPropmtTime = document.querySelector('.heading-3');

const containerWrapperTime = document.querySelector('.container-wrapper-time');
const containerWrapperScore = document.querySelector('.container-wrapper-score');
const lottie = document.querySelector('.lottie-animation');

let clickedArrNum = [];
let score = 0;
let userClicks = 0;
console.log(score);
let marvelChar = [
	'antman.jpg',
	'blackpanther.jpg',
	'blackwidow.jpg',
	'captainamerica.jpg',
	'captainmarvel.jpg',
	'deadpool.jpg',
	'drstrange.jpg',
	'hulk.jpg',
	'ironman.jpg',
	'loki.jpg',
	'mystique.jpg',
	'shangchi.jpg',
	'spiderman.jpg',
	'thanos.jpg',
	'thor.jpg',
	'ultron.jpg',
	'venom.jpg',
	'vision.jpg',
	'antman.jpg',
	'blackpanther.jpg',
	'blackwidow.jpg',
	'captainamerica.jpg',
	'captainmarvel.jpg',
	'deadpool.jpg',
	'drstrange.jpg',
	'hulk.jpg',
	'ironman.jpg',
	'loki.jpg',
	'mystique.jpg',
	'shangchi.jpg',
	'spiderman.jpg',
	'thanos.jpg',
	'thor.jpg',
	'ultron.jpg',
	'venom.jpg',
	'vision.jpg'
];
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

let testDeckCards = [
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	1
];

let time;
let minutes = 0;
let seconds = 0;

// this function will shuffle deckCards
// The Fisher-Yates Algorithm
const shuffle = (arr) => {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
	// console.log(arr);
	return arr;
};
shuffle(deckCards);
shuffle(marvelChar);

console.log('./images/thanos.jpg' === './images/thanos.jpg');

const tiles = document.querySelectorAll('.click-card');

// Check for a win function and display prompt
// finalPropmt.classList.remove('wrapper-final-prompt-hide');

// when a div is clicked
// store it's id to to an arr
// when another div is clicked again
// check if it is a match with first div id
// if it is clear out the arr

// let clicked = false;

// if (item.click) {
// 	clicked = true;
// 	clickedArrNum.push(item);
// }

document.querySelectorAll('.click-card').forEach((item, i) => {
	item.addEventListener('click', () => {
		userClicks++;
		toggleOnClick(item);
		inputNumberInTile(item, i);
		console.log(item.lastElementChild.style.cssText);

		// if (item.id !== item.id) {
		// 	clickedArrNum.push(item);
		// }
		clickedArrNum.push(item);
		console.log(clickedArrNum);

		// This checks for a match, if yes adds a class that hides both elements
		if (clickedArrNum.length === 2 && clickedArrNum[0].id !== clickedArrNum[1].id) {
			document.body.style.pointerEvents = 'none';
			checkMatch();
			scoreBoard.innerText = score;
		}
		if (clickedArrNum === 2) {
			removeFlipped();
			clickedArrNum = [];
		}
		checkWin();
	});

	const checkMatch = () => {
		if (clickedArrNum[0].lastElementChild.style.cssText === clickedArrNum[1].lastElementChild.style.cssText) {
			setTimeout(() => {
				addMatch();
				clickedArrNum = [];
				document.body.style.pointerEvents = 'auto';
			}, 500);
			score += 3;
		} else if (
			clickedArrNum[0].lastElementChild.style.cssText !== clickedArrNum[1].lastElementChild.style.cssText
		) {
			setTimeoutAndCleanUp(700);
		} else {
			clickedArrNum = [];
		}
	};
});

// helper functions for StartGame
const removeFlipped = () => {
	clickedArrNum[0].classList.remove('flipped');
	clickedArrNum[1].classList.remove('flipped');
};

const addMatch = () => {
	clickedArrNum[0].classList.add('match');
	clickedArrNum[1].classList.add('match');
};

const setTimeoutAndCleanUp = (time) => {
	setTimeout(() => {
		removeFlipped();

		clickedArrNum = [];
		document.body.style.pointerEvents = 'auto';
	}, time);
};

const inputNumberInTile = (el, i) => {
	el.lastElementChild.setAttribute(
		'style',
		`background-image: url(./images/${marvelChar[i]}); background-position: 50% 50%;
  background-size: cover;`
	);
};

const toggleOnClick = (el) => {
	el.classList.toggle('flipped');
};

const showTime = () => {
	containerWrapperTime.classList.remove('hide-this');
};

// Restart function
const restart = () => {
	finalPropmt.classList.add('wrapper-final-prompt-hide');
	containerWrapperScore.classList.remove('hide-this');
	containerWrapperTime.classList.remove('hide-this');
	scoreBoard.innerText = 0;
	shuffle(deckCards);
	stopTime(time);
	seconds = 0;
	minutes = 0;
	hTimer.innerText = ' Timer: ' + minutes + ' Mins ' + seconds + ' Secs';
	timeRun();
	score = 0;
	document.querySelectorAll('.click-card').forEach((item) => {
		item.classList.remove('flipped');
		setTimeout(() => {
			item.classList.remove('match');
		}, 200);
	});
	// grid.removeEventListener('click', restart);
};

restartGameBtn.addEventListener('click', restart);

// Timer
const timeRun = () => {
	time = setInterval(() => {
		seconds++;
		if (seconds === 60) {
			minutes++;
			seconds = 0;
		}
		hTimer.innerText = ' Timer: ' + minutes + ' Mins ' + seconds + ' Secs';
	}, 1000);
};
const stopTime = (time) => {
	clearInterval(time);
	seconds = 0;
	minutes = 0;
};

const checkWin = () => {
	if (score === 54) {
		setTimeout(() => {
			finalPropmt.classList.remove('wrapper-final-prompt-hide');
		}, 1200);
		console.log(`user clicks: ${userClicks}`);
		containerWrapperScore.classList.add('hide-this');
		containerWrapperTime.classList.add('hide-this');
		finalPropmtTime.innerText = minutes + ' Mins ' + seconds + ' Secs';
		promptHeadingScore.innerText = score;
		clearInterval(time);
	} else {
		console.log('There was a bug in CheckWin');
	}
};

grid.addEventListener('click', timeRun, { once: true });

// if (clickedArrNumId.length >= 2 && clickedArrNumId[0].id !== clickedArrNumId[1].id) {
// 	console.log(clickedArrNumId);
// 	clickedArrNumId = [];
// 	clickedArrNumId.push(item.id);
// } else {
// 	console.log('Id match');
// }
