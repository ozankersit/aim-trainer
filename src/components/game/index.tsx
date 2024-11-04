"use client";
import { useState } from "react";
import GameArea from "../game-area";
import Target from "../target";
import Timer from "../timer";

export default function Game() {
  const [point, setPoint] = useState<{ x: number; y: number } | null>(null);
  const [startGame, setStartGame] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(60);

  const generateRandomPoint = () => {
    const newPoint = {
      x: Math.floor(Math.random() * 280),
      y: Math.floor(Math.random() * 280),
    };
    setPoint(newPoint);
  };

  const startGameHandler = () => {
    generateRandomPoint();
    setStartGame(true);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={startGameHandler}
        disabled={startGame}
      >
        Start
      </button>
      <Timer
        timeLeft={timeLeft}
        setTimeLeft={setTimeLeft}
        startGame={startGame}
        setStartGame={setStartGame}
      />
      <GameArea>
        {startGame ? (
          <Target
            xPoint={point?.x}
            yPoint={point?.y}
            generateRandomPoint={generateRandomPoint}
          />
        ) : null}
      </GameArea>
    </div>
  );
}
