import TicTacToe from "../components/TicTacToe";

function TicTacToePage() {
  return (
    <div className="w-full flex flex-col flex-nowrap items-center gap-4 text-white">
      <h1 className="inline-block text-6xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-700 via-yellow-300 to-red-700">
        Tic Tac Toe
      </h1>
      <TicTacToe />
    </div>
  );
}

export default TicTacToePage;
