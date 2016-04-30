import React from "react";
import Book from "./Book";

class List extends React.Component {
  render() {
    const Component = this.props.component;
    return (
      <div>
        <ul>
          {this.props.items.map(item =>
            <Book key={item.id} {...item} removeItem={this.props.removeItem} />)}
        </ul>
      </div>
    );
  }
};

export default List;
