import { Component } from 'react'
import './Gallery.css';

class Gallery extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: null,
      };
    }
  
    render() {
      return (
        <div className="gallery">
            Gallery
        </div>

      );
    }
  }

export default Gallery;