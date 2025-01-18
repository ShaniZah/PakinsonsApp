import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Import your screens
import { HomeScreenFunc } from '@/src/screens/homeScreen/HomeScreen';
import { LoginScreenFunc } from '@/src/screens/loginScreen/LoginScreen';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreenFunc} />
        <Stack.Screen name="Home" component={HomeScreenFunc} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};