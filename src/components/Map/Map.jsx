import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Typography, useMediaQuery } from '@mui/material';
import { LocationOnOutlined } from '@mui/icons-material';
import {Rating} from '@mui/material';

import {MapContainer, StyledPaper, MarkerContainer} from './styles';

function Map({setCoordinates, coordinates, setBounds}){
    
    
    const isMobile = useMediaQuery('(min-width:600px)');

    return(
        <MapContainer>
            <GoogleMapReact 
            bootstrapURLKeys={{ key : 'AIzaSyBlKPLJvJ-hk4LvIn5d-dsju9LgXaKSWGQ' }}
            defaultCenter= {coordinates}
            center = {coordinates}
            defaultZoom = {8}
            margin = {[50, 50, 50, 50]}
            options = {''}
            onChange= {(e)=>{
                setBounds({ne : e.marginBounds.ne , sw : e.marginBounds.sw});
                setCoordinates({ lat: e.center.lat , lng: e.center.lng});
            }}
            onChildClick={''}
            >


            </GoogleMapReact>
        </MapContainer>
    );
}






export default Map;

//API Key : AIzaSyBlKPLJvJ-hk4LvIn5d-dsju9LgXaKSWGQ