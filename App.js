import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './app/screens/LoginScreen';
import NewsScreen from './app/screens/NewsScreen';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={ LoginScreen } options={{ headerShown: false}} />
        <Stack.Screen name='News' component={ NewsScreen } options={{ headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
    //<Text></Text>

  );
}


