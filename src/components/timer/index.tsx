import { useEffect } from "react";

type Props = {
  timeLeft: number;
  setTimeLeft: (value: number) => void;
  startGame: boolean;
  setStartGame: (value: boolean) => void;
};

export default function Timer({
  timeLeft,
  setTimeLeft,
  startGame,
  setStartGame,
}: Props) {
  useEffect(() => {
    if (startGame && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setStartGame(false);
    }

  }, [setStartGame, setTimeLeft, startGame, timeLeft]);
  return (
    <div>
      <div>Time Left: {timeLeft} seconds</div>
    </div>
  );
}
