import React from 'react';
import LottieView from 'lottie-react-native';

const MainLogo = ({style}) => {
  return (
    <LottieView
      style={style}
      autoPlay
      loop
      source={require('~/assets/animations/main.json')}
    />
  );
};

export default MainLogo;
