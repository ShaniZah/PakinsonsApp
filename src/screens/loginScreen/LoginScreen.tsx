import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  ActivityIndicator,
} from "react-native";
import { loginStyle } from "./LoginStyles";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/FirebaseConfig";

export const LoginScreenFunc = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAuth = async () => {
    setLoading(true);
    if (email.trim() === "" || password.trim() === "") {
      Alert.alert("Error", "Please fill in both fields.");
      setLoading(false);
      return;
    }

    try {
      if (isRegistering) {
        // Register a new user
        await createUserWithEmailAndPassword(auth, email, password);
        Alert.alert("Success", "Account created for ${email}");
      } else {
        // Log in an existing user
        await signInWithEmailAndPassword(auth, email, password);
        Alert.alert("Welcome", "Logged in as ${email}");
      }
    } catch (error) {
      if (error instanceof Error) Alert.alert("Error", error.message);
      else Alert.alert("Error", "an unexpected error occured");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={loginStyle.container}>
      <Text style={loginStyle.title}>
        {isRegistering ? "Register" : "Login"}
      </Text>

      <TextInput
        style={loginStyle.input}
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={loginStyle.input}
        placeholder="Password"
        placeholderTextColor="#888"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <TouchableOpacity style={loginStyle.button} onPress={handleAuth}>
          <Text style={loginStyle.buttonText}>
            {isRegistering ? "Register" : "Log In"}
          </Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={loginStyle.registerButton}
        onPress={() => setIsRegistering(!isRegistering)}
      >
        <Text style={loginStyle.registerButtonText}>
          {isRegistering
            ? "Already have an account? Log In"
            : "Don’t have an account? Register"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
