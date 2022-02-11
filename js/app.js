/* ============DOM!============ */
// LEVEL EASY DOM
const resetEasy = document.querySelector('.easy-button');
const gridEasy = document.querySelector('.easy-grid');
const scoreBoardEasy = document.querySelector('.easy-score');
const promptHeadingScoreEasy = document.querySelector('.easy-prompt-heading-score');
const hTimerEasy = document.querySelector('.easy-heading-timer');
const restartGameBtnEasy = document.querySelector('.easy-button');
const containerWrapperTimeEasy = document.querySelector('.easy-container-wrapper-time');
const containerWrapperScoreEasy = document.querySelector('.easy-container-wrapper-score');
const easyClickCard = document.querySelectorAll('.easy-click-card');
// Final Prompt
const finalPropmtEasy = document.querySelector('.easy-wrapper-final-prompt');
const accuracyPromptEasy = document.querySelector('.easy-accuracy');
const finalPropmtTimeEasy = document.querySelector('.easy-heading-3-time');
const easyPlatformChangeColor = document.querySelector('.easy-platform');
const easyGoToMenu = document.querySelector('.easy-gotomenu-button');

// LEVEL HARD DOM
const reset = document.querySelector('.button');
const grid = document.querySelector('.grid');
const scoreBoard = document.querySelector('.score');
const promptHeadingScore = document.querySelector('.prompt-heading-score');
const hTimer = document.querySelector('.heading-timer');
const restartGameBtn = document.querySelector('.button');
const containerWrapperTime = document.querySelector('.container-wrapper-time');
const containerWrapperScore = document.querySelector('.container-wrapper-score');
const hardClickCard = document.querySelectorAll('.click-card');
// Final Prompt
const finalPropmt = document.querySelector('.wrapper-final-prompt');
const accuracyPrompt = document.querySelector('.accuracy');
const finalPropmtTime = document.querySelector('.heading-3-time');
const hardPlatformChangeColor = document.querySelector('.platform');
const hardGoToMenu = document.querySelector('.hard-gotomenu-button');

// MENU
const mainMenu = document.querySelector('.main-menu-wrapper');
// menu buttons
const easyLevelBtn = document.querySelector('.easy-level-btn');
const hardLevelBtn = document.querySelector('.hard-level-btn');
// LEVELS
const easyLevel = document.querySelector('.easy-main-container');

const hardLevel = document.querySelector('.main-container');

// Audio Match
const matchAudio = new Audio('./sound/match.wav');

/* ============VARIABLES!============ */

let clickedArrNum = [];
let score = 0;
let match = 0;
let scoreEasy = 0;
let matchEasy = 0;
let userClicks = 0;
let userClicksEasy = 0;

let time;
let minutes = 0;
let seconds = 0;

let timeEasy;
let minutesEasy = 0;
let secondsEasy = 0;

/* ============GAME IMAGES!============ */

// Level Easy
let marvelCharLevelEasy = [
	'blackpanther.jpg',
	'captainamerica.jpg',
	'drstrange.jpg',
	'ironman.jpg',
	'hulk.jpg',
	'spiderman.jpg',
	'thor.jpg',
	'mystique.jpg',
	'blackpanther.jpg',
	'captainamerica.jpg',
	'drstrange.jpg',
	'ironman.jpg',
	'hulk.jpg',
	'spiderman.jpg',
	'thor.jpg',
	'mystique.jpg'
];

// Level Hard
let marvelCharLevelHard = [
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

easyLevelBtn.addEventListener('click', () => {
	mainMenu.style.display = 'none';
	audioPause();
	easyLevel.classList.remove('hide-this');
});

hardLevelBtn.addEventListener('click', () => {
	mainMenu.style.display = 'none';
	audioPause();
	hardLevel.classList.remove('hide-this');
});

const goBackToMenu = (level) => {
	level.addEventListener('click', () => {
		window.location.reload();
	});
};

goBackToMenu(easyGoToMenu);
goBackToMenu(hardGoToMenu);

const themeSong = document.getElementById('theme-song');

window.addEventListener('DOMContentLoaded', (event) => {
	console.log('DOM fully loaded and parsed');

	autoPlay();
});

const autoPlay = () => {
	themeSong.play(); //play the audio file
};

const audioPause = () => {
	themeSong.pause();
};

document.querySelector('.main-container').classList.add('hide-this');
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
	return arr;
};
shuffle(marvelCharLevelHard);
shuffle(marvelCharLevelEasy);

easyClickCard.forEach((item, i) => {
	item.addEventListener('click', () => {
		userClicksEasy++;
		filterArr(item);
		toggleOnClick(item);
		item.style.pointerEvents = 'auto';
		inputAttributeInTileLevelEasy(item, i);
		if (clickedArrNum.length === 2) {
			document.body.style.pointerEvents = 'none';
			if (clickedArrNum[0].lastElementChild.style.cssText === clickedArrNum[1].lastElementChild.style.cssText) {
				matchedEasy();
			} else if (
				clickedArrNum[0].lastElementChild.style.cssText !== clickedArrNum[1].lastElementChild.style.cssText
			) {
				notMatched();
			}
			setTimeout(() => {
				scoreBoardEasy.innerText = scoreEasy;
			}, 700);
		}
		checkWinEasy();
	});
});

hardClickCard.forEach((item, i) => {
	item.addEventListener('click', () => {
		userClicks++;
		filterArr(item);
		toggleOnClick(item);
		item.style.pointerEvents = 'auto';
		inputAttributeInTileLevelHard(item, i);
		if (clickedArrNum.length === 2) {
			document.body.style.pointerEvents = 'none';
			if (clickedArrNum[0].lastElementChild.style.cssText === clickedArrNum[1].lastElementChild.style.cssText) {
				matched();
			} else if (
				clickedArrNum[0].lastElementChild.style.cssText !== clickedArrNum[1].lastElementChild.style.cssText
			) {
				notMatched();
			}
			setTimeout(() => {
				scoreBoard.innerText = score;
			}, 700);
		}
		checkWin();
	});
});

const filterArr = (i) => {
	if (i.classList[2] === 'flipped') {
		clickedArrNum.pop();
	} else {
		clickedArrNum.push(i);
	}
};

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
	setTimeout(() => {
		if (score > 0) {
			score -= 1;
		}
	}, 700);
	setTimeout(() => {
		if (scoreEasy > 0) {
			scoreEasy -= 1;
		}
	}, 700);
};

const matched = () => {
	match++;
	setTimeout(() => {
		playMatch();
		clickedArrNum[0].classList.add('match');
		clickedArrNum[1].classList.add('match');
		clickedArrNum = [];
		document.body.style.pointerEvents = 'auto';
	}, 500);
	score += 10;
};

const matchedEasy = () => {
	matchEasy++;
	setTimeout(() => {
		playMatch();
		clickedArrNum[0].classList.add('match');
		clickedArrNum[1].classList.add('match');
		clickedArrNum = [];
		document.body.style.pointerEvents = 'auto';
	}, 500);
	scoreEasy += 10;
};

const inputAttributeInTileLevelHard = (el, i) => {
	el.lastElementChild.setAttribute(
		'style',
		`background-image: url(./images/${marvelCharLevelHard[i]}); background-position: 50% 50%;
  background-size: cover;`
	);
};

const inputAttributeInTileLevelEasy = (el, i) => {
	el.lastElementChild.setAttribute(
		'style',
		`background-image: url(./images/${marvelCharLevelEasy[i]}); background-position: 50% 50%;
  background-size: cover;`
	);
};

const showTime = () => {
	containerWrapperTime.classList.remove('hide-this');
};

const showTimeEasy = () => {
	containerWrapperTimeEasy.classList.remove('hide-this');
};

const restartEasy = () => {
	finalPropmtEasy.classList.add('easy-wrapper-final-prompt-hide');
	containerWrapperScoreEasy.classList.remove('hide-this');
	containerWrapperTimeEasy.classList.remove('hide-this');
	changeBlackBackToRed(easyPlatformChangeColor);
	resetScoreBoard(scoreBoardEasy);
	shuffle(marvelCharLevelEasy);
	stopTime(timeEasy);
	seconds = 0;
	minutes = 0;
	hTimerEasy.innerText = minutesEasy + ' Mins ' + secondsEasy + ' Secs';
	timeRunEasy();
	scoreEasy = 0;
	matchEasy = 0;
	userClicksEasy = 0;
	playAgainRemoveMatch(easyClickCard);
};

// Restart function Level Hard
const restart = () => {
	finalPropmt.classList.add('wrapper-final-prompt-hide');
	containerWrapperScore.classList.remove('hide-this');
	containerWrapperTime.classList.remove('hide-this');
	changeBlackBackToRed(hardPlatformChangeColor);
	resetScoreBoard(scoreBoard);
	shuffle(marvelCharLevelHard);
	stopTime(time);
	seconds = 0;
	minutes = 0;
	hTimer.innerText = minutes + ' Mins ' + seconds + ' Secs';
	timeRun();
	score = 0;
	match = 0;
	userClicks = 0;
	playAgainRemoveMatch(hardClickCard);
};

restartGameBtnEasy.addEventListener('click', restartEasy);
restartGameBtn.addEventListener('click', restart);

const resetScoreBoard = (board) => {
	board.innerText = 0;
};

const changeBlackBackToRed = (platform) => {
	platform.style.backgroundColor = '#e12835';
};

const playAgainRemoveMatch = (card) => {
	card.forEach((item) => {
		item.classList.remove('flipped');
		setTimeout(() => {
			item.classList.remove('match');
		}, 400);
	});
};

// Timer
const timeRun = () => {
	time = setInterval(() => {
		seconds++;
		if (seconds === 60) {
			minutes++;
			seconds = 0;
		}
		hTimer.innerText = minutes + ' Mins ' + seconds + ' Secs';
	}, 1000);
};
const stopTime = (time) => {
	clearInterval(time);
	seconds = 0;
	minutes = 0;
};

// Timer
const timeRunEasy = () => {
	timeEasy = setInterval(() => {
		seconds++;
		if (seconds === 60) {
			minutes++;
			seconds = 0;
		}
		hTimerEasy.innerText = minutes + ' Mins ' + seconds + ' Secs';
	}, 1000);
};
const stopTimeEasy = (timeEasy) => {
	clearInterval(timeEasy);
	secondsEasy = 0;
	minutesEasy = 0;
};

const checkWin = () => {
	if (match === 18) {
		setTimeout(() => {
			finalPropmt.classList.remove('wrapper-final-prompt-hide');
			hardPlatformChangeColor.style.backgroundColor = 'black';
		}, 1200);
		containerWrapperScore.classList.add('hide-this');
		containerWrapperTime.classList.add('hide-this');
		finalPropmtTime.innerText = minutes + ' Mins ' + seconds + ' Secs';
		promptHeadingScore.innerText = score;
		calculateAccuracyHard();
		clearInterval(time);
	} else {
	}
};

const checkWinEasy = () => {
	if (matchEasy === 8) {
		setTimeout(() => {
			finalPropmtEasy.classList.remove('easy-wrapper-final-prompt-hide');
			easyPlatformChangeColor.style.backgroundColor = 'black';
		}, 1200);
		containerWrapperScoreEasy.classList.add('hide-this');
		containerWrapperTimeEasy.classList.add('hide-this');
		finalPropmtTimeEasy.innerText = minutes + ' Mins ' + seconds + ' Secs';
		promptHeadingScoreEasy.innerText = scoreEasy;
		calculateAccuracyEasy();
		clearInterval(time);
		console.log(userClicksEasy);
	} else {
	}
};

const calculateAccuracyHard = () => {
	y = Math.round(36 / userClicks * 100);
	accuracyPrompt.innerText = y + '%';
};

const calculateAccuracyEasy = () => {
	y = Math.round(16 / userClicksEasy * 100);
	accuracyPromptEasy.innerText = y + '%';
};

const playMatch = () => {
	matchAudio.play();
};

gridEasy.addEventListener('click', timeRunEasy, { once: true });
grid.addEventListener('click', timeRun, { once: true });
