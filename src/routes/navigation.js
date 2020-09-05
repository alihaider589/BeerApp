import 'react-native-gesture-handler'
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import BeerList from '../screens/BeerList'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';





const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={BeerList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
