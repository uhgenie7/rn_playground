import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';
import {RootStackParamList} from '../types/navigation';
import LogIn from '~/screens/login';

const Stack = createNativeStackNavigator<RootStackParamList>();

function SignUp() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen2</Text>
    </View>
  );
}

const RootStack = () => {
  const isLogInSuccess = true;
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {isLogInSuccess ? (
          <Stack.Screen name="Login" component={LogIn} />
        ) : (
          <Stack.Screen name="SignUp" component={SignUp} />
        )}
      </Stack.Navigator>
    </>
  );
};

export default RootStack;
