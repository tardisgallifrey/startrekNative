import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomePage } from './pages/HomePage';
import { GetStarted } from './pages/GetStarted';
import { CombatPhase } from './pages/CombatPhase';
import { MissionSetup } from './pages/MissionSetup';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="Start" component={GetStarted} />
            <Stack.Screen name="Combat" component={CombatPhase} />
            <Stack.Screen name="MissionSetup" component={MissionSetup} />
          </Stack.Navigator>
        </NavigationContainer>
  );
}

