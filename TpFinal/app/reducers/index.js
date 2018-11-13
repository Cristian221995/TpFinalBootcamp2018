import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import nav from './navReducer';
import TimelineReducer from '../reducers/timelineReducer'


const AppReducer = combineReducers({  //contains all app's reducers
  nav,
  // dataReducer,
  TimelineReducer,
});

export default AppReducer;