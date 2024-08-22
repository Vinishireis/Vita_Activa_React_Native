import React, { useEffect } from 'react';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';

import InitialScreen from './app/screens/InitialScreen'; 
import LoginScreen from './app/screens/LoginScreen.jsx';
import SignupScreen from './app/screens/SignupScreen.jsx';
import ChangePasswordScreen from './app/screens/ChangePasswordScreen';

const Stack = createNativeStackNavigator();

// Impede a splash screen de ocultar automaticamente
SplashScreen.preventAutoHideAsync();

function App() {
  useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 3000); // 3 segundos
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Initial">
        <Stack.Screen name="Initial" component={InitialScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const appName = 'Vita_Activa';
AppRegistry.registerComponent(appName, () => App);

export default App;