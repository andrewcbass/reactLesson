import React from "react";

class Book extends React.Component {
  priceDisplay() {
    const { price } = this.props;
    if (price !== undefined) {
      return (
        <span>
          &nbsp;-&nbsp;
          {price === 0 ? "FREE" :  price/100}
        </span>
      );
    }
  }
  render() {
    return (
      <li>
        {this.props.id} : {this.props.name}
        
        {this.priceDisplay()}
      </li>
    )
  }
}

export default Book;
