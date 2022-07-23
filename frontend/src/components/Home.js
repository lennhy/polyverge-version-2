import { Component } from 'react'
import './Home.css';
import Gallery from "./Gallery";

class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: null,
      };
    }
  
    render() {
      return (
        <div className="">
          <Gallery></Gallery>
        </div>
      );
    }
  }

export default Home;