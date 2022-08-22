import { StyleSheet } from 'react-native';
import App from './src/App';
import { Provider } from 'react-redux';
import storeConfig from './src/redux/store/index';

export default function Root() {
  return (
    <Provider store={storeConfig.store}>
      <App />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
