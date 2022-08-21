import {useState} from 'react'
import CustomInput from "./SmallComponent/CustomInput"
import { SetSearchedObject, SetSearchResult } from '../reduxItem/slice/DepartureSlice'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { Stack } from '@mui/material'
import CustomButton from './SmallComponent/CustomButton'
import  {StanderMediaQuery}  from './MediaQuery'

export default function DeparturesComponent() {
  const {SearchedObject, SearchResult} = useSelector(state => state.Departure)
  const [searchText, setSearchText] = useState("");
  
  function handelSearchClick (){
    console.log("handeled")
  }
  return (
    // <Stack direction="row" className="m-5" sx={{backgroundColor:"red"}}>

  <Stack className='p-10' alignItems="center" direction={StanderMediaQuery() ? 'column' : 'row'}
        spacing={StanderMediaQuery() ? 2 : 4} width={StanderMediaQuery() ? "auto" : "65vw"}  position="relative">
      <CustomInput name="SearchTextTo" width="100%" placeholder="Where do you want to go To?" setObject={SetSearchedObject} singelObject={SearchedObject} searchText={searchText} setSearchText={setSearchText}/>


      <CustomButton width={StanderMediaQuery() ? "40vw" : "15vw"} height="100%" handelSearchClick={handelSearchClick}/>
  </Stack>
  )
}
