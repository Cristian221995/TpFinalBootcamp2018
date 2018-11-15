import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import nav from './navReducer';
import TimelineReducer from '../reducers/timelineReducer'
import SearchReducer from '../reducers/searchReducer'

const AppReducer = combineReducers({  //contains all app's reducers
  nav,
  TimelineReducer,
  SearchReducer,
});

export default AppReducer;