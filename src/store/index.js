import { createStore } from 'redux';

const rootReducer = () => {
  return {
    a: 1
  };
};

export default createStore(rootReducer);
