// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home'; 
import Main from './pages/Main'; 
import Test from './pages/Test';
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false }}/>
        <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown: false }}/>
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
        {/* <Stack.Screen name="Main" component={Test} options={{ headerShown: false }}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
