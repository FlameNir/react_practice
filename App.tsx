import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Button, StyleSheet } from 'react-native';
import { enableScreens } from 'react-native-screens';

import ReviewScreen from '@screens/ReviewScreen';
import LoginScreen from '@screens/LoginScreen';

enableScreens();

export type RootStackParamList = {
  Home: undefined;
  Reviews: undefined;
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Button
        title="Перейти к отзывам"
        onPress={() => navigation.navigate('Reviews')}
      />
      <Button
        title="Перейти к Логину"
        onPress={() => navigation.navigate('Login')}
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
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default App;
