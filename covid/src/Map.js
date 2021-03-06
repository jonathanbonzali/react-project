import React from 'react'
import { MapContainer, TileLayer} from 'react-leaflet';
import './Map.css';
import { showDataOnMap } from './utils';

function Map({ countries, casesTypes, center, zoom }) {
    return (
        <div className="map">
            <MapContainer center={ center } zoom={ zoom } >
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {showDataOnMap(countries, casesTypes)}
      </MapContainer>
        </div>
    )
}

export default Map
