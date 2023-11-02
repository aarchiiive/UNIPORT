// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home'; 
import Start from './pages/Start'; 
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import PolicyAgreement from './pages/PolicyAgreement';
import RegisterGuide from './pages/RegisterGuide';
import PassportScan from './pages/PassportScan';
import SignUp from './pages/SignUp';
import Main from './pages/Main'; 
import Notifications from './pages/Notifications';
import Profile from './pages/Profile';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Start" component={Start} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }}/>
        <Stack.Screen name="PolicyAgreement" component={PolicyAgreement} options={{ headerShown: false }}/>
        <Stack.Screen name="RegisterGuide" component={RegisterGuide} options={{ headerShown: false }}/>
        <Stack.Screen name="PassportScan" component={PassportScan} options={{ headerShown: false }}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false }}/>
        <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown: false }}/>
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
