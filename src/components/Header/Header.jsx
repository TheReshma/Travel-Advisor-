import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete } from '@react-google-maps/api';
import { StyledInputBase, SearchIconWrapper, Search} from './styles.js';



export default function Header({setCoordinates}) {

  const [ autocomplete , setAutocomplete ] = useState(null);

  function onLoad(autoC){
    return setAutocomplete(autoC);
  }

  function onPlaceChange( ){
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoordinates({lat , lng});
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Travel Advisor
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <Autocomplete onLoad={onLoad} onPlaceChange={onPlaceChange}>
              <StyledInputBase
                placeholder="Explore new places.."
                inputProps={{ 'aria-label': 'search' }} />
            </Autocomplete>
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
