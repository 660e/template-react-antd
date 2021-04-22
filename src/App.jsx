// import { Component } from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';

import LayoutComponent from './layout';
import LoginComponent from './login';

// class App extends Component {
//   loggedIn = () => {
//     return !!sessionStorage.getItem('token');
//   };
//   render() {
//     return (
//       <Router>
//         <Route path="/" exact>
//           <Redirect to={this.loggedIn() ? '/demo' : '/login'} />
//         </Route>
//         <Route path="/demo" component={LayoutComponent}></Route>
//         <Route path="/login" component={LoginComponent}></Route>
//       </Router>
//     );
//   }
// }

function App() {
  const loggedIn = () => {
    return !!sessionStorage.getItem('token');
  };
  return (
    <Router>
      <Route path="/" exact>
        <Redirect to={loggedIn() ? '/demo' : '/login'} />
      </Route>
      <Route path="/demo" component={LayoutComponent}></Route>
      <Route path="/login" component={LoginComponent}></Route>
    </Router>
  );
}

export default App;
