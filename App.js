import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Call, Calling, Contact, IncomingCall, SignIn } from './src/screens';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Contact' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Contact" component={Contact} options={{headerShown: true}} />
        <Stack.Screen name="Call" component={Call} />
        <Stack.Screen name="Calling" component={Calling} />
        <Stack.Screen name="IncomingCall" component={IncomingCall} />
        <Stack.Screen name='SignIn' component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}