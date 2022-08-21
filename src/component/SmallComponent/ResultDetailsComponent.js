import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { Stack, width } from '@mui/system';
import Point from '@mui/icons-material/RadioButtonChecked';



export default function ResultDetailsComponent({Element}) {
    return (
        <Box sx={{ flexGrow: 1, marginTop:"2rem"
        }} >
            <Stack direction="row" justifyContent="space-between" sx={{width:"100%"}}>

                <Stack direction="row" sx={{width:"100%"}}>
                    <Stack direction="column" justifyContent="space-between">
                        <Typography variant='h6'>
                            {Element.Origin.time.slice(0, 5)}
                        </Typography>
                        <Typography variant='h7'>
                            15 min change
                        </Typography>
                        <Typography variant='h6'>
                        {Element.Destination.time.slice(0, 5)}
                        </Typography>


                    </Stack>
                    <Typography sx={{ backgroundColor: "green", width: "1rem", borderRadius: "2rem", marginLeft: "0.8rem", marginRight: "0.8rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <Point sx={{ fontSize: "15px", color: "white", marginTop: "0.1rem" }} />
                        <Point sx={{ fontSize: "15px", color: "white", marginBottom: "0.1rem" }} />
                    </Typography>
                    <Stack sx={{ width: "100%", paddingRight: "0.5rem" }} >

                        <Stack direction="row" justifyContent="space-between" >
                            <Typography variant='h6' sx={{fontSize:"1.2rem"}} >
                                {Element.Origin.name}
                            </Typography>
                            <Typography sx={{boxShadow:"rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px", fontSize:"0.8rem", fontWeight:"bold", height:"30px", paddingLeft: "1rem", paddingRight: "1rem", borderRadius: "5px", color: "#3b7ad8",lineHeight:"30px"}}>
                                {`Spår ${Element.Origin.track}`}
                            </Typography>
                            <Typography sx={{boxShadow:"rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",  fontSize:"0.8rem",fontWeight:"bold", height:"30px", paddingLeft: "1rem", paddingRight: "1rem", borderRadius: "5px", color: "#3b7ad8",lineHeight:"30px", marginRight: {sm:"1rem", m:"2rem"}}} >
                                Tåg 43
                            </Typography>

                        </Stack>
                        <Stack sx={{marginTop:"1rem", marginBottom:"1rem", fontWeight:"bold", fontSize:"15px"}}>
                        {`${Element.name} mot ${Element.direction}`}
                        <h1>Visa alla (1 hållplatser)</h1>
                        </Stack>
                        <Typography variant='h6' sx={{fontSize:"1.2rem"}}>
                        {Element.Destination.name}
                        </Typography>
                    </Stack>

                </Stack>
            </Stack>



        </Box>
    );
}
