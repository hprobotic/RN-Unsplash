import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { App } from './components';
import store from './redux/store';

const unsplash_grid = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default unsplash_grid;

AppRegistry.registerComponent('unsplash_grid', () => unsplash_grid);
