import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Teste from './src/screens/teste';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/stacks/MainStacks'
export default function App() {
  return (
    <NavigationContainer>
      <MainStack/>
    </NavigationContainer>
  );
}

