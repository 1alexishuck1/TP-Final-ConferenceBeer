import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import { Link } from '@react-navigation/native';


const CardHome = ({conferencia}) => {

  const { imgURL, speaker, tituloConf, duracion, descripcion , id} = conferencia;


  let avatar = `https://i.pravatar.cc/150?u=${tituloConf}`

  return (    
          <View style={styles.container_card}>
            <Link to={{ screen: 'ConfDetalle', params: { conferencia: conferencia } }}>
              <View style={styles.card}>
                <View style={styles.card_hablador}>
                    <Image style={styles.avatar} source={avatar}/>
                    <Text style={styles.hablador}>{speaker}</Text>
                </View>
                <View style={styles.card_imagen}>
                    <Image style={styles.imagen} source={imgURL} />
                </View>
                <View style={styles.card_titulo}>
                    <Text style={styles.titulo_conf}>{tituloConf}</Text>
                    <Text style={styles.tiempo_conf}>{duracion}</Text>
                </View>
              </View>
            </Link>
          </View>
  )
}

const styles = StyleSheet.create({    
      container_card:{
        width: '90%',
        height: '250px'
      },
      imagen:{
        with: '200px',
        height: '150px',
        resizeMode: 'cover'
      },
      avatar:{
        width: '45px',
        height: '45px',
        borderRadius: '50%',
      },
      card:{
        flexDirection: 'column',
        gap: '5px',
        backgroundColor: '#2C394B',
        height: '265px',
        width: '100%',
        borderRadius: '10px',
      },
      card_hablador:{
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'center',
        marginLeft: '20px',
        gap: '20px',
        marginTop: '4px'
      },
      hablador:{
        color: '#FFF',
        fontSize: '18px',
        fontWeight: '500',
      },
      card_titulo:{
        width: '100%',
        flexDirection: 'column'
      },
      titulo_conf:{
        textAlign: 'start',
        color: '#FF4C29',
        fontWeight: 'bold',
        fontSize: '20px',
        marginLeft: '20px'
      },
      tiempo_conf:{
        color: '#fff',
        opacity: '0.7',
        fontSize: '16px',
        marginLeft: '25px'
      }

})

export default CardHome