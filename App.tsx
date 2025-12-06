// App.tsx

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabsNavigator from './src/navigation/BottomTabsNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}