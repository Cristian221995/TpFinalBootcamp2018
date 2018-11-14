import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import AppReducer from './app/reducers';
import { AppNavigator, middleware } from './app/components/AppNavigator';


const store = createStore(AppReducer, applyMiddleware(thunk));

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>    
          <AppNavigator />       
      </Provider>
    );
  }
}

export default App;