import { Component } from 'react'
import './Cart.css';

class Cart extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: null,
      };
    }
  
    render() {
      return (
        <div className="">
          <h1>Cart</h1>
        </div>
 
      );
    }
  }

export default Cart;