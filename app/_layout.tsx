import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import 'react-native-reanimated';
import * as NavigationBar from 'expo-navigation-bar'

import { useColorScheme } from '@/hooks/use-color-scheme';
import { useEffect } from 'react';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("#A763D7");
    NavigationBar.setStyle("dark")
  }, [colorScheme])
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name='index' />
        <Stack.Screen name='[activityId]' />
      </Stack>
    </ThemeProvider>
  );
}
