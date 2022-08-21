import {useState} from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Button, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import moment from 'moment';

import { StanderMediaQuery } from '../MediaQuery';


export default function CustomRadioGroups() {

    const [selectedRadioButton, setSelectedRadioButton] = useState("1")
    
    

    var today = new Date()

    const CurrentDateTime = today.getFullYear() + '-' + (today.getMonth().length == "1" ? "0"+today.getMonth() : today.getMonth()) + '-' + today.getDate()+ "T"+ today.getHours() + ":"+today.getMinutes() ;

 
    

    return (
        // <Stack direction="row" className='p-10' sx={{ display: "flex", justifyContent: "space-between" }}>
        <Stack className="pr-10 pl-10" sx={{ display: "flex"}}
            
            justifyContent ={ StanderMediaQuery() ? "": 'space-between' }
            alignItems={ StanderMediaQuery() ? "center": '' }
          direction={ StanderMediaQuery() ? 'column': 'row' }
            spacing={StanderMediaQuery() ? 2 : 4} style={{ width: "100%" }}>
        <FormControl sx={{ display: "flex", justifyContent: "center"}}>
            <RadioGroup
                
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={selectedRadioButton}
                onChange={(e, value) => setSelectedRadioButton(value)}>
                <FormControlLabel value="1" control={<Radio />} label="Ride Now" />
                <FormControlLabel value="2" control={<Radio />} label="Departure time" />
                <FormControlLabel value="3" control={<Radio />} label="Time of arrival" />
            </RadioGroup>
        </FormControl>
        <TextField

                className={selectedRadioButton != "1"  ? "visible" :"invisible"}
                id="datetime-local"
                label="Date Time"
                type="datetime-local"
                defaultValue={moment().format().substring(0, 16) }
                sx={{minWidth:"36vw"}}

                
                
                InputLabelProps={{
                    shrink: true
                }}
            />

    </Stack>

    )
}
