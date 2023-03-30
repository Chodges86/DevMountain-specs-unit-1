import React, { useState } from "react";
import Square from "./Square";
import "./App.css";

function App() {
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);

  const handleClick = () => {
    setSquares(["", "", "", "", "", "", "", "", ""]);
    setPlayer(true);
  };

  const calculateWinner = (array) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      console.log(a, b, c)
      if (array[a] && array[a] === array[b] && array[a] === array[c]) {
        return `${array[a]} won!`;
      }
    }
    return "Who will win?";
  };

  return (
    <div className="App">
      <div className="container">
        {squares.map((value, index) => {
          return (
            <Square
              key={index}
              squares={squares}
              player={player}
              setSquares={setSquares}
              setPlayer={setPlayer}
              squareValue={value}
              index={index}
            ></Square>
          );
        })}
      </div>
      <button onClick={handleClick}>Reset</button>
      <br></br>
      <span>{calculateWinner(squares)}</span>
    </div>
  );
}

export default App;
