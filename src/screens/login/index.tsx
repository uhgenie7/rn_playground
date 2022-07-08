import React, {useCallback, useRef, useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import AppLayout from '~/components/AppLayout';
import DismissKeyboardView from '~/components/DismissKeyboardView';
import Theme from '~/styles/theme';
const LogIn = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onChangeId = useCallback((text: string) => {
    setId(text.trim());
  }, []);

  const onChangePassword = useCallback((text: string) => {
    setPassword(text.trim());
  }, []);

  const idRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);

  return (
    <AppLayout>
      <View style={styles.container}>
        <DismissKeyboardView>
          <View>
            <Text>아이디</Text>
            <TextInput
              onChangeText={onChangeId}
              placeholder="아이디를 입력해주세요"
              placeholderTextColor="#666"
              importantForAutofill="yes"
              autoComplete="username"
              textContentType="username"
              value={id}
              returnKeyType="next"
              clearButtonMode="while-editing"
              ref={idRef}
              onSubmitEditing={() => passwordRef.current?.focus()}
              blurOnSubmit={false}
            />
          </View>
          <View>
            <Text>비밀번호</Text>
            <TextInput
              placeholder="비밀번호를 입력해주세요"
              placeholderTextColor="#666"
              importantForAutofill="yes"
              onChangeText={onChangePassword}
              value={password}
              autoComplete="password"
              textContentType="password"
              secureTextEntry
              returnKeyType="send"
              clearButtonMode="while-editing"
              ref={passwordRef}
            />
          </View>
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
});
