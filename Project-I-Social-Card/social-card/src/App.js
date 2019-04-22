import React from 'react';
import './App.scss';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';

const App = () => {
  return (
    <div className="App">
      <HeaderContainer />
      <CardContainer link='https://reactjs.org' image='https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png'>
        <p>
          React makes it painless to create interactive UIs. Design simple views for each state in your application.
        </p>
      </CardContainer>
      <Footer strong='Title' />
    </div>
  );
};

export default App;
