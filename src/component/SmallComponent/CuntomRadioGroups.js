import {useState, useEffect} from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Button, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import moment from 'moment';

import { useDispatch, useSelector } from 'react-redux'

import { StanderMediaQuery } from '../MediaQuery';
import { SetTravelTime } from 'reduxItem/slice/TravelSlice';


export default function CustomRadioGroups() {

    const [allValues, setAllValues] = useState({
        selectedRadioButton: '0',
        datetime: moment().format().substring(0, 16)
     });


    const {Time} = useSelector(state => state.Travel)
    const dispatch = useDispatch()
    

    var today = new Date()

    const CurrentDateTime = today.getFullYear() + '-' + (today.getMonth().length == "1" ? "0"+today.getMonth() : today.getMonth()) + '-' + today.getDate()+ "T"+ today.getHours() + ":"+today.getMinutes() ;
    
    useEffect(() =>{
        dispatch(SetTravelTime(allValues))

    }, [allValues])
 

    function handelOnChange(e){

        setAllValues({...allValues, [e.target.name]: e.target.value})   

        

        
    }
    

    return (
        // <Stack direction="row" className='p-10' sx={{ display: "flex", justifyContent: "space-between" }}>
        <Stack className="pr-10 pl-10" sx={{ display: "flex"}}
            
            justifyContent ={ StanderMediaQuery() ? "": 'space-between' }
            alignItems={ StanderMediaQuery() ? "center": '' }
          direction={ StanderMediaQuery() ? 'column': 'row' }
            spacing={StanderMediaQuery() ? 2 : 4} style={{ width: "100%" }}>
        <FormControl sx={{ display: "flex", justifyContent: "center"}}>
            <RadioGroup
                name="selectedRadioButton"
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                value={allValues.selectedRadioButton }
                onChange={handelOnChange}>
                <FormControlLabel value="0" control={<Radio />} label="Ride Now" />
                <FormControlLabel value="1" control={<Radio />} label="Departure time" />
                <FormControlLabel value="2" control={<Radio />} label="Time of arrival" />
            </RadioGroup>
        </FormControl>
        <TextField
                name="datetime"
                className={allValues.selectedRadioButton != "0"  ? "visible" :"invisible"}
                id="datetime-local"
                label="Date Time"
                type="datetime-local"
                defaultValue={allValues.datetime}
                onChange={handelOnChange}
                sx={{minWidth:"36vw"}}

                
                
                InputLabelProps={{
                    shrink: true
                }}
            />



    </Stack>

    )
}
