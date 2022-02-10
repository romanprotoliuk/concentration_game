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

// JavaScript
document.querySelector(function() {
	function playAnimation() {
		var bg = document.querySelector('#bg'),
			bgNum = 0;
		document.getElementById('audio').play();
		const marvelInterval = setInterval(function() {
			bgNum = bgNum % 20 + 1;
			bg.css('background-image', `url(https://himalayasingh.github.io/marvel/img/img-${bgNum}.jpg)`);
		}, 100);

		setTimeout(function() {
			clearInterval(marvelInterval);
		}, 12000);
	}

	function initPlay() {
		document.querySelector('#loader img').fadeOut(100);
		document.querySelector('#a').html('▶<b>PLAY ANIMATION (turn ON sound)</b>').classList.add('cursor');
		document.querySelector('#a').addEventListener('click', function() {
			document.querySelector('#loader').fadeOut(100);
			playAnimation();
		});
	}

	document.querySelector('#hidden').imagesLoaded({ background: true }, function() {
		setTimeout(function() {
			var audio = document.getElementById('audio');
			audio.oncanplay = function() {
				initPlay();
			};

			if (audio.readyState > 3) {
				initPlay();
			}
		}, 1000);
	});
});

// body {
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 0;
//   font-family: "Roboto Condensed", sans-serif;
//   background-image: radial-gradient(#730801, #1f0100);
//   overflow: hidden;
// }

// #marvel {
//   color: transparent;
//   font-size: 250vh;
//   -webkit-text-stroke: 2px #000;
//   letter-spacing: -2vh;
//   opacity: 0;
//   animation: marvel 11s ease 2s forwards;
// }

// @keyframes marvel {
//   0% {
//     opacity: 0;
//     font-size: 205vh;
//     color: rgba(255, 255, 255, 0);
//     -webkit-text-stroke-color: #000;
//   }
//   20% {
//     opacity: 1;
//     color: rgba(255, 255, 255, 0);
//     -webkit-text-stroke-color: #000;
//   }
//   60% {
//     color: rgba(255, 255, 255, 0.5);
//     -webkit-text-stroke-color: #000;
//   }
//   100% {
//     opacity: 1;
//     font-size: 30vh;
//     color: rgba(255, 255, 255, 1);
//     -webkit-text-stroke-color: transparent;
//   }
// }

// #bg {
//   position: fixed;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   opacity: 1;
//   background-image: url(https://himalayasingh.github.io/marvel/img/img-1.jpg);
//   background-attachment: fixed;
//   background-size: cover;
//   z-index: 1;
//   transform: scale(1.4);
//   animation: hideBg 14s ease 0s forwards;
// }

// @keyframes hideBg {
//   0% {
//     opacity: 1;
//     transform: scale(1.4);
//   }
//   60% {
//     opacity: 0.5;
//   }
//   100% {
//     opacity: 0;
//     transform: scale(1);
//   }
// }

// #loader {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: fixed;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   text-align: center;
//   background-color: #212121;
//   z-index: 125;
// }

// #loader span {
//   display: block;
//   color: #fff;
//   font-size: 16px;
//   margin-top: 10px;
// }

// #loader span b {
//   margin-left: 12px;
// }

// #hidden {
//   position: fixed;
//   opacity: 0;
//   z-index: -1;
// }

// #ytd_link {
//   display: none;
//   position: fixed;
//   right: 20px;
//   bottom: 20px;
//   color: #fff;
//   font-size: 30px;
//   text-decoration: none;
//   z-index: 1;
// }

// .cursor {
//   cursor: pointer;
// }

// break **************************
// * {
//   box-sizing: border-box;
// }
// body {
//   margin: 0;
//   background-color: #e12835;
//   background-image: radial-gradient(#e12835 20%, #be2633 50%, rgba(0, 0, 0, 0.5) 100%);
//   background-size: 120%;
//   background-position: center;
//   font-family: 'Barlow Condensed', sans-serif;
//   animation: tighten-vinette ease-out 1800ms forwards;
// }
// .images {
//   pointer-events: none;
//   height: 100vh;
//   top: 0;
//   bottom: 0;
//   right: 0;
//   left: 0;
//   position: absolute;
//   opacity: 0.6;
//   z-index: 20;
//   background-size: cover;
//   background-position: center;
//   background-repeat: none;
//   background-image: url('https://static.comicvine.com/uploads/original/11124/111240517/4986890-4700382785-29908.jpg');
// }
// .wrapper {
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }
// .logo {
//   cursor: pointer;
//   text-align: center;
// }
// .logo:hover .restart {
//   opacity: 0.8;
// }
// .restart {
//   color: #fff;
//   margin-top: 20px;
//   font-size: 1.5rem;
//   text-transform: uppercase;
//   letter-spacing: -0.08rem;
//   transition: opacity 150ms linear;
// }
// .marvel, .studios {
//   position: relative;
//   color: #fff;
//   text-transform: uppercase;
//   letter-spacing: -0.2rem;
//   font-size: 5rem;
//   margin: 0.05rem 0.05rem 0.5rem;
//   padding: 0 0.4rem;
//   display: inline-block;
// }
// .studios {
//   font-weight: 500;
//   letter-spacing: -0.3rem;
//   transform: translateX(-95px);
// }
// .marvel {
//   z-index: 10;
//   font-weight: 800;
//   transform: translateX(95px);
// }
// .marvel:before {
//   z-index: -10;
//   content: '';
//   display: block;
//   background-color: #e12835;
//   border: solid rgba(255, 255, 255, 0.2) 1px;
//   height: 100%;
//   width: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
// }
// .studios:after, .studios:before {
//   content: '';
//   display: block;
//   height: 3px;
//   position: absolute;
//   background-color: #fff;
//   display: block;
//   left: 0.4rem;
//   right: 0.4rem;
// }
// .studios:before {
//   top: 0;
// }
// .studios:after {
//   bottom: 0;
// }
// .wrapper.run-animation {
//   animation: shrink ease-out 4800ms forwards 600ms;
// }
// .wrapper.run-animation .marvel {
//   transform: translateX(95px);
//   animation: slide-out-X 750ms ease forwards;
// }
// .wrapper.run-animation .studios {
//   transform: translateX(-95px);
//   color: transparent;
//   animation: slide-out-X 750ms ease forwards, show-text 300ms linear forwards 1500ms;
// }
// .wrapper.run-animation .studios:before {
//   transform: translateY(2.9rem);
//   animation: slide-out-Y 300ms ease forwards 750ms;
// }
// .wrapper.run-animation .studios:after {
//   transform: translateY(-2.9rem);
//   animation: slide-out-Y 300ms ease forwards 750ms;
// }
// .wrapper.run-animation .restart {
//   opacity: 0;
//   animation: fade-down 1200ms ease 3600ms forwards;
// }
// .wrapper.run-animation ~ .images {
//   animation: flicker-images 1500ms 2 steps(1, end), fade-out 4500ms forwards;
// }
// @keyframes slide-out-X {
//   100% {
//     transform: translateX(0);
//   }
// }
// @keyframes slide-out-Y {
//   100% {
//     transform: translateY(0);
//   }
// }
// @keyframes show-text {
//   100% {
//     color: #fff;
//   }
// }
// @keyframes shrink {
//   100% {
//     transform: scale(0.8);
//   }
// }
// @keyframes tighten-vinette {
//   100% {
//     background-size: 120%;
//   }
// }
// @keyframes fade-down {
//   0% {
//     transform: translateY(-2rem);
//     opacity: 0;
//   }
//   100% {
//     transform: translateY(0);
//     opacity: 0.5;
//   }
// }
// @keyframes fade-out {
//   100% {
//     opacity: 0;
//   }
// }
// @keyframes flicker-images {
//   0% {
//     background-image: url('https://i.ytimg.com/vi/lhgrYaBmplY/maxresdefault.jpg');
//   }
//   10% {
//     background-image: url('https://doomrocket.com/wp-content/uploads/2014/08/IMG_4527.png');
//   }
//   20% {
//     background-image: url('https://www.nerdmuch.com/wp-content/uploads/2016/02/funny-deadpool.jpg');
//   }
//   30% {
//     background-image: url('https://i.pinimg.com/736x/b4/e0/d5/b4e0d51ab9af14198f733ca582d06794--geek-things-geek-art.jpg');
//   }
//   40% {
//     background-image: url('https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/fc/3025621-poster-p-1-ka-pow-marvel-opens-massive-comic-book-images-archive-and-api-to-fans-developers.jpg');
//   }
//   50% {
//     background-image: url('http://nerdist.com/wp-content/uploads/2015/03/captain-america-iron-man-civil-war-1024x597.jpg');
//   }
//   60% {
//     background-image: url('https://geekreply.com/wp-content/uploads/2015/05/watchmen.jpg');
//   }
//   70% {
//     background-image: url('http://cdn.playbuzz.com/cdn/3c096341-2a6c-4ae6-bb76-3973445cfbcf/6b938520-4962-403a-9ce3-7bf298918cad.jpg');
//   }
//   80% {
//     background-image: url('http://cdn.wegotthiscovered.com/wp-content/uploads/2016/05/Storm-and-Black-Panther-marriage.jpg');
//   }
//   90% {
//     background-image: url('https://am21.akamaized.net/tms/cnt/uploads/2014/01/Black-Widow-70s-Suit-3-580x270.jpg');
//   }
//   100% {
//     background-image: url('https://i.ytimg.com/vi/lhgrYaBmplY/maxresdefault.jpg');
//   }
// }

// BUTTONs for MENU
// button {
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   transform: translateX(-50%) translateY(-50%);
// }
// body {
//   background: #111;
// }
// button {
//   background: #333;
//   color: #ccc;
//   width: 200px;
//   height: 60px;
//   border: 0;
//   font-size: 18px;
//   border-radius: 4px;
//   font-family: 'Raleway', sans-serif;
//   transition: 0.6s;
//   overflow: hidden;
// }
// button:focus {
//   outline: 0;
// }
// button:before {
//   content: '';
//   display: block;
//   position: absolute;
//   background: rgba(255, 255, 255, 0.5);
//   width: 60px;
//   height: 100%;
//   left: 0;
//   top: 0;
//   opacity: 0.5;
//   filter: blur(30px);
//   transform: translateX(-100px) skewX(-15deg);
// }
// button:after {
//   content: '';
//   display: block;
//   position: absolute;
//   background: rgba(255, 255, 255, 0.2);
//   width: 30px;
//   height: 100%;
//   left: 30px;
//   top: 0;
//   opacity: 0;
//   filter: blur(5px);
//   transform: translateX(-100px) skewX(-15deg);
// }
// button:hover {
//   background: #338033;
//   cursor: pointer;
// }
// button:hover:before {
//   transform: translateX(300px) skewX(-15deg);
//   opacity: 0.6;
//   transition: 0.7s;
// }
// button:hover:after {
//   transform: translateX(300px) skewX(-15deg);
//   opacity: 1;
//   transition: 0.7s;
// }
