import React from 'react';
import './assets/styles/css/main.css';

import Nav from './components/Nav';
import Main from './components/Main';

class App extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <Nav/>
        <Main/>
      </div>
    );
  }
}

export default App;
