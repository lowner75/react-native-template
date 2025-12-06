// src/screens/SettingsScreen.tsx

import React, { useState, useEffect } from 'react';
import { View, Switch } from 'react-native';
import { ScreenWrapper } from '../components/ScreenWrapper';
import { ThemedText } from '../components/ThemedText';
import { useAppTheme } from '../hooks/useAppTheme';

export default function SettingsScreen() {
  const { theme, colors, setTheme } = useAppTheme();
  const [isDark, setIsDark] = useState(theme === 'dark');

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

      <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
        <ThemedText style={{ flex: 1 }}>{isDark ? 'Dark Mode' : 'Light Mode'}</ThemedText>
        <Switch
          value={isDark}
          onValueChange={handleToggle}
            thumbColor={isDark ? colors.accent : colors.tabIconDefault} // the circle
          trackColor={{ false: colors.tabIconDefault + '33', true: colors.tabIconSelected + '33' }} // the background track
        />
      </View>
    </ScreenWrapper>
  );
}