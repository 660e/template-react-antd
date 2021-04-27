// import { Component } from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

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
//           <Redirect to={this.loggedIn() ? '/' : '/login'} />
//         </Route>
//         <Switch>
//           <Route path="/login" component={LoginComponent}></Route>
//           <Route path="/" component={LayoutComponent}></Route>
//         </Switch>
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
        <Redirect to={loggedIn() ? '/' : '/login'} />
      </Route>
      <Switch>
        <Route path="/login" component={LoginComponent}></Route>
        <Route path="/" component={LayoutComponent}></Route>
      </Switch>
    </Router>
  );
}

export default App;
