import { Stack, TextField } from '@mui/material'
import {useState} from 'react'
import CustomInput from '../CustomInput'
import { useDispatch, useSelector } from 'react-redux'
import { StanderMediaQuery } from '../../MediaQuery'
import SelectGroup from './SelectGroup'
import { SetTransportChange, SetTravelVia } from '../../../reduxItem/slice/TravelSlice'


export default function InputsGroups(label) {

  const dispatch = useDispatch();
  const { FilteringOptions } = useSelector(state => state.Travel)
  const [searchText, setSearchText] = useState("");


  return (
  
    // <div style={{width:"100%",display:"flex"}}>
      <Stack  width={"100%"} direction={StanderMediaQuery() ? 'column' : 'row'}
        spacing={StanderMediaQuery() ? 2 : 4} position="relative">
        
                    <CustomInput name="SearchTextTo" width="100%" variant="standard" placeholder="Travel via" setObject={SetTravelVia} singelObject={FilteringOptions.TravelVia} searchText={searchText} setSearchText={setSearchText}/>

                    <SelectGroup/>
              
                </Stack>
  )
}
