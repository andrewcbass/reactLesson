import React from "react";

class OneBook extends React.Component {
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
      <div>
        <h3>{this.props.name}</h3>

        {this.priceDisplay()}
      </div>
    )
  }
}

export default OneBook;
