
import React from 'react';
import { Text, View } from 'react-native';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detail from './screens/Detail'
const Stack = createNativeStackNavigator();

const App = () => {




  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
      name="Home" 
      component={Home}
      options={{
        headerTransparent: true,
        header: () => 
      }}
      />
      <Stack.Screen 
      
      name="Detail" 
      options={{
        headerTransparent: true,
      }}
      component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;