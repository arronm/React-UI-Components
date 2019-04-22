import React, { Component } from 'react';
import './Header.scss';

class ImageThumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      image: props.image,
     }
  }
  render() { 
    return (
      <div className='thumbnail'>
        <img src={this.state.image} />
      </div>
     );
  }
}
 
export default ImageThumbnail;
