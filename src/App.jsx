import { Component } from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import LayoutComponent from './layout';

class App extends Component {
  render() {
    return (
      <Router>
        <Redirect to="/demo" />
        <Route path="/demo" component={LayoutComponent}></Route>
      </Router>
    );
  }
}

export default App;
