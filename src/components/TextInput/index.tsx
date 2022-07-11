import React from 'react';
import Theme from '~/styles/theme';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
  ReturnKeyTypeOptions,
} from 'react-native';

interface IProps {
  inputLabel: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  value: string;
  ref?: React.MutableRefObject<TextInput | null>;
  onSubmitEditing?:
    | ((e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void)
    | undefined;
  blurOnSubmit?: boolean;
  returnKeyType?: ReturnKeyTypeOptions | undefined;
  autoComplete?: 'username' | 'password';
  textContentType?: 'username' | 'password';
  secureTextEntry?: boolean;
}

const Input: React.FC<IProps> = ({
  inputLabel,
  onChangeText,
  placeholder,
  value,
  ref,
  onSubmitEditing,
  blurOnSubmit,
  returnKeyType,
  autoComplete,
  textContentType,
  secureTextEntry = false,
  ...props
}) => {
  return (
    <View style={styles.inputZone} {...props}>
      <Text style={styles.label}>{inputLabel}</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={Theme.colors.disable}
        importantForAutofill="yes"
        autoComplete={autoComplete}
        textContentType={textContentType}
        value={value}
        returnKeyType={returnKeyType}
        clearButtonMode="while-editing"
        ref={ref}
        onSubmitEditing={onSubmitEditing}
        blurOnSubmit={blurOnSubmit}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default React.memo(Input);

const styles = StyleSheet.create({
  inputZone: {
    marginBottom: Theme.height(20),
  },
  label: {
    fontWeight: 'bold',
    fontSize: Theme.fontSize(12),
    color: Theme.colors.main,
  },

  textInput: {
    padding: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    color: Theme.colors.black,
  },
});
