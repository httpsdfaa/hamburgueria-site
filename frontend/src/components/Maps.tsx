import 'dotenv/config'
import React from 'react';


// A DOCUMENTAÇÃO FOI SEGUIDA DO SITE DEVELOPERS GOOGLE MAPS
import {
    APIProvider, // Faz parte de Map
    Map, // Permite alterar o mapa
    AdvancedMarker,
    MapCameraChangedEvent,
    Pin
} from '@vis.gl/react-google-maps';

// Faz parte dos marcadores do mapa
type Poi = { key: string, location: google.maps.LatLngLiteral }
const locations: Poi[] = [
    { key: 'operaHouse', location: { lat: -19.75599193269231, lng: -43.99126695894421 } }
];

// Cordenadas do centro na qual queremos focar
const cordMaps = {
    lat: -19.75599193269231,
    lng: -43.99126695894421
}

function mapsGoogle() {
    return (
        <APIProvider
            apiKey={`${process.env.REACT_APP_KEY_API}`} // Chave Api google
            onLoad={() => console.log('Maps API has loaded.')}  // Verificando se carregou
        >
            <Map
                defaultZoom={15} // Zoom onde localiza o centro
                defaultCenter={cordMaps} // Cordenadas do centro desejado
                mapId={'65559ab5179aaa7'} // Id do mapa criado no console do google
                onCameraChanged={(ev: MapCameraChangedEvent) =>
                    console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
                }
            >
                <PoiMarkers pois={locations} /> {/*Marcador do mapa*/}
            </Map>
        </APIProvider>
    )
}

// Componente para montar o marcador do mapa
const PoiMarkers = (props: { pois: Poi[] }) => {
    return (
        <>
            {props.pois.map((poi: Poi) => (
                <AdvancedMarker
                    key={poi.key}
                    position={poi.location}>
                    <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
                </AdvancedMarker>
            ))}
        </>
    );
};

export default mapsGoogle;