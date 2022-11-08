import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import conferenciaImg from '../assets/conferencia.jpg';
import { AntDesign } from '@expo/vector-icons';
import { Link } from '@react-navigation/native';

const CardDetalleMarker = ({setMostrarInfo}) => {

  return (
    <View style={styles.container}>
        <View style={styles.marker_titulo}>
            <Image source={conferenciaImg} style={styles.titulo_imagen} />
            <Text style={styles.titulo_texto}>Conferencia de Cerveceros</Text>
        </View>
        <View style={styles.marker_informacion}>
            <Text style={styles.informacion_texto}>Se realizará la Feria de la Cerveza “Concepción Beer 2022”, organizada por la Cámara de Cerveceros. Será en la Plaza General Ramírez Predio desde las 20 horas.</Text>
        </View>
        <View style={styles.marker_button}>
            <Link to={{ screen: 'HomeStack'}} onPress={() => setMostrarInfo()}>
                <View style={styles.button_container}>
                    <AntDesign name="leftcircleo" size={24} color="#fff" />
                    <Text style={styles.button_texto}>Ir a la conferencia</Text>
                </View>
            </Link>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '300px',
        zIndex: '100000000',
        backgroundColor: '#082032',
        position: 'absolute',
        top: "calc(100% - 300px)",
        borderTopEndRadius:'30px',
        borderTopStartRadius:'30px',
        alignItems: 'center'
    },
    titulo_imagen:{
        width: '100px',
        height: '100px',
        borderRadius: '50%'
    },
    marker_titulo:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100px',
        gap: '20px',
        marginTop: '15px'
    },
    titulo_texto:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '20px'
    },
    marker_informacion:{
        width: '90%',
        height: '100px',
        justifyContent: 'center',
        alignItems: 'center'
    },
    informacion_texto:{
        color: '#fff',
        opacity: '0.7',
        fontSize: '17px',
        textAlign: 'center'
    },
    button_container:{
        width: "250px",
        height: "40px",
        backgroundColor: '#FF4C29',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: '10px',
        gap: "20px"
    },
    button_texto:{
        color: '#fff',
        fontWeight: 'bold',
    },
    marker_button:{
        marginTop: '20px'
    }

})

export default CardDetalleMarker