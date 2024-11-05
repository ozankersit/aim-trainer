"use client";
import { useState } from "react";
import GameArea from "../game-area";
import Target from "../target";
import Timer from "../timer";
import GameButtons from "../game-buttons";

export default function Game() {
  const [point, setPoint] = useState<{ x: number; y: number } | null>(null);
  const [startGame, setStartGame] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(30);
  const [counter, setCounter] = useState<number>(0);

  const generateRandomPoint = () => {
    const newPoint = {
      x: Math.floor(Math.random() * 280),
      y: Math.floor(Math.random() * 280),
    };
    setPoint(newPoint);
    setCounter(counter + 1);
  };

  const toggleGame = () => {
    if (startGame) {
      setStartGame(false);
    } else {
      setStartGame(true);
    }
    setCounter(0);
    setTimeLeft(30);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <GameButtons startGame={startGame} toggleGame={toggleGame} />
      <Timer
        timeLeft={timeLeft}
        setTimeLeft={setTimeLeft}
        startGame={startGame}
        setStartGame={setStartGame}
      />
      <span>Counter:{counter}</span>
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
