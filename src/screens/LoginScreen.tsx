// src/screens/LoginScreen.tsx

import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { useGoogleSignIn } from '../hooks/useGoogleSignIn';
import { ScreenWrapper } from '../components/ScreenWrapper';
import { ThemedView } from '../components/ThemedView';
import { ThemedText } from '../components/ThemedText';
import { useAppTheme } from '../hooks/useAppTheme';
import { ThemedButton } from '../components/ThemedButton';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
  const { colors, theme } = useAppTheme();
  const { user, signIn } = useGoogleSignIn();

  const logoDark = require('../../assets/adaptive-icon-cropped.png');
  const logoLight = require('../../assets/adaptive-icon-cropped-light.png');

  return (
    <ScreenWrapper>
      <ThemedView style={styles.loginContainer}>

        <Image
          source={theme === 'dark' ? logoDark : logoLight}
          style={styles.logo}
          resizeMode="contain"
        />

        <ThemedText type="title" style={styles.title}>React Native Template</ThemedText>

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
    width: 100,
    height: 100,
    marginBottom: 48,
  },
  title: {
    marginBottom: 48,
  },
});