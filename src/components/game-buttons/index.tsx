type Props = {
  startGame: boolean;
  toggleGame: () => void;
};

export default function GameButtons({
  startGame,
  toggleGame
}: Props) {
  return (
    <div className="flex items-center gap-5">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={toggleGame}
      >
        {startGame ? "Pause":"Start"}
      </button>
      
    </div>
  );
}
