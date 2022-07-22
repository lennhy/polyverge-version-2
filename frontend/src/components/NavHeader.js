import { Component } from 'react'
import './NavHeader.css';

class NavHeader extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: null,
      };
    }
    render() {
      return (
        <ul className="nav">
          <li>Home</li>
          <li>Art Gallery</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
        // <button
        //   className="square"
        //   onClick={() => this.setState({value: 'X'})}
        // >
        //   {this.state.value}
        // </button>
      );
    }
  }

export default NavHeader;