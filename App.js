import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// redux states
import { store } from './src/globalState/store';
import { Provider } from 'react-redux';

//Screen components
import Home from './src/components/Home';
import AddPlayers from './src/components/AddPlayers';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name='Home' 
            component={ Home }
          />
          <Stack.Screen 
            name='AddPlayers'
            component={AddPlayers}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}


