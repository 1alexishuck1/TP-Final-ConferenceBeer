import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HeaderVolver = ({navigation, titulo}) => {
  return (
    <TouchableOpacity
        style={styles.headerVolver}
        onPress={() => navigation.goBack()}
    >
        <View style={styles.icon_text}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
            <Text style={styles.titulo}>{titulo}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    headerVolver:{
        width: '100%',
        height: '60px',
        backgroundColor: '#334756',
        justifyContent: 'start',
        alignItems: 'center',
    }, 
    icon_text:{
        width: '100%',
        height: '60px',
        flexDirection: 'row',
        gap: '20px',
        justifyContent: 'start',
        alignItems: 'center',
        marginLeft: '20px'
    },
    titulo:{
        color: '#fff',
        fontSize: '17px',
        fontWeight: 'bold',
    }
})

export default HeaderVolver