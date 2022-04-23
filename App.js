import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomePage } from './HomePage';
import { GetStarted } from './GetStarted';
import { CombatPhase } from './CombatPhase';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="Start" component={GetStarted} />
            <Stack.Screen name="Combat" component={CombatPhase} />
          </Stack.Navigator>
        </NavigationContainer>
  );
}

