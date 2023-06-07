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
  }
  handleRangeChange = (event) => {
    this.setState({ amount: event.target.value });
  };

  render() {
    return (
      <div>
        <form>
          <h3>Enter Any Video Topic You Want To See</h3>
          <textarea
            className="form-control"
            type="text"
            placeholder="Text here"
          ></textarea>
          <br></br>

          <label htmlFor="myRange">Select Amount of Videos:</label>
          <input
            type="range"
            id="myRange"
            min="0"
            max="10"
            step="1"
            onChange={this.handleRangeChange}
          />
          <h3>{this.state.amount}</h3>
          <br></br>
          <button className="btn btn-primary" input type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default MyForm;
