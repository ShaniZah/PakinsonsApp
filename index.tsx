import React from 'react';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppConfig from './app.json';

// Import Screens
import { LoginScreenFunc } from '@/src/screens/loginScreen/LoginScreen';
import { HomeScreenFunc } from '@/src/screens/homeScreen/HomeScreen';

// Create the Stack Navigator
const Stack = createNativeStackNavigator();

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreenFunc} />
        <Stack.Screen name="Home" component={HomeScreenFunc} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

AppRegistry.registerComponent(AppConfig.expo.name, () => App);