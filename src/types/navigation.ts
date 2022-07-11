import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  MorningScreen: undefined;
  AfternoonScreen: undefined;
  DinnerScreen: undefined;
  CheckScreen: undefined;
};

export type UserParamList = {};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
