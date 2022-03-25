import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


export const getPlacesData = async ( sw, ne) => {
    try{
        const { data : { data } } = await axios.get(URL,{
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
              
            },
            headers: {
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
                'X-RapidAPI-Key': 'f9895f4f8bmshac2473520ef5dfep1905c7jsn7f2dca7ac431'
            }
          });
        return data;
    }catch(error){
        console.log(error);
    }
}