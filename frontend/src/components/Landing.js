import { Component } from 'react'
import './Landing.css';

class Landing extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: null,
      };
    }
  
    render() {
      return (
        <div className="">
          
        </div>
        // <button
        //   className="square"
        //   onClick={() => this.setState({value: 'X'})}
        // >
        //   {this.state.value}
        // </button>
      );
    }
  }

export default Landing;