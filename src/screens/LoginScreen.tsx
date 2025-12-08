// src/screens/LoginScreen.tsx

import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { useGoogleSignIn } from '../hooks/useGoogleSignIn';
import { ScreenWrapper } from '../components/ScreenWrapper';
import { ThemedView } from '../components/ThemedView';
import { ThemedText } from '../components/ThemedText';
import { useAppTheme } from '../hooks/useAppTheme';
import { ThemedButton } from '../components/ThemedButton';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
  const { colors } = useAppTheme();
  const { user, signIn } = useGoogleSignIn();

  return (
    <ScreenWrapper>
      <ThemedView style={styles.loginContainer}>
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
  loginContainer: { flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
});