import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation';
import LogIn from '~/screens/login';
import MorningScreen from '~/screens/Intro/MorningScreen';
import AfternoonScreen from '~/screens/Intro/AfternoonScreen';
import DinnerScreen from '~/screens/Intro/DinnerScreen';
import CheckScreen from '~/screens/Intro/CheckScreen';

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
        <Stack.Screen name="AfternoonScreen" component={AfternoonScreen} />
        <Stack.Screen name="DinnerScreen" component={DinnerScreen} />
        <Stack.Screen name="CheckScreen" component={CheckScreen} />
      </Stack.Navigator>
    </>
  );
};

export default RootStack;
