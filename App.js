import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './app/screens/LoginScreen';
import NewsScreen from './app/screens/NewsScreen';

export default function App() {
  return (
    <View style={{flex:1, }}>
      <NewsScreen></NewsScreen>
    </View>
  );
}


