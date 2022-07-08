import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';
import {RootStackParamList} from '../types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

function Login() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen1</Text>
    </View>
  );
}

function SignUp() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen2</Text>
    </View>
  );
}

const RootStack = () => {
  const isLogInSuccess = false;
  return (
    <>
      <Stack.Navigator>
        {isLogInSuccess ? (
          <Stack.Screen name="Login" component={Login} />
        ) : (
          <Stack.Screen name="SignUp" component={SignUp} />
        )}
      </Stack.Navigator>
    </>
  );
};

export default RootStack;
