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
const moderateLevel = document.querySelector('.moderate-main-container');
const hardLevel = document.querySelector('.main-container');

// LEVEL CHANGE
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

// Go back to Menu
easyGoToMenu.addEventListener('click', () => {
	window.location.reload();
});
// Go back to Menu
hardGoToMenu.addEventListener('click', () => {
	window.location.reload();
});

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
// VARIABLES

let clickedArrNum = [];
let clickedArrNumId = [];
let score = 0;
let match = 0;
let scoreEasy = 0;
let matchEasy = 0;
let userClicks = 0;
let userClicksEasy = 0;
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

let time;
let minutes = 0;
let seconds = 0;

let timeEasy;
let minutesEasy = 0;
let secondsEasy = 0;

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

// const playBackgroundMusic = () => {
// 	const audio = new Audio('./sound/The-Avengers-Theme-Song.mp3');
// 	audio.play();
// };

document.querySelectorAll('.easy-click-card').forEach((item, i) => {
	item.addEventListener('click', () => {
		userClicksEasy++;

		if (item.classList[2] === 'flipped') {
			clickedArrNum.pop();
		} else {
			clickedArrNum.push(item);
		}

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

document.querySelectorAll('.click-card').forEach((item, i) => {
	item.addEventListener('click', () => {
		userClicks++;

		if (item.classList[2] === 'flipped') {
			clickedArrNum.pop();
		} else {
			clickedArrNum.push(item);
		}

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

// Restart function for Moderate Level
const restartEasy = () => {
	finalPropmtEasy.classList.add('easy-wrapper-final-prompt-hide');
	containerWrapperScoreEasy.classList.remove('hide-this');
	containerWrapperTimeEasy.classList.remove('hide-this');
	easyPlatformChangeColor.style.backgroundColor = '#e12835';
	scoreBoardEasy.innerText = 0;
	shuffle(marvelCharLevelEasy);
	stopTime(timeEasy);
	seconds = 0;
	minutes = 0;
	hTimerEasy.innerText = minutesEasy + ' Mins ' + secondsEasy + ' Secs';
	timeRunEasy();
	scoreEasy = 0;
	matchEasy = 0;
	userClicksEasy = 0;

	document.querySelectorAll('.easy-click-card').forEach((item) => {
		item.classList.remove('flipped');
		setTimeout(() => {
			item.classList.remove('match');
		}, 400);
	});
};

// Restart function Level Hard
const restart = () => {
	finalPropmt.classList.add('wrapper-final-prompt-hide');
	containerWrapperScore.classList.remove('hide-this');
	containerWrapperTime.classList.remove('hide-this');
	hardPlatformChangeColor.style.backgroundColor = '#e12835';
	scoreBoard.innerText = 0;
	shuffle(marvelCharLevelHard);
	stopTime(time);
	seconds = 0;
	minutes = 0;
	hTimer.innerText = minutes + ' Mins ' + seconds + ' Secs';
	timeRun();
	score = 0;
	match = 0;
	userClicks = 0;
	document.querySelectorAll('.click-card').forEach((item) => {
		item.classList.remove('flipped');
		setTimeout(() => {
			item.classList.remove('match');
		}, 400);
	});
	// `grid`.removeEventListener('click', restart);
};

restartGameBtnEasy.addEventListener('click', restartEasy);
restartGameBtn.addEventListener('click', restart);

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
	// there can be 36 total clicks in a perfect winning situation
	// x = number of clicks a user made
	y = Math.round(36 / userClicks * 100);
	accuracyPrompt.innerText = y + '%';
	// y = 36 / x
	// y * 100
};

const calculateAccuracyEasy = () => {
	// there can be 36 total clicks in a perfect winning situation
	// x = number of clicks a user made
	y = Math.round(16 / userClicksEasy * 100);
	accuracyPromptEasy.innerText = y + '%';
	// y = 36 / x
	// y * 100
};

gridEasy.addEventListener('click', timeRunEasy, { once: true });
grid.addEventListener('click', timeRun, { once: true });
