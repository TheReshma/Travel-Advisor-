import {React, useState, useEffect, createRef } from 'react';
import { styles, Formcontrol, SelectEmpty} from './styles';
import { Grid, CircularProgress, Typography, InputLabel, MenuItem, FormControl, Select, Container } from '@mui/material';
import PlaceDetails from '../PlaceDetails/PlaceDetails';




function List({places , childClicked , isLoading, type, setType, rating, setRating }){

    const classes = styles;

    const [elRefs, setElRefs]= useState([]);

    useEffect(()=> {
        const refs = Array(places?.length).fill()
        refs.map((_,i)=> refs[i] || createRef());
        setElRefs(refs);
    },[places]);

    console.log({childClicked});


    return(
        <Container sx={classes.container}>
            <Typography variant='h5' component='h2' > Restaurants, Hotels & Attractions around you! </Typography>
            { isLoading ? (
                <div sx={classes.loading}>
                    <CircularProgress size="5rem" />
                </div>
            ) : (
                <>
                <Formcontrol >
                    <InputLabel  variant='body2' component='p'>Type</InputLabel>
                    <SelectEmpty value={type} onChange={(e)=> setType(e.target.value)}>
                        <MenuItem value='restaurants'> Restaurants</MenuItem>
                        <MenuItem value='hotels'> Hotels</MenuItem>
                        <MenuItem value='attractions'> Attractions</MenuItem>
                    </SelectEmpty>
                </Formcontrol>
                
                <Formcontrol >
                    <InputLabel  variant='body2' component='p'>Rating</InputLabel>
                    <SelectEmpty value={rating} onChange={(e)=> setRating(e.target.value)}>
                        <MenuItem value={0}> All</MenuItem>
                        <MenuItem value={3}> Above 3.0</MenuItem>
                        <MenuItem value={4}> Above 4.0</MenuItem>
                        <MenuItem value={4.5}> Above 4.5</MenuItem>
                    </SelectEmpty>
                </Formcontrol>
                <Grid container spacing={3} sx={classes.list}>
                    {places?.map((place, i) => (
                        <Grid ref={elRefs[i]} item key={i} xs={12}>
                            <PlaceDetails 
                            place={place}
                            selected = {Number(childClicked) === i}
                            refProp = {elRefs[i]} />
                        </Grid>
                    ))}
                </Grid>
            </>
            )}
        </Container>
        
    );
}






export default List;