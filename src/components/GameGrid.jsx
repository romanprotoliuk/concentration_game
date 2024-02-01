import React from "react";
import GameCard from "./GameCard";
import { useState, useEffect, useContext } from "react";
import { shuffle } from "../helpers/shuffle";
import { GameContext } from "../context/GameContext";

const GameGrid = ({ level, characters }) => {
  const [showWinMessage, setShowWinMessage] = useState(false);
  const isEasy = level === "easy";
  const gridSize = isEasy ? 16 : 36;
  const gridClass = isEasy ? "easy-grid" : "grid";

  const {
    userClicks,
    setUserClicks,
    timer,
    setTimer,
    timerRunning,
    setTimerRunning,
    startTimer,
    stopTimer,
    score,
    setScore,
    matchCount,
  } = useContext(GameContext);

  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [shuffledCharacters, setShuffledCharacters] = useState([]);

  useEffect(() => {
    setShuffledCharacters(shuffle(characters));
  }, []);

  useEffect(() => {
    if (matchedCards.length === 8) {
      setTimeout(() => setShowWinMessage(true), 700); // Adjust the timeout as needed
    }
  }, [matchedCards]);

  // useEffect(() => {
  //   let interval;
  //   if (timerRunning) {
  //     interval = setInterval(() => {
  //       setTimer((prevTimer) => {
  //         const newSeconds = (prevTimer.seconds + 1) % 60;
  //         const newMinutes =
  //           newSeconds === 0 ? prevTimer.minutes + 1 : prevTimer.minutes;
  //         return { seconds: newSeconds, minutes: newMinutes };
  //       });
  //     }, 1000);
  //   }
  //   return () => clearInterval(interval);
  // }, [timerRunning]);

  const handleCardClick = (id, character) => {
    if (!timerRunning && userClicks === 0) {
      startTimer();
    }

    setUserClicks((userClicks) => userClicks + 1);

    if (flippedCards.length >= 2) {
      return;
    }

    // setTimerRunning(true);
    // setUserClicks(userClicks => userClicks + 1);

    // Check if the card is already flipped
    if (flippedCards.find((card) => card[1] === id)) {
      return;
    }

    const newFlippedCards = [...flippedCards, [character, id]];

    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const match = newFlippedCards[0][0] === newFlippedCards[1][0];
      if (match) {
        setMatchedCards((prevMatched) => [...prevMatched, character]);
        setTimeout(() => {
          setFlippedCards([]);
          setScore((score) => score + 10);
          // setMatchCount((matchCount) => matchCount + 1);
        }, 700);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
          setScore((score) => (score > 0 ? score - 1 : 0));
        }, 700);
      }
    }
  };

  console.log("matchedCards", matchedCards);

  {
    matchedCards.length === 8 && console.log("You win!");
  }

  return (
    <div className={gridClass}>
      {showWinMessage && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2, // Ensures the message appears above other elements
            // Add any additional styling you need here
          }}
        >
          <h1
            style={{
              color: "white",
            }}
          >
            You win!
          </h1>
        </div>
      )}
      {/* <div>
        Timer: {timer.minutes} mins {timer.seconds} secs
      </div> */}
      {[...Array(gridSize)].map((_, index) => (
        <GameCard
          key={index}
          id={`${level}-${index}`}
          character={shuffledCharacters[index]}
          handleCardClick={() =>
            handleCardClick(`${level}-${index}`, shuffledCharacters[index])
          }
          flipped={flippedCards.some((card) => card[1] === `${level}-${index}`)}
          matched={matchedCards.includes(`${shuffledCharacters[index]}`)}
        />
      ))}
    </div>
  );
};

export default GameGrid;
