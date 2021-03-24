import { Component } from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';

import LoginComponent from './login';
import LayoutComponent from './layout';

class App extends Component {
  loggedIn = () => {
    return !!sessionStorage.getItem('token');
  };

  render() {
    return (
      <Router>
        <Route path="/" exact>
          <Redirect to={this.loggedIn() ? '/demo' : '/login'} />
        </Route>
        <Route path="/demo" component={LayoutComponent}></Route>
        <Route path="/login" component={LoginComponent}></Route>
      </Router>
    );
  }
}

export default App;
