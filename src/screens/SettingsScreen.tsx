// src/screens/SettingsScreen.tsx

import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useAppTheme } from '../hooks/useAppTheme';
import { ScreenWrapper } from '../components/ScreenWrapper';
import { ThemedView } from '../components/ThemedView';
import { ThemedText } from '../components/ThemedText';
import { ThemedButton } from '../components/ThemedButton';
import { Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen() {
  const { theme, colors, setTheme } = useAppTheme();
  const [isDark, setIsDark] = useState(theme === 'dark');
  const { user, setUser } = useAuth();

  // Keep local switch state in sync with global theme
  useEffect(() => {
    setIsDark(theme === 'dark');
  }, [theme]);

  const handleToggle = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    setTheme(newTheme); // persists to AsyncStorage via your hook
  };

  return (
    <ScreenWrapper>
      <ThemedText type="defaultSemiBold">Your Profile Settings</ThemedText>

      <ThemedView style={{ marginTop: 20, borderBottomWidth: 0.5, borderBottomColor: colors.border, paddingBottom: 10 }}>
        <ThemedText type="label">Full Name:</ThemedText>
        <ThemedText style={{ marginTop: 5 }}>{user?.name ?? 'Not Signed In'}</ThemedText>
      </ThemedView>

      <ThemedView style={{ marginTop: 30, borderBottomWidth: 0.5, borderBottomColor: colors.border, paddingBottom: 10 }}>
        <ThemedText type="label">Email Address:</ThemedText>
        <ThemedText style={{ marginTop: 5 }}>{user?.email ?? 'Not Signed In'}</ThemedText>
      </ThemedView>

      <ThemedView style={{ marginTop: 30 }}>
        <ThemedText type="label">Theme:</ThemedText>
      </ThemedView>

      <ThemedView style={{ marginTop: 5, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: colors.border, paddingBottom: 10 }}>
          <ThemedText style={{ flex: 1 }}>{isDark ? 'Dark Mode' : 'Light Mode'}</ThemedText>
          <Switch
            value={isDark}
            onValueChange={handleToggle}
              thumbColor={isDark ? colors.accent : colors.tabIconDefault} // the circle
            trackColor={{ false: colors.tabIconDefault + '33', true: colors.tabIconSelected + '33' }} // the background track
          />
        </ThemedView>

      <ThemedView style={{ marginTop: 30 }}>
        <ThemedButton
          title="Sign Out"
          icon={<Ionicons name="log-out-outline" size={20} color={colors.text} />}
          type="accent"
          onPress={() => setUser(null)}
        />
      </ThemedView>

    </ScreenWrapper>
  );
}