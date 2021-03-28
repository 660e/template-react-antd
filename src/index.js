import ReactDOM from 'react-dom';
import App from './App.jsx';

import { Provider } from 'react-redux';
import store from './store';

// mock
import './mock';

import 'antd/dist/antd.css';
import './styles/index.scss';

console.log(store);
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
