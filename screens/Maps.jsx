import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import {
  GoogleMap,
  DirectionsRenderer,
  Marker,
  useJsApiLoader,
  InfoWindow 
} from '@react-google-maps/api';
import CardDetalleMarker from '../components/CardDetalleMarker';

const Maps = () => {

  const [map, setMap] = useState(null);
  const [center, setCenter] = useState({
    lat: -32.485276,
    lng: -58.231817
  })


  const {isLoaded} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: '',
    libraries: ['places']
  })

  const containerStyle = {
    width: '100%',
    height: '92vh',
    marginTop: '0px'
  };

  const [mostrarInfo, setMostrarInfo] = useState(false)


  return (
    <View style={styles.container}>
        {isLoaded && 
          <GoogleMap
            mapContainerStyle={containerStyle}
            className="contianer-maps"
            center={center}
            zoom={16}
            options={{
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
            }}
            onLoad={map => setMap(map)}
            >
              <Marker
                    position={center}
                    zoom={16}
                    onClick={() => setMostrarInfo(!mostrarInfo)}
                  />
              

              {mostrarInfo && 
                <CardDetalleMarker 
                setMostrarInfo={setMostrarInfo} />
              }
              
            </GoogleMap>}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: 'calc(100% - 60px)',
  }
})

export default Maps
