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
import { AlbumesProvider } from './src/contexts/albumes-contexts';
import Album from './src/components/organims/Album';
import { Route, Router } from 'react-router-native';
import Routes from './src/routers/Routes';


const store = createStore(combineReducers(reducers), applyMiddleware(compose(thunk)));



const App = () => {

  return (
    <Provider store={store}>
      <AlbumesProvider>
        <SafeAreaView>
          <Routes />
        </SafeAreaView>
      </AlbumesProvider>
    </Provider>
  );
};



export default App;
