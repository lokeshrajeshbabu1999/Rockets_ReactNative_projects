import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HistoryScreen from './src/screens/HistoryScreen';
import HomeScreen from './src/screens/HomeScreen';
import LaunchScreen from './src/screens/LaunchScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import RocketScreen from './src/screens/RocketScreen';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#d8bfd8',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: '#000',
      }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome to Space X' }}
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