import { useEffect, useMemo, useState } from "react";
import { ImRadioUnchecked, ImCross } from "react-icons/im";

function TicTacToe() {
  const [turn, setTurn] = useState("X");
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [xWin, setXWin] = useState(0);
  const [oWin, setOWin] = useState(0);
  const [winner, setWinner] = useState(null);
  const [isOver, setIsOver] = useState(false);
  const [reset, setReset] = useState(false);
  useEffect(() => {
    const resp = getWinner(squares);
    if (squares.includes("")) {
      if (resp) {
        setIsOver(true);
        setWinner(resp);
        resp === "X"
          ? setXWin((prev) => prev + 1)
          : setOWin((prev) => prev + 1);
      }
    } else {
      if (resp) {
        setWinner(resp);
        resp === "X"
          ? setXWin((prev) => prev + 1)
          : setOWin((prev) => prev + 1);
      }
      setIsOver(true);
    }
  }, [turn, squares]);
  const getWinner = (patern) => {
    const winningPaterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningPaterns.length; i++) {
      const [x, y, z] = winningPaterns[i];
      if (patern[x] && patern[x] === patern[y] && patern[y] === patern[z]) {
        return patern[x];
      }
    }
    return null;
  };
  const handleClick = (placement) => {
    if (isOver) return;
    setSquares((cpySquares) => {
      cpySquares[placement] = turn;
      return cpySquares;
    });
    switch (turn) {
      case "X":
        setTurn("O");
        break;
      case "O":
        setTurn("X");
        break;
    }
  };
  const handleReset = () => {
    setTurn("X");
    setSquares(Array(9).fill(""));
    setWinner(null);
    setIsOver(false);
    setReset((prev) => !prev);
  };
  const gameTable = (
    <div className="w-full flex flex-col flex-nowrap items-center">
      <div className="flex flex-nowrap items-center justify-center">
        <TicTacToeSquare
          turn={turn}
          isOver={isOver}
          reset={reset}
          onSelect={() => handleClick(0)}
        />
        <TicTacToeSquare
          turn={turn}
          isOver={isOver}
          reset={reset}
          onSelect={() => handleClick(1)}
        />
        <TicTacToeSquare
          turn={turn}
          isOver={isOver}
          reset={reset}
          onSelect={() => handleClick(2)}
        />
      </div>
      <div className="flex flex-nowrap items-center justify-center">
        <TicTacToeSquare
          turn={turn}
          isOver={isOver}
          reset={reset}
          onSelect={() => handleClick(3)}
        />
        <TicTacToeSquare
          turn={turn}
          isOver={isOver}
          reset={reset}
          onSelect={() => handleClick(4)}
        />
        <TicTacToeSquare
          turn={turn}
          isOver={isOver}
          reset={reset}
          onSelect={() => handleClick(5)}
        />
      </div>
      <div className="flex flex-nowrap items-center justify-center">
        <TicTacToeSquare
          turn={turn}
          isOver={isOver}
          reset={reset}
          onSelect={() => handleClick(6)}
        />
        <TicTacToeSquare
          turn={turn}
          isOver={isOver}
          reset={reset}
          onSelect={() => handleClick(7)}
        />
        <TicTacToeSquare
          turn={turn}
          isOver={isOver}
          reset={reset}
          onSelect={() => handleClick(8)}
        />
      </div>
    </div>
  );
  return (
    <div className="w-full flex flex-col flex-nowrap items-center">
      <div className="my-4 flex flex-nowrap items-center justify-evenly gap-8">
        <div className="flex flex-nowrap items-center justify-evenly gap-2">
          <ImCross size={50} color="#BC241E" />
          <p className="text-5xl font-extrabold"> : {xWin} </p>
        </div>
        <div className="flex flex-nowrap items-center justify-evenly gap-2">
          <ImRadioUnchecked size={50} color="#365EC8" />
          <p className="text-5xl font-extrabold"> : {oWin} </p>
        </div>
      </div>
      {gameTable}
      {isOver ? (
        winner ? (
          <div className="my-8 text-2xl font-bold flex items-center gap-2">
            <span>The Winner is </span>
            {winner === "X" ? (
              <ImCross color="#BC241E" />
            ) : (
              <ImRadioUnchecked color="#365EC8" />
            )}
          </div>
        ) : (
          <p className="my-8 text-xl font-bold">
            There is no Winner. Please restart the game.
          </p>
        )
      ) : (
        <div className="my-8 text-2xl font-bold flex items-center gap-2">
          <span>The next turn is </span>
          {turn === "X" ? (
            <ImCross color="#BC241E" />
          ) : (
            <ImRadioUnchecked color="#365EC8" />
          )}
        </div>
      )}
      {isOver ? (
        <button
          className="border rounded-full py-4 px-8 text-2xl font-extrabold bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500"
          onClick={handleReset}
        >
          Restart
        </button>
      ) : null}
    </div>
  );
}
function TicTacToeSquare({ turn, isOver, reset, onSelect }) {
  const [isTaken, setIsTaken] = useState(null);
  useEffect(() => {
    setIsTaken(null);
  }, [reset]);
  const mark = useMemo(() => {
    let response;
    switch (isTaken) {
      case "X":
        response = <ImCross size={60} color="#BC241E" />;
        break;
      case "O":
        response = <ImRadioUnchecked size={70} color="#365EC8" />;
        break;
      case null:
      default:
        response = null;
        break;
    }
    return response;
  }, [isTaken]);
  const handleClick = (turn) => {
    if (isOver) return;
    if (isTaken) return;
    switch (turn) {
      case "X":
        setIsTaken("X");
        onSelect();
        break;
      case "O":
        setIsTaken("O");
        onSelect();
        break;
    }
  };
  return (
    <div
      className="w-28 h-28 bg-black-200 border flex justify-center items-center"
      onClick={() => handleClick(turn)}
    >
      {mark}
    </div>
  );
}
export default TicTacToe;
