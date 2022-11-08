import React from 'react';
import Home from '../screens/Home';
import { createStackNavigator } from '@react-navigation/stack';
import ConfDetalle from '../screens/ConfDetalle';

const StackHome = createStackNavigator();

const HomeStack = () => {
  return (
    <>
    <StackHome.Navigator>
        <StackHome.Screen options={{headerShown: false}} name="Home" component={Home}/>
        <StackHome.Screen options={{headerShown: false}} name="ConfDetalle" component={ConfDetalle}/>
    </StackHome.Navigator>
    </>
  )
}

export default HomeStack