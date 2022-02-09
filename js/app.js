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

// menu
const mainMenu = document.querySelector('.main-menu-wrapper');
// menu buttons
const easyLevelBtn = document.querySelector('.easy-level-btn');
const moderateLevelBtn = document.querySelector('.moderate-level-btn');
const hardLevelBtn = document.querySelector('.hard-level-btn');

// levels
const easyLevel = document.querySelector('.easy-main-container');
const moderateLevel = document.querySelector('.moderate-main-container');
const hardLevel = document.querySelector('.main-container');

// level change
easyLevelBtn.addEventListener('click', () => {
	mainMenu.style.display = 'none';
	easyLevel.classList.remove('hide-this');
});

moderateLevelBtn.addEventListener('click', () => {
	mainMenu.style.display = 'none';
	moderateLevel.classList.remove('hide-this');
});

hardLevelBtn.addEventListener('click', () => {
	mainMenu.style.display = 'none';
	hardLevel.classList.remove('hide-this');
});

let clickedArrNum = [];
let clickedArrNumId = [];
let score = 0;
let match = 0;
let userClicks = 0;
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

document.querySelector('.main-container').classList.add('hide-this');
document.querySelector('.moderate-main-container').classList.add('hide-this');
document.querySelector('.easy-main-container').classList.add('hide-this');

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
shuffle(marvelChar);

const tiles = document.querySelectorAll('.click-card');

document.querySelectorAll('.click-card').forEach((item, i) => {
	item.addEventListener('click', () => {
		userClicks++;

		if (item.classList[2] === 'flipped') {
			// item.style.pointerEvents = 'none';
			console.log('this is true');
			clickedArrNum.pop();
			console.log(clickedArrNum);
		} else {
			clickedArrNum.push(item);
		}

		toggleOnClick(item);
		item.style.pointerEvents = 'auto';
		inputAttributeInTile(item, i);
		// clickedArrNum.push(item);
		console.log(clickedArrNum);

		if (clickedArrNum.length === 2) {
			document.body.style.pointerEvents = 'none';
			if (clickedArrNum[0].lastElementChild.style.cssText === clickedArrNum[1].lastElementChild.style.cssText) {
				matched();
			} else if (
				clickedArrNum[0].lastElementChild.style.cssText !== clickedArrNum[1].lastElementChild.style.cssText
			) {
				notMatched();
			}
			scoreBoard.innerText = score;
		}
		checkWin();
	});
});
const toggleOnClick = (el) => {
	el.classList.toggle('flipped');
};
const notMatched = () => {
	setTimeout(() => {
		clickedArrNum[0].classList.remove('flipped');
		clickedArrNum[1].classList.remove('flipped');
		clickedArrNum = [];
		document.body.style.pointerEvents = 'auto';
	}, 700);
};
const matched = () => {
	match++;
	setTimeout(() => {
		clickedArrNum[0].classList.add('match');
		clickedArrNum[1].classList.add('match');
		clickedArrNum = [];
		document.body.style.pointerEvents = 'auto';
	}, 500);
	score += 3;
};
const inputAttributeInTile = (el, i) => {
	el.lastElementChild.setAttribute(
		'style',
		`background-image: url(./images/${marvelChar[i]}); background-position: 50% 50%;
  background-size: cover;`
	);
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
	score = 0;
	match = 0;
	document.querySelectorAll('.click-card').forEach((item) => {
		item.classList.remove('flipped');
		setTimeout(() => {
			item.classList.remove('match');
		}, 400);
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
	if (match === 18) {
		setTimeout(() => {
			finalPropmt.classList.remove('wrapper-final-prompt-hide');
		}, 1200);
		console.log(`user clicks: ${userClicks}`);
		console.log(`match: ${match}`);
		containerWrapperScore.classList.add('hide-this');
		containerWrapperTime.classList.add('hide-this');
		finalPropmtTime.innerText = minutes + ' Mins ' + seconds + ' Secs';
		promptHeadingScore.innerText = score;
		clearInterval(time);
	} else {
		// console.log('There was a bug in CheckWin');
	}
};

grid.addEventListener('click', timeRun, { once: true });
