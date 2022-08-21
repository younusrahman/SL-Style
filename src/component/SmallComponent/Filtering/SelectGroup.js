import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux'
import { TextField } from '@mui/material';
import { SetTransportChange } from '../../../reduxItem/slice/TravelSlice'



export default function SelectGroup() {

    const dispatch = useDispatch();
    const [test, setTest] = React.useState("0")
    const { TransportChange } = useSelector(state => state.Travel.FilteringOptions)


  return (
    <Box sx={{ width:"100%" }}>
      <TextField
      fullWidth
        label="Changes"
        select
        variant="standard"
        value={TransportChange}
        onChange={e =>dispatch(SetTransportChange(e.target.value))}>
        <MenuItem value="-1">No limit</MenuItem>
          <MenuItem value="0">No change</MenuItem>
          <MenuItem value="1">Maximum 1 changes</MenuItem>
          <MenuItem value="2">Maximum 2 changes</MenuItem>
          <MenuItem value="3">Maximum 3 changes</MenuItem>

        </TextField>
    </Box>
  );
}


