import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInputProps,
} from 'react-native';
import { Colors } from '@styles/colors';
import { styles } from './styles.ts';

const textOnThePage = {
  login: 'Логин',
  email: 'Email',
  phoneNumber: 'Номер телефона',
  password_1: 'Пароль',
  password_2: 'Повторите пароль',
  buttonText: 'Зарегестрироваться',
};
const LoginTextInput = (props: TextInputProps) => {
  return (
    <TextInput
      {...props}
      style={[styles.input, props.style]}
      placeholderTextColor={Colors.textPlaceholder}
    />
  );
};
const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password_1, setPassword1] = useState('');
  const [password_2, setPassword2] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('@images/gazprom_logo1.png')}
        style={styles.logo}
      />
      <LoginTextInput
        placeholder={textOnThePage.login}
        value={username}
        onChangeText={setUsername}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={[
          styles.input,
          { borderColor: isFocused ? Colors.black : Colors.primary },
        ]}
      />
      <LoginTextInput
        placeholder={textOnThePage.email}
        value={username}
        onChangeText={setUsername}
      />
      <LoginTextInput
        placeholder={textOnThePage.phoneNumber}
        value={username}
        onChangeText={setUsername}
        keyboardType="phone-pad"
      />
      <LoginTextInput
        placeholder={textOnThePage.password_1}
        value={password_1}
        onChangeText={setPassword1}
        secureTextEntry
      />
      <LoginTextInput
        placeholder={textOnThePage.password_2}
        value={password_2}
        onChangeText={setPassword2}
        secureTextEntry
      />

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>{textOnThePage.buttonText}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;
