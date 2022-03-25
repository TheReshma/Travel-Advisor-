import React from 'react';
import {Card, Typography, Box, Button, CardMedia, CardContent, Rating, CardACtions, Chip} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

import {styles} from './styles';


function PlaceDetails({place}){

    const classes = styles;


    return(
        <Card elevation={6}>
            <CardMedia 
            style={{height: 350}}
            image={ place.photo ? place.photo.images.large.url : "https://img.etimg.com/thumb/msid-88860361,width-300,imgsize-75800,,resizemode-4,quality-100/restaurant.jpg"}
            title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant='h5'>{place.name}</Typography>
                <Box>

                </Box>
            </CardContent>
        </Card>
    );
}






export default PlaceDetails;