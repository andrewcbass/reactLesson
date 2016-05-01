import React from "react";
import ReactDOM from "react-dom";

import Game from "./components/Game"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { gameId: 1, numberOfGuesses: 6 };
  }
  resetGame() {
    this.setState({
      gameId: this.state.gameId + 1,
      numberOfGuesses: this.state.numberOfGuesses + 1
    });
  }
  render() {
    return (
      <div>
        <Game key={this.state.gameId} rows={5} cols={5}
              numberOfGuesses={this.state.numberOfGuesses}
              resetGame={this.resetGame.bind(this)}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("react")
);
