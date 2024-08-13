import { useState } from "react";
import "./tac.css";
import { Board } from "./Board";

export default function Game() {
  //   const obj: { a: number; b: number | undefined } = {
  //     a: 1,
  //     b: 2,
  //   };
  //   if(obj.b){
  //     obj.b.toString()
  //   }
  // const b= obj.b?.toString()
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  }
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <div key={move}>
        <div onClick={() => jumpTo(move)}>
          {move + 1}.{description}
        </div>
      </div>
    );
  });
  return (
    <div className="game" style={{ display: "flex" }}>
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <div>{moves}</div>
      </div>
    </div>
  );
}
