
import React from 'react';
import { Text, View } from 'react-native';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detail from './screens/Detail'
import Navbar from './components/Navbar'
const Stack = createNativeStackNavigator();

const App = () => {




  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
      
      name="Home" 
      options={{
        headerTransparent: true,
        header: ({navigation}) =>  <Navbar navigation={navigation} main={false}/>,

      }}
      component={Home} />
      <Stack.Screen 
      name="Detail" 
      component={Detail}
      options={{
        headerTransparent: true,
        header: ({navigation}) =>  <Navbar navigation={navigation} main={false}/>,
      }}
      />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;