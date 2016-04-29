import React from "react";

class Book extends React.Component {
  render() {
    return (
      <li>
        {this.props.id}: {this.props.name} - {this.props.price}
      </li>
    )
  }
}

export default Book;
