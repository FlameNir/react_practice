import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  Image,
  SafeAreaView,
  View,
} from 'react-native';
import { Colors } from '@styles/colors';
import { styles } from './styles.ts';

const textOnThePage = {
  login: 'Логин',
  email: 'Email',
  phoneNumber: 'Номер телефона',
  password_1: 'Пароль',
  password_2: 'Повторите пароль',
  buttonText: 'Зарегистрироваться',
  errrorText: 'Пароли не совпадают',
};

interface LoginTextInputProps extends TextInputProps {
  iconRight?: {
    visible: boolean;
    onPress: () => void;
  };
}

const LoginTextInput = ({ iconRight, ...props }: LoginTextInputProps) => {
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
          style={{
            position: 'absolute',
            right: 12,
            top: 12,
          }}
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
  return emailRegex.test(email.trim());
};

const LoginScreen = () => {
  const [userLogin, setUserLogin] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const [userPhone, setUserPhone] = useState('');
  const [password_1, setPassword1] = useState('');
  const [password_2, setPassword2] = useState('');
  const [passwordsMatchError, setPasswordsMatchError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleRegister = () => {
    const isEmailValid = emailRegex.test(userEmail.trim());

    if (!isEmailValid) {
      setEmailError(true);
      return;
    }

    if (password_1 !== password_2) {
      setPasswordsMatchError(true);
      setPassword2('');
      return;
    }

    setPasswordsMatchError(false);

    console.log('Данные с регистрации:', {
      login: userLogin,
      email: userEmail,
      phone: userPhone,
      password: password_1,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('@images/gazprom_logo1.png')}
        style={styles.logo}
      />
      <LoginTextInput
        placeholder={textOnThePage.login}
        value={userLogin}
        onChangeText={setUserLogin}
      />
      {emailError && (
        <Text style={{ color: Colors.error, marginBottom: 4 }}>
          Некорректный email
        </Text>
      )}
      <LoginTextInput
        placeholder="Email"
        value={userEmail}
        onChangeText={text => {
          setUserEmail(text);
          setEmailError(false);
        }}
        keyboardType="email-address"
        autoCapitalize="none"
        style={{
          borderColor: emailError ? Colors.error : Colors.primary,
        }}
      />

      <LoginTextInput
        placeholder={textOnThePage.phoneNumber}
        value={userPhone}
        onChangeText={setUserPhone}
        keyboardType="phone-pad"
      />
      <LoginTextInput
        placeholder={textOnThePage.password_1}
        value={password_1}
        onChangeText={setPassword1}
        secureTextEntry={!showPassword}
        iconRight={{
          visible: showPassword,
          onPress: () => setShowPassword(!showPassword),
        }}
      />
      <LoginTextInput
        placeholder={
          passwordsMatchError
            ? textOnThePage.errrorText
            : textOnThePage.password_2
        }
        value={password_2}
        onChangeText={setPassword2}
        secureTextEntry={!showPassword2}
        iconRight={{
          visible: showPassword2,
          onPress: () => setShowPassword2(!showPassword2),
        }}
        style={{
          borderColor: passwordsMatchError ? Colors.error : Colors.primary,
        }}
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
        <Text style={styles.loginButtonText}>{textOnThePage.buttonText}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;
