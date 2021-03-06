import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Typography, useMediaQuery , Rating, Paper, Container, Box } from '@mui/material';
import { LocationOnOutlined } from '@mui/icons-material';


import {styles} from './styles';

function Map({setCoordinates, coordinates, setBounds, places, setChildClicked}){
    
    const classes = styles;
    const isDesktop = useMediaQuery('(min-width:600px)');


    return(
        <Container sx={classes.mapContainer}>
            <GoogleMapReact 
            bootstrapURLKeys={{ key : process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
            defaultCenter= {coordinates}
            center = {coordinates}
            defaultZoom = {8}
            margin = {[50, 50, 50, 50]}
            yesIWantToUseGoogleMapApiInternals
            options = {''}
            onChange= {(e)=>{
                setBounds({ne : e.marginBounds.ne , sw : e.marginBounds.sw});
                setCoordinates({ lat: e.center.lat , lng: e.center.lng});
            }}
            onChildClick={ function (child){
                return setChildClicked(child);
            }}
            >

            {places?.map((place,i)=> (
                <Container sx={classes.markerContainer} lat= {Number(place.latitude)} lng= {Number(place.longitude)} key={i} >
                    {
                        isDesktop ? (
                            <Paper elevation={3} sx={classes.paper}>
                                <Typography variant='body1'>
                                    {place.name}
                                </Typography>
                                <img
                                    sx={classes.pointer}
                                    src={ place.photo? place.photo.images.large.url : "https://img.etimg.com/thumb/msid-88860361,width-300,imgsize-75800,,resizemode-4,quality-100/restaurant.jpg"}
                                    alt={place.name}
                                />
                                <Box>
                                    <Rating precision={0.5} size="small" name="read-only" value={Number(place.rating)} readOnly />
                                </Box>
                                
                            </Paper>
                            
                        ) : (
                            <LocationOnOutlined color='action' fontSize='large'/>
                        )
                    }
                </Container>
            ))}


            </GoogleMapReact>
        </Container>
    );
}






export default Map;
