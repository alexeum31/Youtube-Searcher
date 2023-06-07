import React from "react";
import "bootstrap/dist/css/bootstrap.css";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      amount: 0,
    };
    this.handleRangeChange = this.handleRangeChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }
  handleRangeChange = (event) => {
    this.setState({ amount: event.target.value });
  };
  handleTextInput = (event) => {
    this.setState({ input: event.target.value });

  }
  handleClick = (event) => {
    event.preventDefault(); // Stops page from reloading
    console.log(this.state.amount, this.state.input)
  }
  

  render() {
    return (
      <div>
        <form id="myForm">
          <h3>Enter Any Video Topic </h3>
          <textarea
            className="form-control"
            type="text"
            placeholder="Text here"
            onChange={this.handleTextInput}
          ></textarea>
          <br></br>

          <label htmlFor="myRange">Select Amount of Videos: </label>
          <input
            type="range"
            id="myRange"
            min="0"
            max="15"
            step="1"
            onChange={this.handleRangeChange}
          />
          <h3>{this.state.amount}</h3>
          <br></br>
          <button className="btn btn-primary" type="submit" onClick={this.handleClick}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default MyForm;
