
import { NavigationActions } from 'react-navigation';
import { RootNavigator } from '../components/AppNavigator';
import { NAV_TWEET_SCREEN } from "../actions/"

const firstAction = RootNavigator.router.getActionForPathAndParams('Home');
const tempNavState = RootNavigator.router.getStateForAction(firstAction);
const initialNavState = RootNavigator.router.getStateForAction(
  tempNavState
);

//function NavReducer(state = initialNavState, action) {
const NavReducer = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case 'Home':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'home' }),
        state
      );
      break;
    case 'NAV_TWEET_SCREEN':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'tweet' }),
        state
      );
      break;
    case 'Search':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Search' }),
        state
      );
      break;
    case 'Config':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Config' }),
        state
      );
      break;
    default:
      nextState = RootNavigator.router.getStateForAction(action, state);
      break;
  }
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}


export default NavReducer