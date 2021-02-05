import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers';

const store = createStore(
  reducer,
  compose(applyMiddleware(thunk),
    (typeof window === 'object')
    /* eslint-disable no-underscore-dangle */
    && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
      /* eslint-disable no-underscore-dangle */
      ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f),
);

export default store;
