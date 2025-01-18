import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View, Alert} from 'react-native';
import {loginStyle} from './LoginStyles';

export const LoginScreenFunc = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    if (username && password) {
      Alert.alert('Login Successful', `Welcome, ${username}!`);
    } else {
      Alert.alert('Error', 'Please fill in both fields.');
    }
  };

  return (
    <View style={loginStyle.container}>
      <Text style={loginStyle.title}>Login</Text>

      <TextInput
        style={loginStyle.input}
        placeholder="Username"
        placeholderTextColor="#888"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={loginStyle.input}
        placeholder="Password"
        placeholderTextColor="#888"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={loginStyle.button} onPress={handleLogin}>
        <Text style={loginStyle.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={loginStyle.registerButton}>
        <Text style={loginStyle.registerButtonText}>Register</Text>
      </TouchableOpacity>

    </View>
  );
};
