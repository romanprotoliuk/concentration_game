import React, { createContext, useState } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [menu, setMenu] = useState(true);
  const [level, setLevel] = useState("");
  const [score, setScore] = useState(0);
  const [matchCount, setMatchCount] = useState(0);
  const [userClicks, setUserClicks] = useState(0);
  const [timer, setTimer] = useState({ seconds: 0, minutes: 0 });
  const [timerRunning, setTimerRunning] = useState(false);

  const startTimer = () => {
    setTimerRunning(true);
  };

  const stopTimer = () => {
    setTimerRunning(false);
  };

  const resetTimer = () => {
    setTimer({ seconds: 0, minutes: 0 });
    setTimerRunning(false);
  };

  const handleEndGame = () => {
    stopTimer();
    setMenu(true);
  };

  const handleMenuClick = () => {
    setMenu(!menu);
    setScore(0);
  };

  return (
    <GameContext.Provider
      value={{
        menu,
        setMenu,
        level,
        setLevel,
        score,
        setScore,
        matchCount,
        setMatchCount,
        userClicks,
        setUserClicks,
        timer,
        setTimer,
        timerRunning,
        setTimerRunning,
        startTimer,
        stopTimer,
        resetTimer,
        handleEndGame,
        handleMenuClick,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
