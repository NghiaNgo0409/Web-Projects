import { useState } from "react";

function Square({ value, onSquareClicked }) {
    return (
        <button className="square" onClick={onSquareClicked}>
            {value}
        </button>
    );
}

export default function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquare] = useState(Array(9).fill(null));

    function handleClick(i) {
        const nextSquares = squares.slice();

        if (nextSquares[i]) return;

        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        setSquare(nextSquares);
        setXIsNext(!xIsNext);
    }

    return (
        <>
            <div className="board-row">
                <Square
                    value={squares[0]}
                    onSquareClicked={() => handleClick(0)}
                ></Square>
                <Square
                    value={squares[1]}
                    onSquareClicked={() => handleClick(1)}
                ></Square>
                <Square
                    value={squares[2]}
                    onSquareClicked={() => handleClick(2)}
                ></Square>
            </div>

            <div className="board-row">
                <Square
                    value={squares[3]}
                    onSquareClicked={() => handleClick(3)}
                ></Square>
                <Square
                    value={squares[4]}
                    onSquareClicked={() => handleClick(4)}
                ></Square>
                <Square
                    value={squares[5]}
                    onSquareClicked={() => handleClick(5)}
                ></Square>
            </div>

            <div className="board-row">
                <Square
                    value={squares[6]}
                    onSquareClicked={() => handleClick(6)}
                ></Square>
                <Square
                    value={squares[7]}
                    onSquareClicked={() => handleClick(7)}
                ></Square>
                <Square
                    value={squares[8]}
                    onSquareClicked={() => handleClick(8)}
                ></Square>
            </div>
        </>
    );
}
