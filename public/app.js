import React from "react";
import ReactDOM from "react-dom";

import List from "./components/List";
import Book from "./components/Book";
import Form from "./components/Form";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { id: 1, name: "Learn React", price: 2999 },
        { id: 2, name: "Learn Flux"},
        { id: 3, name: "Learn GraphQL", price: 0 },
        { id: 4, name: "Learn Relay", price: 4999 }
      ],
    };
    this.addItem = this.addItem.bind(this);
  }
  addItem(newBook) {
    const currentItems = this.state.items;
    this.setState({
      items: currentItems.concat(newBook)
    });
  }
  render() {
    return (
      <div>
        <List items={this.state.items} component={Book} />
        <Form addItem={this.addItem}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("react")
);
