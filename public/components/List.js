import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { id: 1, name: "Learn React", price: 2999 },
        { id: 2, name: "Learn Flux", price: 1999 },
        { id: 3, name: "Learn GraphQL", price: 3999 },
        { id: 4, name: "Learn Relay", price: 4999 }
      ]
    };
  }

  render() {
    const Component = this.props.component;
    return (
      <div>
        <ul>
        {this.state.items.map(item => <Component key={item.id} {...item} />)}
        </ul>
        <input ref={(input) => this.userInput = input} />

      </div>
    );
  }
};

export default List;
