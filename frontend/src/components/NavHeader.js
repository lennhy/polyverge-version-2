import { Component } from 'react'
import { Link } from "react-router-dom";

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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/cart">Cart</Link></li>
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