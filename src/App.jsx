import React, {useEffect, useState} from 'react';
import {CssBaseline , Grid} from '@mui/material';
import { getPlacesData } from './api/index.js';
import Header from './components/Header/Header.jsx';
import List from './components/List/List.jsx';
import Map from './components/Map/Map.jsx';



function App(){

    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({lat : 0, lng : 0});
    const [bounds, setBounds] = useState(0,0);

    useEffect(()=> {
        navigator.geolocation.getCurrentPosition(({ coords : { latitude ,  longitude }})=> {
            setCoordinates({ lat: latitude, lng: longitude});
        })
    }, []);

    useEffect(()=>{
        
        getPlacesData(bounds.sw, bounds.ne)
        .then((data)=>{
            setPlaces(data);
        })
    }, [coordinates, bounds]);


    return(
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%'}} >
                <Grid item xs={12} md={4}>
                    <List places={places}/>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map 
                        setCoordinates={setCoordinates}
                        coordinates={coordinates}
                        setBounds={setBounds}
                        places={places}
                    />
                </Grid>
            </Grid>
        </>
        
    );
}






export default App;