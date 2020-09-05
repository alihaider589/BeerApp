
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BeerList from './src/screens/BeerList'
import BeerDescription from './src/screens/BeerDescription'




const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        options={{
    headerTitle:"BeerList"
        }}
        name="Home" component={BeerList} />
           <Stack.Screen
        options={{
    headerTitle:"Beer Description"
        }}
        name="Description" component={BeerDescription} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;