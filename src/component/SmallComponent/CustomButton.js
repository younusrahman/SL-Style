import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { LoadingButton } from '@mui/lab';
import { Button, Stack } from '@mui/material';
import { width } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux/es/exports'



export default function CustomButton({height, width, OnClick, marginBottom}) {

  const { Loading} = useSelector(state => state.Common)
 

  return (   
 
    
    <LoadingButton
    
    sx={{ width:width, height:height , marginBottom:marginBottom}}
      loadingPosition="start"
      startIcon={<SearchIcon />}
      variant="outlined"
      onClick={() => OnClick()}
      loading={Loading}
    >
      Search
    </LoadingButton>

  )
}
