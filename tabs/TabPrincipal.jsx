import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import HomeStack from '../stack/HomeStack';
import Maps from '../screens/Maps';
import Configuracion from '../screens/Configuracion';


const Tab = createBottomTabNavigator();

const TabPrincipal = () => {
  return (
    <Tab.Navigator screenOptions={ ( { route } ) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let iconNombre;
            if (route.name === 'HomeStack'){
                iconNombre = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Maps'){
                iconNombre = focused ?  'location-sharp' : 'location-outline'
            } else if (route.name === 'Configuracion'){
                iconNombre = focused ?  'settings-sharp' : 'settings-outline'
            }
            return <Ionicons name={iconNombre} size={30} color="#fff" />
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle:{
            backgroundColor: "#334756",
            height: 60,
            zIndex:0,
            borderWidth: 0
        },
        headerShadowVisible: false,
  
    }) }>
        <Tab.Screen options={{headerShown: false}}name="HomeStack" component={HomeStack} />
        <Tab.Screen options={{headerShown: false}}name="Maps" component={Maps} />
        <Tab.Screen options={{headerShown: false}}name="Configuracion" component={Configuracion} />
    </Tab.Navigator>
  )
}

export default TabPrincipal