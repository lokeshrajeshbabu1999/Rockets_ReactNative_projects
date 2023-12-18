import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultTheme, NavigationContainer, ThemeProvider } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CrewNavigator } from './src/Components/CrewStack';
import { LaunchNavigator } from './src/Components/LaunchStack';
import { RocketNavigator } from './src/Components/RocketStack';

const Tab = createBottomTabNavigator();

const App = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#98fb98',
    },
  };
  return (
    <ThemeProvider theme={MyTheme}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerTitle: 'SPACE X',
            headerTitleStyle: {
              textAlign: 'center',
              fontSize: 46,
            },
            headerStyle: {
              backgroundColor: MyTheme.colors.primary,
            },
            headerTintColor: '#000',
          }}>
          <Tab.Screen
            name="Rockets"
            component={RocketNavigator}
            options={{
              tabBarLabel: 'Rockets',
              tabBarIcon: ({ color }) => (
                <Icon name="rocket" size={26} color={'blue'} />
              ),
            }}
          />
          <Tab.Screen
            name="LaunchPad"
            component={LaunchNavigator}
            options={{
              tabBarLabel: 'LaunchPad',
              tabBarIcon: ({ color }) => (
                <Icon name="rocket-launch-outline" size={26} color={'blue'} />
              ),
            }}
          />
          <Tab.Screen
            name="Crew"
            component={CrewNavigator}
            options={{
              tabBarLabel: 'Crew',
              tabBarIcon: ({ color }) => (
                <Icon name="account-group-outline" size={26} color={'blue'} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer >
    </ThemeProvider>

  )
}
export default App;