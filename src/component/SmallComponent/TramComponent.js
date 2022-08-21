import React from 'react'
import TramIcon from '@mui/icons-material/Tram';

export default function TramComponent({color, TramNr}) {
  return (
    <>
    <TramIcon sx={{
        color, 
        paddingLeft:"0.1rem", 
        paddingRight:"0.1rem",
        fontSize: "30px"  }}/>
        <span className=' font-semibold ml-2 mr-2 bg-gray-600 rounded-full pl-2 pr-2 text-white'>{TramNr}</span>
    </>
  )
}
