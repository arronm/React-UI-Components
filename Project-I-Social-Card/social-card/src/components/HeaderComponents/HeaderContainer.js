import React, { Component } from 'react';
import './Header.scss';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';

// Will import 

class HeaderContainer extends Component {
  state = {};
  render() {
    return (
      <div className='HeaderContainer'>
        <ImageThumbnail image='https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png' />
        <HeaderContent title='Lambda School' handle='@LambdaSchool'>
          <p>
            Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!
          </p>
        </HeaderContent>
      </div>
    );
  }
}

export default HeaderContainer;
