import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation';
import LogIn from '~/screens/login';
import MorningScreen from '~/screens/Intro/MorningScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen name="MorningScreen" component={MorningScreen} />
      </Stack.Navigator>
    </>
  );
};

export default RootStack;
