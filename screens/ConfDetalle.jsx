import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HeaderVolver from '../components/HeaderVolver';
import { Ionicons } from '@expo/vector-icons';
import { Link } from '@react-navigation/native';

const ConfDetalle = ({route, navigation}) => {
    const dato = route.params;

    const { imgURL, speaker, tituloConf, duracion, descripcion , id} = dato.conferencia;

    let avatar = `https://i.pravatar.cc/150?u=${tituloConf}`;
  return (
    <>
      <HeaderVolver 
          navigation={navigation}
          titulo={tituloConf}
      />
    <ScrollView style={styles.container}>
        <View>
          <Image style={styles.imagen_cerve} source={imgURL}/>
        </View>

        <View style={styles.card_hablador}>
          <Image style={styles.avatar} source={avatar}/>
          <Text style={styles.hablador}>{speaker}</Text>
        </View>

        <View style={styles.detalle_conf}>
          <Text style={styles.texto_detalle}> <b>Descripción:</b> {descripcion}.</Text>
          <Text style={styles.duracion}><b>Duración:</b> {duracion}.</Text>
        </View>

        <View style={styles.container_verMapa}>
          <Link to={{ screen: 'Maps'}}>
            <View style={styles.button_vermapa}>
              <Ionicons name="location-sharp" size={24} color="#fff" />
              <Text style={styles.text_vermapa}>Ir al mapa</Text>
            </View>
          </Link>
        </View>
    </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    with: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: '#082032',
    flexDirection: 'column',
  },
  imagen_cerve:{
    width:'100%',
    height:'300px',
  },
  card_hablador:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    height: '50px',
    marginBottom: '4px',
    borderBottomWidth: '1px',
    borderColor: '#2C394B',
  },
  hablador:{
    color: '#fff',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  avatar:{
    width: '45px',
    height: '45px',
    borderRadius: '50%',
  },
  detalle_conf:{
    width:'80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height:'auto',
    textAlign: 'start',
    marginBottom: '20px'
  },
  texto_detalle:{
    color: '#fff',
    fontSize: '18px'
  },
  button_vermapa:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    width: '250px',
    height: '40px',
    backgroundColor: '#FF4C29',
    borderRadius: '10px',
    marginBottom: '20px'
  },
  container_verMapa:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text_vermapa:{
    color: '#fff',
    fontWeight: 'bold',
  },
  duracion:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '18px'
  }
})

export default ConfDetalle