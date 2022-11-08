import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import iconGoogle from '../assets/google.png';
import { Link } from '@react-navigation/native';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import {app} from '../firebase/firebase';


const Login = ({navigation}) => {

    const auth = getAuth(app);

    const provider = new GoogleAuthProvider();

    const [correo, setCorreo] = useState();
    const [contraseña, setContraseña] = useState();

    const ingresar = () => {
        signInWithEmailAndPassword(auth, correo, contraseña)
            .then( () => {
                setTimeout(() =>{
                    navigation.navigate('TabPrincipal')
                }, 1000)
            })
            .catch( (error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
    }

    const ingresarConGoogle = () => {
        signInWithPopup(auth, provider)
        .then(async(result) => {
            setTimeout(() =>{
                navigation.navigate('TabPrincipal')
            }, 1000)
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            alert(errorCode, errorMessage, email, credential)
        })
    }

  return (
    <View style={styles.container}>
        <View style={styles.bienvenido}>
            <Text style={styles.bienvTitulo}>¡Bienvenido a BeerConf!</Text>
            <Text style={styles.bienvSubtitulo}>Por favor, ingrese con su cuenta</Text>
        </View>
        <View style={styles.containerInputs}>
            <TextInput 
                style={styles.input} 
                placeholder="Email"
                onChange={(e) => setCorreo(e.target.value)}/>
            <TextInput 
                style={styles.input} 
                placeholder="Contraseña"
                secureTextEntry={true}
                onChange={(e) => setContraseña(e.target.value)}/>
            
            <View style={styles.container_olvido}>
                <Text style={styles.text_olvido}>¿Olvidó su contraseña?</Text>
            </View>
            <TouchableOpacity 
                style={styles.buttonIngresar}
                onPress={() => {ingresar()}}>
                <Text style={styles.text_button}>Ingresar</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.buttonIngresarGoogle}
                onPress={() => {ingresarConGoogle()}}>
                <Image style={styles.icon_imagen} source={iconGoogle}/>
                <Text style={styles.text_button}>Continuar con Google</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.container_crearCuenta}>
            <Text style={styles.text_crear1}>¿No tienes cuenta?</Text>
            <Link  to={{ screen: 'Registro'}} style={styles.text_crear2}>Registrate acá</Link>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        with: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: '#082032'
    },
    bienvenido:{
        height: '150px',
        textAlign: 'center'
    },
    bienvTitulo:{
        fontWeight: 'bold',
        fontSize: '30px',
        marginBottom: '10px',
        marginTop: '20px',
        color: '#FF4C29'
    },
    bienvSubtitulo: {
        opacity: '0.7',
        fontSize: '17px',
        color: '#c4c4c4'
    },
    containerInputs:{
        height: '250px'
    },
    input:{
        backgroundColor: 'transparent',
        color: '#c4c4c4',
        borderColor: '#FF4C29',
        borderWidth: '1px',
        height: '35px',
        width: '300px',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '10px',
        paddingLeft: '5px',
        marginBottom: '15px'
    },
    buttonIngresar:{
        width: '250px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '10px',
        height: '40px',
        backgroundColor: '#FF4C29',
        borderRadius: '10px',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonIngresarGoogle:{
        width: '250px',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: '40px',
        marginTop: '20px',
        backgroundColor: 'transparent',
        borderWidth: '1px',
        borderColor: '#395B64',
        borderRadius: '10px',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row'
    },
    container_olvido:{
        width: '100%',
        height: '30px',
        justifyContent: 'start',
        alignItems: 'end',
    },
    text_olvido:{
        color: '#c4c4c4',
        marginRight: '15px',
    },
    text_button:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '16px'
    },
    icon_imagen:{
        width: '30px',
        height: '30px'
    },
    text_crear2:{
        color: '#FF4C29',
        fontWeight: 'bold',
    },
    text_crear1:{
        color: '#c4c4c4'
    },  
    container_crearCuenta:{
        marginTop: '40px',
        flexDirection: 'row',
        width: '100%',
        textAlign: 'center',
        gap: '10px',
        justifyContent: 'center'
    }
})

export default Login