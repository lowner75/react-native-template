// src/screens/LoginScreen.tsx

import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { useGoogleSignIn } from '../hooks/useGoogleSignIn';
import { ScreenWrapper } from '../components/ScreenWrapper';
import { ThemedView } from '../components/ThemedView';
import { useAppTheme } from '../hooks/useAppTheme';
import { ThemedButton } from '../components/ThemedButton';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
  const { colors, theme } = useAppTheme();
  const { user, signIn } = useGoogleSignIn();

  const logoDark = require('../../assets/adaptive-icon.png');
  const logoLight = require('../../assets/adaptive-icon-light.png');

  return (
    <ScreenWrapper>
      <ThemedView style={styles.loginContainer}>

        <Image
          source={theme === 'dark' ? logoDark : logoLight}
          style={styles.logo}
          resizeMode="contain"
        />

        <ThemedButton
          title="Sign In with Google"
          icon={<Ionicons name="logo-google" size={20} color={colors.text} />}
          type="primary"
          onPress={signIn}
          style={{ width: '100%', paddingVertical: 16 }}
        />
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
    width: 150,
    height: 150,
    marginBottom: 32,
  },
});