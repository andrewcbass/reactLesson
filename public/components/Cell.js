import React from "react";

class Cell extends React.Component {
  handleClick() {
    this.props.recordGuess(this.props.id, this.active());
  }
  active() {
    return this.props.randomCells.indexOf(this.props.id) >= 0;
  }
  correct() {
    return this.props.correctGuesses.indexOf(this.props.id) >= 0;
  }
  incorrect() {
    return this.props.incorrectGuesses.indexOf(this.props.id) >= 0;
  }
  render() {
    let className = "cell";
    if (this.active()) {
      className += " active";
    }
    if (this.correct()) {
      className += " correct";
    }
    if (this.incorrect()) {
      className += " incorrect";
    }
    return (
      <span
        className={className}
        onClick={this.handleClick.bind(this)}>
      </span>
    );
  }
}

export default Cell;
