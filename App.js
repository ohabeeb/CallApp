import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Call, Calling, Contact, IncomingCall, SignIn, Splash } from './src/screens';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SignIn' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Contact" component={Contact} options={{headerShown: false}} />
        <Stack.Screen name="Call" component={Call} />
        <Stack.Screen name="Calling" component={Calling} />
        <Stack.Screen name="IncomingCall" component={IncomingCall} />
        <Stack.Screen name='SignIn' component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}