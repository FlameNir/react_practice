import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Button, StyleSheet } from 'react-native';
import { enableScreens } from 'react-native-screens';

import ReviewScreen from '@screens/ReviewScreen';
import RegistrationScreen from '@screens/RegistrationScreen';
import LoginScreen from '@screens/LoginScreen';
import ErrorModal from '@components/ErrorModal.tsx';
enableScreens();

export type RootStackParamList = {
  Home: undefined;
  Reviews: undefined;
  Register: undefined;
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeScreen = ({ navigation }: any) => {
  const [errorVisible, setErrorVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Button title="Показать ошибку" onPress={() => setErrorVisible(true)} />
      <Button
        title="Перейти к отзывам"
        onPress={() => navigation.navigate('Reviews')}
      />
      <Button
        title="Перейти к Регистрации"
        onPress={() => navigation.navigate('Register')}
      />
      <Button
        title="Перейти к Логину"
        onPress={() => navigation.navigate('Login')}
      />
      <ErrorModal
        visible={errorVisible}
        errorText="Что-то пошло не так при загрузке!"
        onClose={() => setErrorVisible(false)}
      />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Главная' }}
        />
        <Stack.Screen
          name="Reviews"
          component={ReviewScreen}
          options={{ title: 'Отзывы' }}
        />
        <Stack.Screen
          name="Register"
          component={RegistrationScreen}
          options={{ title: 'Регистрация' }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Логин' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default App;
