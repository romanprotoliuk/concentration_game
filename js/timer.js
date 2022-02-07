// const timer = document.getElementById("timer");
// let timerInterval;

// const startTimer = () => {
//   // First we start by clearing the existing timer, in case of a restart
//   clearInterval(timerInterval);
//   // Then we clear the variables
//   let second = 0,
//     minute = 0,
//     hour = 0,
//     odd = false;

//   // Next we set a interval every 1000 ms
//   timerInterval = setInterval(function () {
//     // check if we are odd or even and append class to timer
//     odd = !odd;
//     if (odd) {
//       timer.classList.add("odd");
//     } else {
//       timer.classList.remove("odd");
//     }

//     // We set the timer text to include a two digit representation
//     timer.innerHTML =
//       (hour ? hour + ":" : "") +
//       (minute < 10 ? "0" + minute : minute) +
//       ":" +
//       (second < 10 ? "0" + second : second);

//     // Next we add a new second since one second is passed
//     second++;

//     // We check if the second equals 60 "one minute"
//     if (second == 60) {
//       // If so, we add a minute and reset our seconds to 0
//       minute++;
//       second = 0;
//     }

//     // If we hit 60 minutes "one hour" we reset the minutes and plus an hour
//     if (minute == 60) {
//       hour++;
//       minute = 0;
//     }
//   }, 1000);
// };


// function timer() {
// 	// Update the count every 1 second
// 	time = setInterval(function() {
// 		seconds++;
// 			if (seconds === 60) {
// 				minutes++;
// 				seconds = 0;
// 			}
// 		// Update the timer in HTML with the time it takes the user to play the game
// 		timeCounter.innerHTML = "<i class='fa fa-hourglass-start'></i>" + " Timer: " + minutes + " Mins " + seconds + " Secs" ;
// 	}, 1000);
// }

// /*
// Stop the timer once the user has matched
// all 16 cards, total of 8 pairs
// Used: https://www.w3schools.com/js/js_timing.asp
// */
// function stopTime() {
// 	clearInterval(time);
// }