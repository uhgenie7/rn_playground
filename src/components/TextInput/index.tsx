import React from 'react';
import Theme from '~/styles/theme';
import {StyleSheet, Text, View, TextInput as RNTextInput} from 'react-native';
import type {ComponentProps, ForwardRefRenderFunction} from 'react';
import {forwardRef} from 'react';

export type TextInputProps = ComponentProps<typeof RNTextInput> & {
  inputLabel: string;
};

const _TextInput: ForwardRefRenderFunction<RNTextInput, TextInputProps> = (
  {
    inputLabel,
    onChangeText,
    placeholder,
    autoComplete,
    textContentType,
    returnKeyType,
    blurOnSubmit,
    value,
    secureTextEntry = false,
    ...props
  },
  ref,
) => {
  return (
    <View style={styles.inputZone} {...props}>
      <Text style={styles.label}>{inputLabel}</Text>
      <RNTextInput
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={Theme.colors.disable}
        importantForAutofill="yes"
        autoComplete={autoComplete}
        textContentType={textContentType}
        clearButtonMode="while-editing"
        returnKeyType={returnKeyType}
        blurOnSubmit={blurOnSubmit}
        secureTextEntry={secureTextEntry}
        ref={ref}
      />
    </View>
  );
};

export const TextInput = forwardRef(_TextInput);

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
