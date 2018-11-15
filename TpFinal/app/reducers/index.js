import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import NavReducer from './navReducer';
import nav from './navReducer';
import TimelineReducer from '../reducers/timelineReducer';
import SearchReducer from '../reducers/searchReducer';
import ConfigReducer from '../reducers/configReducer';


const AppReducer = combineReducers({  //contains all app's reducers
  nav,
  NavReducer,
  TimelineReducer,
  SearchReducer,
  ConfigReducer,
});

export default AppReducer;