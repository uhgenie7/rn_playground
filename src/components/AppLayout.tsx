import React from 'react';
import {SafeAreaView, ScrollView, useColorScheme} from 'react-native';
import Theme from '../styles/theme';

interface IProps {
  children: React.ReactNode;
  title: string;
}

const AppLayout = ({children}: IProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Theme.colors.black : Theme.colors.white,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppLayout;
