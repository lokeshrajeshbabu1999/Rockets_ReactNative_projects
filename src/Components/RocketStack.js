import { createStackNavigator } from '@react-navigation/stack';
import RocketDetailScreen from '../screens/RocketDetailScreen';
import RocketScreen from '../screens/RocketScreen';

export const RocketStack = createStackNavigator();

export const RocketNavigator = () => {
    return (
        <RocketStack.Navigator
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#fff',
                },
                headerTintColor: '#000',
            }}>
            <RocketStack.Screen
                name="Rocket"
                component={RocketScreen}
            />
            <RocketStack.Screen
                name="RocketDetail"
                component={RocketDetailScreen}
            />
        </RocketStack.Navigator>
    );
};
