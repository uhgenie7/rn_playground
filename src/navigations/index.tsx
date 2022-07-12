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
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={LogIn}
        />
        <Stack.Screen
          name="MorningScreen"
          component={MorningScreen}
          options={{
            title: '아침',
          }}
        />
        <Stack.Screen
          name="AfternoonScreen"
          component={AfternoonScreen}
          options={{
            title: '오후',
          }}
        />
        <Stack.Screen
          name="DinnerScreen"
          component={DinnerScreen}
          options={{
            title: '저녁',
          }}
        />
        <Stack.Screen
          name="CheckScreen"
          component={CheckScreen}
          options={{
            title: '확인',
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default RootStack;
