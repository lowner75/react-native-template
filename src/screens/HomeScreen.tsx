// src/screens/HomeScreen.tsx

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScreenWrapper } from '../components/ScreenWrapper';
import { ThemedText } from '../components/ThemedText';
import { ThemedView } from '../components/ThemedView';
import { useAuth } from '../context/AuthContext';

export default function HomeScreen() {
  const { user, setUser } = useAuth();
  const insets = useSafeAreaInsets();

  return (
    <ScreenWrapper style={{ paddingTop: insets.top + 36 }}>

      <ThemedView style={{ marginBottom: 0 }}>
        <ThemedText type="title">Home Screen</ThemedText>
      </ThemedView>

      <ThemedView>
        <ThemedText>Hi {user?.givenName ?? 'Guest'}, welcome to the React Native Template app.
          {"\n\n"}
          A production-ready React Native template using Expo Dev Client, TypeScript, and EAS — no Expo Go, full native module support, predictable builds, and a clean foundation for real apps.</ThemedText>
      </ThemedView>

    </ScreenWrapper>
  );
}