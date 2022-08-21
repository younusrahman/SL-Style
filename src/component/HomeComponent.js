import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'	
import Stack from '@mui/material/Stack';
import { Tabs, Tab, Typography, Button } from '@mui/material'
import TravelComponent from './TravelComponent';
import DeparturesComponent from './DeparturesComponent';
import ShowResultComponent from './ShowResultComponent';





const HomeComponent = () => {
  const [selectedTab, setSelectedTab] = useState(0)


  return (
    <div>
    <Stack  style={{  backgroundColor: "white", borderRadius:"1rem", marginTop: "3rem", width:"85vw"}} >


    <Typography
      color={'white'}
      className="flex justify-center"

      variant="h5"
      noWrap
      component="a"
      href="/"
      sx={{
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        backgroundColor: "#2e78d5",
        width: "100%",
        padding: "1rem",
        textDecoration: 'none',
        borderTopLeftRadius:"1rem",
        borderTopRightRadius:"1rem"
      }}>
      Storstockholms Lokaltrafik
    </Typography>
    <Tabs value={selectedTab} onChange={(e, val) => setSelectedTab(val)} centered sx={{ paddingTop: "2rem"}}>
      <Tab label="Search Travel" className='background-color: rgb(30 41 59)' />
      <Tab label="Search Departures" />
    </Tabs>

    {selectedTab == 0 ?
      <TravelComponent/> : <DeparturesComponent />}


  </Stack>


</div>

  )
}

export default HomeComponent;