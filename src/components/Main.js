import React from 'react';
import {Switch, Route} from 'react-router-dom';

import About from './About';
import Projects from './Projects';
import Contact from './Contact';

class Main extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/Portfolio/' component={About} />
        <Route path='/Portfolio/projects' component={Projects} />
        <Route path='/Portfolio/contact' component={Contact} />
      </Switch>
    );
  }
}

export default Main;
