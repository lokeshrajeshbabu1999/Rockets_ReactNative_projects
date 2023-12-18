import { createStackNavigator } from '@react-navigation/stack';
import LaunchPadDetail from '../screens/LaunchPadDetail';
import LaunchPadScreen from '../screens/LaunchPadScreen';

export const LaunchStack = createStackNavigator();

export const LaunchNavigator = () => {
    return (
        <LaunchStack.Navigator
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#fff',
                },
                headerTintColor: '#000',
            }}>
            <LaunchStack.Screen
                name="LaunchPad"
                component={LaunchPadScreen}
            />
            <LaunchStack.Screen
                name="LaunchPadDetail"
                component={LaunchPadDetail} />
        </LaunchStack.Navigator>
    );
};
