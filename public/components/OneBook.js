import React from "react";
import { get } from "jquery";

class OneBook extends React.Component {
  constructor(props) {
    super(props);

    this.state = { description: ""};
  }
  componentWillMount() {
    console.log("Will Mount");
  }
  componentDidMount() {
    console.log("Did Mount");
    //get("/desc.txt").done(desc => this.setState({description: desc}));
  }
  componentWillUnmount() {
    console.log("Will unmount");
  }
  shouldComponentUpdate() {
    console.log("should update");
    return true;
  }
  componentDidUpdate() {
    console.log("Did update");
  }
  priceDisplay() {
    const { price } = this.props;
    if (price !== undefined) {
      return (
        <div>
          {price === 0 ? "FREE" :  price/100}
        </div>
      );
    }
  }
  descriptionDisplay() {
    const { description } = this.state;
    if (description !== undefined) {
      return (
        <em>{description}</em>
      );
    }
  }
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        {this.descriptionDisplay()}
        {this.priceDisplay()}
      </div>
    )
  }
}

export default OneBook;
