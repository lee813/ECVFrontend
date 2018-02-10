import React, { Component } from 'react';
import './Board.css'


const Square = ({value, onClick}) => (
  <button className="square" onClick={onClick} >
    {value}
  </button>
);

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      stepNumber: 0,
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
    };
  }

  calculateWinner = (squares) => {
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
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  handleClick = (i) => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    const currentState = this.state
    this.setState({
      ...currentState,
      squares,
      xIsNext: !currentState.xIsNext,
      history: history.concat(
        [
          {
            squares,
          }
        ]
      ),
      stepNumber: history.length,
    });

  }
  jumpTo(step) {
    const history = this.state.history.slice(0, step + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) ? false : true,
      squares,
    });
  }
  renderSquare(i) {
    return <Square value={this.state.squares[i]}
      onClick={() =>this.handleClick(i)}/>
  }
  render() {
    const winner = this.calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    const moves = this.state.history.map((step, move) => {
      const desc = move ?
        'Move #' + move :
        'Game start';
      return (
        <li>
          <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
        </li>
      );
    });

    return (
      <div>
        <div>{status}</div>
        <div>{moves}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
