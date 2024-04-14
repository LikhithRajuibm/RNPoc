import React from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './store/store';
import AppChild from './AppChild';

const App = (): React.JSX.Element => {
  return (
    <Provider store={store}>
      <AppChild />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
