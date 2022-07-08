import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  useColorScheme,
  StyleSheet,
} from 'react-native';
import Theme from '../styles/theme';

interface IProps {
  children: React.ReactNode;
}

const AppLayout = ({children}: IProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Theme.colors.black : Theme.colors.white,
  };

  return (
    <SafeAreaView
      style={
        isDarkMode ? styles.safeAreaView.black : styles.safeAreaView.white
      }>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppLayout;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    black: {
      flex: 1,
      backgroundColor: Theme.colors.black,
    },
    white: {
      flex: 1,
      backgroundColor: Theme.colors.white,
    },
  },
});
