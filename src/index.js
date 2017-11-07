import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//We've created an individual square of the board and it will be a button
class Square extends React.Component {
  constructor(props) {
    super(props); //super needs to be called when defining the constructor of a subclass
    this.state = {
      value: null
    };
  }
  render() {
    return (
      <button className="square" onClick={() => //Arrow function syntax, helps define a function (shorter functions). The function being passed here is as onClick prop
      alert('click')}>
        {this.props.value}
      </button>
    );
  }
}

//This is the board and it calls on the individual buttons, as well as renders them into a grid-like board
class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />; //value is a prop
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
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

//This class includes code that allows us to play a game composed of the board, which is composed of the individual squares
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
