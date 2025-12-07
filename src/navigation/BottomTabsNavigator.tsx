// src/navigation/BottomTabsNavigator.tsx

// Dependencies ...
import React from 'react';
import { Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useAppTheme } from '../hooks/useAppTheme';

import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import SettingsScreen from '../screens/SettingsScreen';

// Tab param list for TypeScript
export type TabParamList = {
  Home: undefined;
  Explore: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export default function BottomTabsNavigator() {
  const { colors } = useAppTheme();
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: colors.headerBackground },
        headerTintColor: colors.text,
        headerTitleAlign: 'left',
        headerTitleStyle: {
          paddingLeft: 4,
        },
        tabBarStyle: {
          height: insets.bottom + 64,
          paddingTop: 6,
          paddingBottom: insets.bottom,
          borderTopWidth: 0,
          backgroundColor: colors.tabBarBackground,
        },
        tabBarActiveTintColor: colors.tabIconSelected,
        tabBarInactiveTintColor: colors.tabIconDefault,
        tabBarIcon: ({ color, size, focused }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home';

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Explore':
              iconName = focused ? 'search' : 'search-outline';
              break;
            case 'Settings':
              iconName = focused ? 'settings' : 'settings-outline';
              break;
          }

          return <Ionicons name={iconName} size={20} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
          <Pressable
            onPress={() => navigation.goBack()}
            style={{ paddingRight: 8, paddingVertical: 8 }}
          >
            <Ionicons
              name="chevron-back"
              size={20}
              color={colors.text}
              style={{ marginTop: 2, marginLeft: 12 }}
            />
          </Pressable>
          ),
        })}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
          <Pressable
            onPress={() => navigation.goBack()}
            style={{ paddingRight: 8, paddingVertical: 8 }}
          >
            <Ionicons
              name="chevron-back"
              size={20}
              color={colors.text}
              style={{ marginTop: 2, marginLeft: 12 }}
            />
          </Pressable>
          ),
        })}
      />
    </Tab.Navigator>
  );
}