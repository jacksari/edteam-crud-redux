import { combineReducers } from 'redux';
import blogsReducers from './blogsReducers';

export default combineReducers({
  blog: blogsReducers,
});
