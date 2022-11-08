import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import TabPrincipal from '../tabs/TabPrincipal';
import Registro from '../screens/Registro';

const PrincipalStack = createStackNavigator();

const StackPrincipal = () => {
  return (
    <>
    <PrincipalStack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#fff',
        shadowColor: 'transparent', // this covers iOS
        elevation: 15, // this covers Android
      },
      headerTintColor: "#ffffff",
      headerShadowVisible: false,
    }}>
        <PrincipalStack.Screen options={{headerShown: false}} name="Login" component={Login} />
        <PrincipalStack.Screen options={{headerShown: false}} name="Registro" component={Registro} />
        <PrincipalStack.Screen options={{headerShown: false}} name="TabPrincipal" component={TabPrincipal} />
    </PrincipalStack.Navigator>
    </>
  )
}

export default StackPrincipal