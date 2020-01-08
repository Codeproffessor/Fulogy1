import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Email from '../../components/Email';
import Home from '../Home';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/email' component={Email} />
      </Switch>
    );
  }
}

export default App;