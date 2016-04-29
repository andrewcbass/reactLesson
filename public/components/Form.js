import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: ""
    }
  }
  handleChange(se) {
    this.setState({ userInput: se.target.value });
  }
  handleClick() {
    const newBook = { id: Date.now(), name: this.state.userInput };
    this.props.addItem(newBook);
    this.setState({userInput: ""});
  }
  render() {
    return (
      <div>
        <input value={this.state.userInput}
               onChange={this.handleChange.bind(this)} />
        <button onClick={this.handleClick.bind(this)}>Add</button>
      </div>
    )
  }
}

export default Form;
