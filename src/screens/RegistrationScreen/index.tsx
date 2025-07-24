import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  Image,
  SafeAreaView,
  View,
  Alert,
} from 'react-native';
import { Colors } from '@styles/colors';
import { styles } from './styles.ts';
import { URLs } from '@constants/urls';

const textOnThePage = {
  login: 'Логин',
  email: 'Email',
  phoneNumber: 'Номер телефона',
  password_1: 'Пароль',
  password_2: 'Повторите пароль',
  buttonText: 'Зарегистрироваться',
  errorPassword:
    'Пароль должен содержать не менее 3 символов и не включать пробелы.',
  errorTextPasswordMatc: 'Пароли не совпадают',
  errorPhone: 'Некорректный телефон',
  errorEmail: 'Некорректный email',
};

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
const phoneRegex = /^(?:\+7|8)\d{10}$/;
const passwordRegex = /^[^\s]{3,}$/;

const isValidEmail = (email: string) => {
  return emailRegex.test(email);
};
const isValidPhone = (phone: string) => {
  return phoneRegex.test(phone);
};
const isValidPassword = (password: string) => {
  return passwordRegex.test(password);
};
const RegisterScreen = () => {
  const SendData = async () => {
    const response = await fetch(URLs.setRegisterPage, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userEmail,
        name: userLogin,
        phone: userPhone,
        password: password_1,
      }),
    });

    const result = await response.text();
    console.log('Ответ от сервера:', result);
    switch (result) {
      case '\r\n"Email_Exists"':
        Alert.alert('Этот email уже зарегистрирован');
        break;
      case '\r\n"Login_Exists"':
        Alert.alert('Такое имя пользователя уже зарегестрировано');
        break;
      //\r\n"Phone_Exists"
      case '\r\n"Phone_Exists"':
        Alert.alert('Такой номер уже используется при регистрации');
        break;
      default:
        Alert.alert('Регистрация успешна');
    }
  };

  const [userLogin, setUserLogin] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const [userPhone, setUserPhone] = useState('');
  const [phoneError, setPhoneError] = useState(false);

  const [password_1, setPassword1] = useState('');
  const [password_2, setPassword2] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleRegister = async () => {
    setUserPhone(userPhone.trim());
    setUserEmail(userEmail.trim());
    const passwordMatchFlag = password_1 !== password_2;
    const passwordFlag = !isValidPassword(password_1);
    const emailFlag = !isValidEmail(userEmail);
    const phoneFlag = !isValidPhone(userPhone);
    setPasswordMatchError(passwordMatchFlag);
    setPasswordError(passwordFlag);
    setEmailError(emailFlag);
    setPhoneError(phoneFlag);
    console.log(
      'passwordMatchFlag || emailError || phoneError || passwordFlag',
    );
    console.log(passwordMatchFlag, emailError, phoneError, passwordFlag);
    if (passwordMatchFlag || emailError || phoneError || passwordFlag) {
      console.log('Ошибка');
      return;
    }
    SendData();
    //Alert.alert(alertSpam);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <Image
        source={require('@images/gazprom_logo1.png')}
        style={styles.logo}
      /> */}
      <RegisterTextInput
        placeholder={textOnThePage.login}
        value={userLogin}
        style={{ marginTop: 24 }}
        onChangeText={setUserLogin}
        autoCapitalize="none"
      />
      {emailError && (
        <Text style={{ color: Colors.error, marginBottom: 4 }}>
          {textOnThePage.errorEmail}
        </Text>
      )}
      <RegisterTextInput
        placeholder={textOnThePage.email}
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
      {phoneError && (
        <Text style={{ color: Colors.error, marginBottom: 4 }}>
          {textOnThePage.errorPhone}
        </Text>
      )}
      <RegisterTextInput
        placeholder={textOnThePage.phoneNumber}
        value={userPhone}
        onChangeText={text => {
          setUserPhone(text);
          setPhoneError(false);
        }}
        keyboardType="phone-pad"
        autoCapitalize="none"
        style={{
          borderColor: phoneError ? Colors.error : Colors.primary,
        }}
      />
      {passwordError && (
        <Text style={{ color: Colors.error, marginBottom: 4 }}>
          {textOnThePage.errorPassword}
        </Text>
      )}
      <RegisterTextInput
        placeholder={textOnThePage.password_1}
        value={password_1}
        autoCapitalize="none"
        onChangeText={setPassword1}
        secureTextEntry={!showPassword}
        iconRight={{
          visible: showPassword,
          onPress: () => setShowPassword(!showPassword),
        }}
      />
      <RegisterTextInput
        placeholder={
          passwordMatchError
            ? textOnThePage.errorTextPasswordMatc
            : textOnThePage.password_2
        }
        value={password_2}
        autoCapitalize="none"
        onChangeText={setPassword2}
        secureTextEntry={!showPassword2}
        iconRight={{
          visible: showPassword2,
          onPress: () => setShowPassword2(!showPassword2),
        }}
        style={{
          borderColor: passwordMatchError ? Colors.error : Colors.primary,
        }}
      />

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>
          {textOnThePage.buttonText}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default RegisterScreen;
