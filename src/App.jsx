import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import { GameProvider } from "./context/GameContext";

const App = () => {
  return (
    <>
      <GameProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </GameProvider>
    </>
  );
};

export default App;
