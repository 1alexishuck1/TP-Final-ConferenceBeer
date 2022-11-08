import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CardHome from '../components/CardHome';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { app } from '../firebase/firebase';

const Home = () => {

  const db = getFirestore(app);

  const [conferencias, setConferencias] = useState()

  const obtenerConferencias = async() => {
    const cervezasRef = collection(db, 'conferencias');
    const querySnapshot = await getDocs(cervezasRef);
    const data = querySnapshot.docs.map(doc => doc.data());
    setConferencias(data)
  }

  useEffect( () =>{
    obtenerConferencias()
  }, [])

  {conferencias && console.log(conferencias)}

  return (
    <View style={styles.container}>
      <View style={styles.container_titulo}>
        <Text style={styles.titulo}>Conferencias</Text>
      </View>
      <ScrollView style={styles.container_scroll}>
        <View style={styles.container_totalCard}>
          {conferencias && conferencias.map( (conferencia, index) => {
            return(
              <CardHome 
              key={index}
                conferencia={conferencia}/>
            )
          }) 
          }
          
          
        </View>
      </ScrollView>
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
  container_totalCard:{
    width: '100%',
    height: '100vh',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '50px',
    marginTop: '20px'
  },
  container_titulo:{
    height: '70px',
    with: '100%',
    justifyContent: 'center',
    alignItems: 'start',
    borderBottomWidth: '1px',
    borderColor: '#2C394B',
    zIndex: 10,
  },
  titulo:{
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#FF4C29',
    marginLeft: '15px'
  },
  container_scroll:{
    with: '100%',
    height: '100%',
  }
})

export default Home