import React from "react";
import GameCard from "./GameCard";
import { useState, useEffect } from "react";
import { shuffle } from "../helpers/shuffle";

const GameGrid = ({ level, characters }) => {
  const isEasy = level === "easy";
  const gridSize = isEasy ? 16 : 36;
  const gridClass = isEasy ? "easy-grid" : "grid";

  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [shuffledCharacters, setShuffledCharacters] = useState([]);
  const [score, setScore] = useState(0);
  const [matchCount, setMatchCount] = useState(0);
  const [userClicks, setUserClicks] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    setShuffledCharacters(shuffle(characters));
  }, []);

  const handleCardClick = (id) => {
    console.log(flippedCards);
    if (flippedCards.length >= 2) {
      return;
    }

    // setTimerRunning(true);
    // setUserClicks(userClicks => userClicks + 1);

    const newFlippedCards = [...flippedCards, id];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const match = newFlippedCards[0] === newFlippedCards[1]; // Replace with your match condition
      if (match) {
        setMatchedCards([...matchedCards, ...newFlippedCards]);
        // setScore(score => score + 10);
        // setMatchCount(matchCount => matchCount + 1);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
          // setScore(score => score > 0 ? score - 1 : 0);
        }, 700);
      }
    }
  };

  const cardContents = new Array(gridSize)
    .fill(null)
    .map((_, i) => `Content ${i + 1}`);

  return (
    <div className={gridClass}>
      {[...Array(gridSize)].map((_, index) => (
        <GameCard
          key={index}
          id={`${level}-${index}`}
          content={cardContents[index]}
          character={shuffledCharacters[index]}
          handleCardClick={handleCardClick}
          flipped={flippedCards.includes(`${level}-${index}`)}
          matched={matchedCards.includes(`${level}-${index}`)}
        />
      ))}
    </div>
  );
};

export default GameGrid;
