import React, { use, useState } from 'react';
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  SafeAreaView,
  View,
  Alert,
} from 'react-native';
import { styles } from './styles.ts';
import { Colors } from '@styles/colors';
import { URLs } from '@constants/urls';

interface RegisterTextInputProps extends TextInputProps {
  iconRight?: {
    visible: boolean;
    onPress: () => void;
  };
}

const RegisterTextInput = ({ iconRight, ...props }: RegisterTextInputProps) => {
  return (
    <View style={{ position: 'relative', marginBottom: 12 }}>
      <TextInput
        {...props}
        style={[styles.input, props.style]}
        placeholderTextColor={Colors.textPlaceholder}
      />
      {iconRight && (
        <TouchableOpacity
          onPress={iconRight.onPress}
          style={{ position: 'absolute', right: 12, top: 12 }}
        >
          <Text style={{ color: Colors.primary }}>
            {iconRight.visible ? '❌' : '✅'}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

const isValidEmail = (email: string) => {
  return emailRegex.test(email);
};

const LoginScreen = () => {
  const [logOrEmail, setLogOrEmail] = useState('');
  const [loginEmailFlag, setLoginEmailFlag] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginEnailError, setLoginEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleLogin = () => {
    const isEmail = isValidEmail(logOrEmail);

    // базовая валидация
    if (!logOrEmail.trim()) {
      setLoginEmailError(true);
      return;
    }

    if (!password.trim()) {
      setPasswordError(true);
      return;
    }

    // запрет на @ и . если это логин, а не email
    if (!isEmail && (logOrEmail.includes('@') || logOrEmail.includes('.'))) {
      setLoginEmailError(true);
      return;
    }

    // вызов отправки
    SendData(logOrEmail, password, isEmail);
  };

  const SendData = async (
    loginOrEmail: string,
    password: string,
    isEmail: boolean,
  ) => {
    // const body = isEmail
    //   ? { email: loginOrEmail, password }
    //   : { name: loginOrEmail, password };
    // const response = await fetch(URLs.loginPage, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(body),
    // });
    // const result = await response.text();
    // console.log('Ответ от сервера:', result);
  };

  return (
    <SafeAreaView style={styles.container}>
      {loginEnailError && (
        <Text style={{ color: Colors.error, marginBottom: 4 }}>
          Некорректный логин. В логине не может присутствовать специальных
          символов @ и .
        </Text>
      )}

      <RegisterTextInput
        placeholder="Email или номер"
        value={logOrEmail}
        onChangeText={text => {
          setLogOrEmail(text);
          setLoginEmailError(false);
        }}
        keyboardType="email-address"
        autoCapitalize="none"
        style={{
          borderColor: loginEnailError ? Colors.error : Colors.primary,
          marginTop: 12,
        }}
      />

      <RegisterTextInput
        placeholder="Пароль"
        value={password}
        onChangeText={text => {
          setPassword(text);
          setPasswordError(false);
        }}
        autoCapitalize="none"
        secureTextEntry={!showPassword}
        iconRight={{
          visible: showPassword,
          onPress: () => setShowPassword(!showPassword),
        }}
        style={{ borderColor: passwordError ? Colors.error : Colors.primary }}
      />
      {passwordError && (
        <Text style={{ color: Colors.error, marginBottom: 4 }}>
          Некорректный пароль
        </Text>
      )}

      <TouchableOpacity style={styles.registerButton} onPress={handleLogin}>
        <Text style={styles.registerButtonText}>Войти</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;
