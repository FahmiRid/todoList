import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginPage from './src/loginPage';
import TodoPage from './src/TodoPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen name="loginPage" component={LoginPage} />
        <Stack.Screen name="TodoPage" component={TodoPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
