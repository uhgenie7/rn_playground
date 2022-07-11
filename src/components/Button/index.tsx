import React from 'react';
import Theme from '~/styles/theme';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface IProps {
  isLoading: boolean;
  onSubmit(): void;
  isCorrect: boolean;
  textLabel: string;
}

const Button: React.FC<IProps> = ({
  isLoading,
  onSubmit,
  isCorrect,
  textLabel,
  ...props
}) => {
  return (
    <View style={styles.buttonZone} {...props}>
      <Pressable
        style={
          isCorrect
            ? StyleSheet.compose(styles.loginButton, styles.loginButtonActive)
            : styles.loginButton
        }
        disabled={!isCorrect}
        onPress={onSubmit}>
        {isLoading ? (
          <ActivityIndicator color={Theme.colors.white} />
        ) : (
          <Text style={styles.loginButtonText}>{textLabel}</Text>
        )}
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonZone: {
    alignItems: 'center',
  },
  loginButton: {
    width: Theme.width(300),
    backgroundColor: Theme.colors.disable,
    paddingHorizontal: Theme.width(20),
    paddingVertical: Theme.height(10),
    borderRadius: Theme.width(5),
    marginBottom: Theme.width(10),
    alignItems: 'center',
  },
  loginButtonActive: {
    width: Theme.width(300),
    backgroundColor: Theme.colors.main,
    alignItems: 'center',
  },
  loginButtonText: {
    color: Theme.colors.white,
    fontSize: Theme.fontSize(16),
  },
});
