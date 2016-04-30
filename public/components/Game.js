import React from "react";

import Cell from "./Cell";
import Row from "./Row";

import { sampleSize, flatten } from "lodash";

class Game extends React.Component {
  constructor(props) {
    super(props);

    let row, r, c;
    this.grid = [];

    for (r = 0; r < this.props.rows; r++) {
      row = [];
      for (c = 0; c < this.props.cols; c++) {
        row.push(`${r}-${c}`);
      }
      this.grid.push(row);
    }

    this.randomCells = sampleSize(flatten(this.grid), 6);


    this.state = {
      correctGuesses: [],
      incorrectGuesses: []
    };
  }
  recordGuess(cellId, correct) {
    let { correctGuesses, incorrectGuesses } = this.state;

    if(correct) {
      correctGuesses.push(cellId);
    } else {
      incorrectGuesses.push(cellId);
    }

    this.setState({ correctGuesses, incorrectGuesses })
  }
  render() {

    return (
      <div className="game">

        {this.grid.map((row,index) => (
          <Row key={index}>
            {row.map(col => <Cell
                            key={col}
                            id={col}
                            recordGuess={this.recordGuess.bind(this)}
                            randomCells={this.randomCells}
                            {...this.state}
                           />)}
          </Row>
        ))}

      </div>
    );
  }
}

export default Game;
