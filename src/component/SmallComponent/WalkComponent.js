import React from 'react'
import WalkIcon from '@mui/icons-material/DirectionsWalk';
export default function WalkComponent({color, bussNr , key}) {
  return (
    <>
    <WalkIcon sx={{
        color, 
        paddingLeft:"0.1rem", 
        paddingRight:"0.1rem",
        fontSize: "30px"  }}/>
    </>
  )
}
