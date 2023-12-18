import { createStackNavigator } from '@react-navigation/stack';
import CrewDetailScreen from '../screens/CrewDetailScreen';
import CrewScreen from '../screens/CrewScreen';

export const CrewStack = createStackNavigator();

export const CrewNavigator = () => {
    return (
        <CrewStack.Navigator>
            <CrewStack.Screen
                name="CrewScreen"
                component={CrewScreen}
                options={{ title: 'CREW' }}
            />
            <CrewStack.Screen
                name="CrewDetailScreen"
                component={CrewDetailScreen}
                options={{ title: 'Crew Details' }}

            />
        </CrewStack.Navigator >
    );
};
