// src/screens/HomeScreen.tsx

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScreenWrapper } from '../components/ScreenWrapper';
import { ThemedText } from '../components/ThemedText';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScreenWrapper style={{ paddingTop: insets.top + 36 }}>
      <ThemedText type="title">Home Screen</ThemedText>
    </ScreenWrapper>
  );
}