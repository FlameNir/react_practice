import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('@images/gazprom_logo1.png')}
        style={styles.logo}
      />
      <TextInput
        placeholder="Логин"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        placeholderTextColor="#999"
      />
      <TextInput
        placeholder="Введите email"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        placeholderTextColor="#999"
      />
      <TextInput
        placeholder="Введите номер телефона"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        placeholderTextColor="#999"
      />
      <TextInput
        placeholder="Пароль"
        value={password1}
        onChangeText={setPassword1}
        style={styles.input}
        secureTextEntry
        placeholderTextColor="#999"
      />
      <TextInput
        placeholder="Подтвердите пароль"
        value={password2}
        onChangeText={setPassword2}
        style={styles.input}
        secureTextEntry
        placeholderTextColor="#999"
      />

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Зарегестрироваться</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    //marginBottom: 32,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#3897f0',
    borderRadius: 6,
    width: 300,
    paddingVertical: 12,
    alignItems: 'center',
    marginVertical: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  forgotText: {
    color: '#00376b',
    textAlign: 'center',
    marginTop: 12,
  },
  footer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    alignItems: 'center',
  },
  registerText: {
    color: '#3897f0',
    fontSize: 16,
    marginBottom: 10,
  },
  metaText: {
    color: '#888',
    fontSize: 12,
  },
});

export default LoginScreen;
