// src/screens/HomeScreen.tsx
import React from 'react';
import { ScreenWrapper } from '../components/ScreenWrapper';
import { ThemedText } from '../components/ThemedText';

export default function HomeScreen() {
  return (
    <ScreenWrapper>
      <ThemedText type="title">Home Screen</ThemedText>
    </ScreenWrapper>
  );
}