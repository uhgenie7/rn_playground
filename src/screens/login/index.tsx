import React, {useCallback, useRef, useState} from 'react';
import {View, StyleSheet, TextInput as RNTextInput} from 'react-native';
import AppLayout from '~/components/AppLayout';
import DismissKeyboardView from '~/components/DismissKeyboardView';
import Theme from '~/styles/theme';
import {MainLogo} from '~/components/animations';
import Button from '~/components/Button';
import {TextInput} from '~/components/TextInput';

const LogIn = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onChangeId = useCallback((text: string) => {
    setId(text.trim());
  }, []);

  const onChangePassword = useCallback((text: string) => {
    setPassword(text.trim());
  }, []);

  const idRef = useRef<RNTextInput | null>(null);
  const passwordRef = useRef<RNTextInput | null>(null);

  return (
    <AppLayout>
      <View style={styles.container}>
        <DismissKeyboardView>
          <View style={styles.logoContainer}>
            <MainLogo style={styles.logoStyle} />
          </View>
          <TextInput
            inputLabel="아이디"
            onChangeText={onChangeId}
            placeholder="아이디를 입력해주세요"
            autoComplete="username"
            textContentType="username"
            value={id}
            returnKeyType="next"
            ref={idRef}
            onSubmitEditing={() => passwordRef.current?.focus()}
            blurOnSubmit={false}
          />
          <TextInput
            inputLabel="비밀번호"
            onChangeText={onChangePassword}
            placeholder="비밀번호를 입력해주세요"
            autoComplete="password"
            textContentType="password"
            value={password}
            returnKeyType="send"
            ref={passwordRef}
            secureTextEntry
          />
          <Button
            textLabel="로그인"
            isLoading={false}
            isCorrect={true}
            onSubmit={() => {
              console.log('check');
            }}
          />
        </DismissKeyboardView>
      </View>
    </AppLayout>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  container: {
    paddingRight: Theme.width(16),
    paddingLeft: Theme.width(16),
    marginTop: Theme.height(40),
  },

  logoContainer: {
    alignItems: 'center',
  },

  logoStyle: {
    width: Theme.width(300),
    height: Theme.height(300),
  },

  textInputWrapper: {
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
