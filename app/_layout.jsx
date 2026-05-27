import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import 'react-native-reanimated';

// Keep the splash screen visible while we load assets
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Handle asset loading errors
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  // Hide splash screen once everything is loaded
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <ThemeProvider value={DarkTheme}>
      {/* Forces the phone's top status bar text to be crisp white */}
      <StatusBar barStyle="light-content" backgroundColor="#0B111E" />
      
      <Stack screenOptions={{ headerShown: false }}>
        {/* Set your main dashboard map as the default entry point */}
        <Stack.Screen name="map/bystanders" />
        
        {/* Dynamic emergency alert detail popups */}
        <Stack.Screen name="alerts/[id]" />
        
        {/* Navigation routing view */}
        <Stack.Screen name="emergency/bystander-accept" />
      </Stack>
    </ThemeProvider>
  );
}