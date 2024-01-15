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

  const handleCardClick = (id, character) => {
    console.log(flippedCards);
    console.log("character clicked", character);
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

    console.log("newFlippedCards", newFlippedCards);

    if (newFlippedCards.length === 2) {
      const match = newFlippedCards[0][0] === newFlippedCards[1][0]; // Replace with your match condition
      if (match) {
        setMatchedCards((prevMatched) => [...prevMatched, character]);
        setTimeout(() => {
          console.log("matchedCards", matchedCards);
          setFlippedCards([]);
          // setScore(score => score + 10);
          // setMatchCount(matchCount => matchCount + 1);
        }, 700);
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
