import React from "react";
import ReactDOM from "react-dom";

import OneBook from "./components/OneBook";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [
        { id: 1, name: "Learn React", price: 2999 },
        { id: 2, name: "Learn Flux"},
        { id: 3, name: "Learn GraphQL", price: 0 },
        { id: 4, name: "Learn Relay", price: 4999 }
      ],
      currentBookIndex: 0
    };
  }
  next() {
    this.setState({currentBookIndex: this.state.currentBookIndex + 1});
  }
  isLastBook() {
    return this.state.books.length === this.state.currentBookIndex + 1;
  }
  render() {
    return (
      <div>
        <OneBook {...this.state.books[this.state.currentBookIndex]} />
        <button onClick={this.next.bind(this)} disabled={this.isLastBook()}>
          Next
        </button>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("react")
);
