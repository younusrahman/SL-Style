import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { SetTransportMode } from '../../../reduxItem/slice/TravelSlice';
import { StanderMediaQuery } from '../../MediaQuery';



export default function ChecboxGroup() {
    const [state, setState] = useState({
        LocalTraffic: false,
        Boat: false,
        Tram: true,
        Bus: true,
        CommuterTrain: true,
        Subway: true,
      });
      const dispatch = useDispatch()

      useEffect(() => {
        dispatch(SetTransportMode(state))
      },[state])



      const handleChange = (event) => {
            setState({
            ...state,
            [event.target.name]: event.target.checked,
            });

      };

  
    
    //   const { LocalTraffic, Boat, Tram, Bus,CommuterTrain, Subway } = useSelector(state => state.Travel.FilteringOptions.TransportMode)
      const { LocalTraffic, Boat, Tram, Bus,CommuterTrain, Subway } = state
  return (
    <div  style={{ width: "100%", marginBottom:"2rem"}}>
        
         <Typography
                    className='flex justify-center'
                    color={'primary'}
                    variant="h6"
                    noWrap
                    component="a"
                    // href="/"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        textTransform: "uppercase",
                        textDecoration: 'none',
                       
                        
                    }}>
                    Choose mode of transport
                </Typography>
                    <FormGroup row className={`flex ${StanderMediaQuery() ? "" : "justify-center"}`}>
                        <FormControlLabel
                            control={
                                <Checkbox  checked={Subway} onChange={handleChange} name="Subway" />
                            }
                            label="Subway"
                            
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={CommuterTrain} onChange={handleChange} name="CommuterTrain" />
                            }
                            label="Commuter train"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={Bus} onChange={handleChange} name="Bus" />
                            }
                            label="Bus"
                        />
                                 <FormControlLabel
                            control={
                                <Checkbox checked={Tram} onChange={handleChange} name="Tram" />
                            }
                            label="Tram"
                        />
                                 <FormControlLabel
                            control={
                                <Checkbox checked={Boat} onChange={handleChange} name="Boat" />
                            }
                            label="Boat"
                        />
                                 <FormControlLabel
                            control={
                                <Checkbox checked={LocalTraffic} onChange={handleChange} name="LocalTraffic" />
                            }
                            label="Local traffic"
                        />
                    </FormGroup>
                </div>
  )
}
