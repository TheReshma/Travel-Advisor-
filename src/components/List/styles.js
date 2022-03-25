import {styled} from '@mui/material/styles';
import { FormControl, Select } from '@mui/material';


const Formcontrol = styled(FormControl)(({theme})=>({
    margin: theme.spacing(1), 
    minWidth: 140, 
    marginBottom: '10px',
    marginLeft : '0px',
    marginTop : '0px',
}));

const SelectEmpty = styled(Select)(({theme})=>({
    marginTop: theme.spacing(5),
}));

const styles = {
    loading: {
      height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
    },
    container: {
      padding: '25px',
    },
    marginBottom: {
      marginBottom: '30px',
    },
    list: {
      height: '70vh', overflow: 'scroll',
    },
  };

export { Formcontrol, SelectEmpty, styles }; 