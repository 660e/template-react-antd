import { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import LayoutComponent from './layout';

class App extends Component {
  render() {
    return (
      <Router>
        <LayoutComponent />
      </Router>
    );
  }
}

export default App;
