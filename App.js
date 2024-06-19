import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './StackNavigator';
import { UserContext } from './UserContext';
import store from './redux/store';
import { Provider } from 'react-redux';

export default function App() {

  const ipAddress = "https://danc3.onrender.com"

  store.dispatch({ type: 'SET_IP', payload: ipAddress })

  return (
    <>
      <UserContext>
        <Provider store={store}>
          <StackNavigator />
        </Provider>
      </UserContext>
    </>
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
