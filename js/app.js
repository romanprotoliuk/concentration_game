const reset = document.querySelector('.button');
const grid = document.querySelector('.grid');
const scoreBoard = document.querySelector('.score');

const hTimer = document.querySelector('.heading-timer');
const counterHeading = document.querySelector('.heading-timer');

const restartGameBtn = document.querySelector('.button');

const finalPropmt = document.querySelector('.wrapper-final-prompt');
const finalPropmtTime = document.querySelector('.heading-3');

const containerWrapperTime = document.querySelector('.container-wrapper-time');
const containerWrapperScore = document.querySelector('.container-wrapper-score');
const lottie = document.querySelector('.lottie-animation');

let clickedArrNum = [];
let score = [];
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

const tiles = document.querySelectorAll('.click-card');

// Check for a win function and display prompt
// finalPropmt.classList.remove('wrapper-final-prompt-hide');

document.querySelectorAll('.click-card').forEach((item, i) => {
	// showTime();
	item.addEventListener('click', () => {
		toggleOnClick(item);
		// item.style.backgroundImage = 'url(./images/spiderman.jpg)'
		inputNumberInTile(item, i);
		console.log(item.innerText);
		clickedArrNum.push(item);

		// This checks for a match, if yes adds a class that hides both elements
		if (clickedArrNum.length === 2) {
			document.body.style.pointerEvents = 'none';
			if (clickedArrNum[0].innerText === clickedArrNum[1].innerText) {
				setTimeout(() => {
					clickedArrNum[0].classList.add('match');
					clickedArrNum[1].classList.add('match');

					clickedArrNum = [];
					document.body.style.pointerEvents = 'auto';
				}, 500);
				score++;
			} else if (clickedArrNum[0].innerText !== clickedArrNum[1].innerText) {
				setTimeout(() => {
					clickedArrNum[0].classList.remove('flipped');
					clickedArrNum[1].classList.remove('flipped');
					console.log(clickedArrNum);

					clickedArrNum = [];
					document.body.style.pointerEvents = 'auto';
				}, 700);
			} else {
				clickedArrNum[0].classList.remove('flipped');
				clickedArrNum[1].classList.remove('flipped');
				clickedArrNum = [];
			}
			scoreBoard.innerText = score;
		}
		checkWin();
	});
});

// helper functions for StartGame
const inputNumberInTile = (el, i) => {
	el.lastElementChild.innerText = testDeckCards[i];
};
const toggleOnClick = (el) => {
	el.classList.toggle('flipped');
};

const showTime = () => {
	containerWrapperTime.classList.remove('hide-this');
};

const lottieShow = () => {};

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
	score = [];
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
	if (score === 18) {
		setTimeout(() => {
			finalPropmt.classList.remove('wrapper-final-prompt-hide');
		}, 1200);
		containerWrapperScore.classList.add('hide-this');
		containerWrapperTime.classList.add('hide-this');
		finalPropmtTime.innerText = minutes + ' Mins ' + seconds + ' Secs';
		clearInterval(time);
	} else {
		console.log('There was a bug in CheckWin');
	}
};

grid.addEventListener('click', timeRun, { once: true });
