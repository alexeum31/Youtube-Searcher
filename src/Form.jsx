import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input:'',
        amount:0
      };
      this.handleChange = this.handleChange.bind(this);
    }
    change() {
      this.setState(state => ({
        visibility: !state.visibility
      }));
    }
    render() {
      // handleRangeChange = (event) => {
      //   amount = event.target.value;
      // };   
   
      return (
        <div>
          <form>
          <h3>Enter Any Video You Want To See</h3>
          <textarea class="form-control" type="text" placeholder="Text here"></textarea>
          <br></br>
          
          <label htmlFor="myRange">Select a value:</label>
      <input
        type="range"
        id="myRange"
        min="0"
        max="100"
        step="1"
        //onChange={handleRangeChange}
      />
          <button class="btn btn-primary" input type="submit">Submit</button>
          </form>
        </div>
      );
    }
   };

   export default Form;
   