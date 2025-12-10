// src/screens/HomeScreen.tsx

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScreenWrapper } from '../components/ScreenWrapper';
import { StyleSheet, Image } from 'react-native';
import { ThemedText } from '../components/ThemedText';
import { ThemedView } from '../components/ThemedView';
import { useAuth } from '../context/AuthContext';
import { useAppTheme } from '../hooks/useAppTheme';

export default function HomeScreen() {
  const { colors, theme } = useAppTheme();
  const { user, setUser } = useAuth();
  const insets = useSafeAreaInsets();

  const logoDark = require('../../assets/adaptive-icon-cropped.png');
  const logoLight = require('../../assets/adaptive-icon-cropped-light.png');

  return (
    <ScreenWrapper style={{ paddingTop: insets.top + 36 }}>

      <ThemedView style={styles.headerRow}>
        <Image
          source={theme === 'dark' ? logoDark : logoLight}
          style={styles.logo}
          resizeMode="contain"
        />
        <ThemedText type="title" style={styles.headerTitle}>
          Home Screen
        </ThemedText>
      </ThemedView>

      <ThemedView>
        <ThemedText>Hi {user?.givenName ?? 'Guest'}, welcome to the React Native Template application.
          {"\n\n"}
          A production-ready React Native template using Expo Dev Client, TypeScript, and EAS — no Expo Go, full native module support, predictable builds, and a clean foundation for real apps.</ThemedText>
      </ThemedView>

    </ScreenWrapper>
  );

}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 45,
    height: 45,
    marginBottom: 32,
    marginRight: 8,
  },
  headerRow: {
    flexDirection: 'row', // side by side
    alignItems: 'center', // vertically center
    marginBottom: 6,
  },
  headerTitle: {
    marginLeft: 12, // spacing between logo and title
  },
});