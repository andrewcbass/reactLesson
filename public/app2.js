import React from "react";
import ReactDOM from "react-dom";

import Game from "./components/Game"

class App extends React.Component {

  render() {
    return (
      <div>
        <Game rows={5} cols={5}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("react")
);
