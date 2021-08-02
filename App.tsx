/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './src/components/screens/HomeScreen';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import AlbumsReducers from './src/components/store/reducers/albums';
import TestRedux from './src/components/TestRedux';
import * as reducers from './src/components/store/reducers'
import thunk from 'redux-thunk';


const store = createStore(combineReducers(reducers), applyMiddleware(compose(thunk)));



const App = () => {

  return (
    <Provider store={store}>
      <SafeAreaView>

        <HomeScreen />
      </SafeAreaView>
    </Provider>
  );
};



export default App;
