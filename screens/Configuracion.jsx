import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getAuth, signOut } from "firebase/auth";
import {app} from '../firebase/firebase';

const Configuracion = ({navigation}) => {

  const auth = getAuth(app);

  const cerrarSesionUser = () =>{
    signOut(auth).then(() => {
      navigation.navigate('Login')
    }).catch((error) => {
    // An error happened.
    });
}

  return (
    <View style={styles.container}>
        <TouchableOpacity 
          style={styles.button_cerrarSesion}
          onPress={() => cerrarSesionUser()}>
          <Text style={styles.texto_cerrarSesion}>Cerrar sesión</Text>
          <Ionicons name="exit-outline" size={24} color="#fff" />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    with: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: '#082032',
  },
  button_cerrarSesion:{
    with: '250px',
    height: '40px',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2C394B',
    gap: '20px'
  },
  texto_cerrarSesion:{
    color: '#fff',
    fontWeight: 'bold',
  }
})

export default Configuracion