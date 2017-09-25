import React from 'react';
import {Switch, Route} from 'react-router-dom';

import About from './About';
import Projects from './Projects';
import Contact from './Contact';

class Main extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
      </Switch>
    );
  }
}

export default Main;
