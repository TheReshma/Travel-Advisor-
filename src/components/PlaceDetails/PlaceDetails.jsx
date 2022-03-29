import React from 'react';
import {Card, Typography, Box, Button, CardMedia, CardContent, Rating, CardActions, Chip} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

import {styles} from './styles';


function PlaceDetails({place, selected, refProps }){

    const classes = styles;

    if(selected){ refProps?.current?.scrollIntoView( { behaviour : "smooth", block : "start"})}

    return(
        <Card elevation={6}>
            <CardMedia 
            style={{height: 350}}
            image={ place.photo ? place.photo.images.large.url : "https://img.etimg.com/thumb/msid-88860361,width-300,imgsize-75800,,resizemode-4,quality-100/restaurant.jpg"}
            title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant='h5'>{place.name}</Typography>
                <Box display='flex'>
                    <Rating precision={0.5} size="small" name="read-only" value={Number(place.rating)} readOnly />
                </Box>
                <Box display='flex' justifyContent='space-between'>
                    <Typography variant='subtitle1'>Price</Typography>
                    <Typography gutterBottom variant='subtitle1'>{place.price}</Typography>
                </Box>
                <Box display='flex' justifyContent='space-between'>
                    <Typography variant='subtitle1'>Ranking</Typography>
                    <Typography gutterBottom variant='subtitle1'>{place.price_level}</Typography>
                </Box>
                {place?.awards?.map((award)=>(
                    <Box my={1} sx={classes.spacing}> 
                        <img src={award.images.small} alt={award.display_name}/>
                        <Typography variant='subtitle2' color='GrayText'>{award.display_name}</Typography>
                    </Box>
                ))}
                {place?.cuisine?.map(({name})=>(
                    <Chip key={name} size='small' label={name} sx={classes.chip} />
                ))}
                {place?.address? (
                    <Typography gutterBottom variant='body2' color='textSecondary' sx={classes.subtitle}>
                        <LocationOnIcon /> {place.address}
                    </Typography>
                ) : null }
                {place.phone && (
                    <Typography variant="body2" color="textSecondary" className={classes.spacing}>
                        <PhoneIcon /> {place.phone}
                    </Typography>
                )}
                <CardActions style={{ margin : '0% 10%'}} sx={classes.spacing}>
                    <Button size="medium" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
                    Trip Advisor
                    </Button>
                    <Button size="medium" color="primary" onClick={() => window.open(place.website, '_blank')}>
                    Website
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    );
}






export default PlaceDetails;