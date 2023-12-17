import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HistoryScreen from './src/HistoryScreen';
import HomeScreen from './src/HomeScreen';
import LaunchScreen from './src/LaunchScreen';
import ProfileScreen from './src/ProfileScreen';
import RocketScreen from './src/RocketScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
        <Stack.Screen name="Launch" component={LaunchScreen} />
        <Stack.Screen name="Rockets" component={RocketScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}
export default App

