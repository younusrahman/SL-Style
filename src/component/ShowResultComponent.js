import { Box, Collapse, List } from '@mui/material';
import { Stack } from '@mui/system';
import { useEffect, useState } from 'react'
import { StanderMediaQuery } from './MediaQuery';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import BussComponent from './SmallComponent/BussComponent';

import TrainComponent from './SmallComponent/TrainComponent';
import MetroComponent from './SmallComponent/MetroComponent';
import WalkComponent from './SmallComponent/WalkComponent';
import TramComponent from './SmallComponent/TramComponent';
import ResultDetailsComponent from './SmallComponent/ResultDetailsComponent';
import WeatherComponent from './SmallComponent/WeatherComponent';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ShowResultComponent({ Element }) {
  const [expanded, setExpanded] = useState(false)
  const [transitIcon, setTransitIcon] = useState([])

  const [renderOnce, setRenderOnce] = useState()


  const item = Element;

  function addToArry(value) {
    setTransitIcon(state => [...state, value])

    setTransitIcon(state => [...state, <DoubleArrowIcon sx={{ fontSize: "20px", color: "#3b7ad8" }} />])


  }

  useEffect(() => {
    getitem()
  }, [renderOnce])


  function getitem() {
    item.map((e, index) => {


      switch (e.type) {
        case "WALK":
          addToArry(<WalkComponent />)
          break;



        default:

          // addToArry(listOfTransit[e.Product.catOut.replace(/ /g, '')])

          switch (e.Product.catOut.replace(/ /g, '')) {
            case "TRAIN":
              addToArry(<TrainComponent TrainNr={e.Product.line} />)
              break;
            case "TRAM":
              addToArry(<TramComponent TramNr={e.Product.line} />)
              break
            case "METRO":
              addToArry(<MetroComponent MetroNr={e.Product.line} />)
              break
            case "BUS":
              addToArry(<BussComponent bussNr={e.Product.line} color />)
              break
          }
          break;
      }


    })
  }

  




  const itemOriginName = item[0].Origin.name;
  const itemDestinationName = item[item.length - 1].Destination.name
  
  const itemOriginTime = item[0].Origin.time.slice(0, 5);
  const itemDestinationTime = item[item.length - 1].Destination.time.slice(0, 5);



  const Title = <>{itemOriginName} <DoubleArrowIcon sx={{ fontSize: "20px", color: "#3b7ad8" }} /> {itemDestinationName}</>;

  const subheader = <Stack direction="row" sx={{ justifyContent: "space-between" }}>
    <span>{itemOriginTime} - {itemDestinationTime}</span>
  </Stack>

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (


    <Stack sx={{ boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset", margin: "2rem" }}
      alignItems="center" marginTop="2rem" direction={StanderMediaQuery() ? 'column' : 'row'}
      spacing={StanderMediaQuery() ? 2 : 4} position="relative">
      <Card sx={{ width: "100%", paddingLeft: "1rem", paddingRight: "1rem"}} >
        <Stack direction="row">
        <CardHeader sx={{ paddingBottom: "0.3rem", width:"100%" }}
        
          subheader={subheader}

          title={Title}
          titleTypographyProps={{ variant: 'h6' }}
          subheaderTypographyProps={{ variant: "h6", color: "#3b7ad8" }}/>
          <Stack sx={{paddingTop:"1rem"}}>
          <WeatherComponent/>

          </Stack>


        </Stack>

        <CardContent sx={{ paddingTop: "0", paddingBottom: "0rem" }}>
          <Typography variant="body2" color="text.secondary" sx={{ display: "flex", alignItems: "center" }}>
            {transitIcon.map((e, index) => {


              // if(typeof(e.type.name) !== "undefined"){
              //   setPreValue("e.type.name")
              //   setState( [...groupedQuestions,updatedGroup })


              // }

              if (index == transitIcon.length - 1) {
                return;
              }
              return (
                <span key={index}>{e}</span>
              )

            })}

            {/* <BussComponent bussNr="742" color="red"/> */}
            {/* <DoubleArrowIcon sx={{fontSize:"20px", color:"#3b7ad8"}}/> */}

          </Typography>

        </CardContent>
        <CardActions disableSpacing>

          <ExpandMore
            sx={{ 
              width:"100%",
               borderRadius: "0.5rem", "&.MuiButtonBase-root:hover": {
                bgcolor: "transparent", 
              }
            }}
            disableRipple
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more">
              
            <ExpandMoreIcon sx={{ backgroundColor: "#3b7ad8", borderRadius: "1rem", color: "white"}} />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent sx={{ display: "flex", direction: "row", }}>
            <Stack  sx={{width:"100%"}}>


              {
                item.map((element,index) => {
                  return(
                    element.type === "WALK" ? "":
                    <span key={index}><ResultDetailsComponent Element={element} /> </span>
                  )

                })
              }


            </Stack>
            <Stack sx={{ width: "70%", boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"}} justifyContent="center" alignItems="center">
              map
            </Stack>
          </CardContent>
        </Collapse>
      </Card>
    </Stack>

  )
}




const singelItem = [
  {
    "Origin": {
      "name": "Skogås",
      "type": "ST",
      "id": "A=1@O=Skogås@X=18154237@Y=59218409@U=74@L=400106142@",
      "extId": "400106142",
      "lon": 18.154237,
      "lat": 59.218409,
      "prognosisType": "PROGNOSED",
      "time": "18:33:00",
      "date": "2022-08-17",
      "track": "2",
      "hasMainMast": true,
      "mainMastId": "A=1@O=Skogås (Huddinge)@X=18154129@Y=59218067@U=74@L=300109731@",
      "mainMastExtId": "300109731",
      "additional": false
    },
    "Destination": {
      "name": "Årstaberg",
      "type": "ST",
      "id": "A=1@O=Årstaberg@X=18029107@Y=59300022@U=74@L=400105136@",
      "extId": "400105136",
      "lon": 18.029107,
      "lat": 59.300022,
      "prognosisType": "PROGNOSED",
      "time": "18:48:00",
      "date": "2022-08-17",
      "track": "2",
      "hasMainMast": true,
      "mainMastId": "A=1@O=Årstaberg (Stockholm)@X=18030231@Y=59299231@U=74@L=300109531@",
      "mainMastExtId": "300109531",
      "additional": false
    },
    "JourneyDetailRef": {
      "ref": "1|21528|0|74|17082022"
    },
    "JourneyStatus": "P",
    "Product": {
      "name": "Pendeltåg 43",
      "num": "2558",
      "line": "43",
      "catOut": "TRAIN   ",
      "catIn": "TRN",
      "catCode": "0",
      "catOutS": "TRN",
      "catOutL": "PENDELTÅG ",
      "operatorCode": "SL",
      "operator": "Storstockholms Lokaltrafik",
      "admin": "101043"
    },
    "Stops": null,
    "idx": "0",
    "name": "Pendeltåg 43",
    "number": "2558",
    "category": "TRN",
    "type": "JNY",
    "reachable": true,
    "redirected": false,
    "direction": "Kungsängen"
  },
  {
    "Origin": {
      "name": "Årstaberg",
      "type": "ST",
      "id": "A=1@O=Årstaberg@X=18029107@Y=59300022@U=74@L=400105136@",
      "extId": "400105136",
      "lon": 18.029107,
      "lat": 59.300022,
      "time": "18:49:00",
      "date": "2022-08-17",
      "hasMainMast": true,
      "mainMastId": "A=1@O=Årstaberg (Stockholm)@X=18030231@Y=59299231@U=74@L=300109531@",
      "mainMastExtId": "300109531",
      "additional": false
    },
    "Destination": {
      "name": "Årstaberg",
      "type": "ST",
      "id": "A=1@O=Årstaberg@X=18030042@Y=59299959@U=74@L=510105135@",
      "extId": "510105135",
      "lon": 18.030042,
      "lat": 59.299959,
      "time": "18:51:00",
      "date": "2022-08-17",
      "hasMainMast": true,
      "mainMastId": "A=1@O=Årstaberg (Stockholm)@X=18030231@Y=59299231@U=74@L=300109531@",
      "mainMastExtId": "300109531",
      "additional": false
    },
    "Stops": null,
    "idx": "1",
    "name": "",
    "type": "WALK",
    "reachable": true,
    "redirected": false,
    "duration": "PT2M",
    "dist": 54,
    "hide": true
  },
  {
    "Origin": {
      "name": "Årstaberg",
      "type": "ST",
      "id": "A=1@O=Årstaberg@X=18030042@Y=59299959@U=74@L=510105135@",
      "extId": "510105135",
      "lon": 18.030042,
      "lat": 59.299959,
      "time": "18:51:00",
      "date": "2022-08-17",
      "hasMainMast": true,
      "mainMastId": "A=1@O=Årstaberg (Stockholm)@X=18030231@Y=59299231@U=74@L=300109531@",
      "mainMastExtId": "300109531",
      "additional": false
    },
    "Destination": {
      "name": "Årstaberg",
      "type": "ST",
      "id": "A=1@O=Årstaberg@X=18029422@Y=59299474@U=74@L=400104511@",
      "extId": "400104511",
      "lon": 18.029422,
      "lat": 59.299474,
      "time": "18:53:00",
      "date": "2022-08-17",
      "hasMainMast": true,
      "mainMastId": "A=1@O=Årstaberg (Stockholm)@X=18030231@Y=59299231@U=74@L=300109531@",
      "mainMastExtId": "300109531",
      "additional": false
    },
    "Stops": null,
    "idx": "2",
    "name": "",
    "type": "WALK",
    "reachable": true,
    "redirected": false,
    "duration": "PT2M",
    "dist": 64,
    "hide": true
  },
  {
    "Origin": {
      "name": "Årstaberg",
      "type": "ST",
      "id": "A=1@O=Årstaberg@X=18029422@Y=59299474@U=74@L=400104511@",
      "extId": "400104511",
      "lon": 18.029422,
      "lat": 59.299474,
      "prognosisType": "PROGNOSED",
      "time": "18:53:00",
      "date": "2022-08-17",
      "track": "1",
      "hasMainMast": true,
      "mainMastId": "A=1@O=Årstaberg (Stockholm)@X=18030231@Y=59299231@U=74@L=300109531@",
      "mainMastExtId": "300109531",
      "additional": false
    },
    "Destination": {
      "name": "Liljeholmen",
      "type": "ST",
      "id": "A=1@O=Liljeholmen@X=18024792@Y=59310611@U=74@L=400104515@",
      "extId": "400104515",
      "lon": 18.024792,
      "lat": 59.310611,
      "prognosisType": "PROGNOSED",
      "time": "18:57:00",
      "date": "2022-08-17",
      "track": "5",
      "hasMainMast": true,
      "mainMastId": "A=1@O=Liljeholmen (Stockholm)@X=18024810@Y=59310665@U=74@L=300109294@",
      "mainMastExtId": "300109294",
      "additional": false
    },
    "JourneyDetailRef": {
      "ref": "1|17776|0|74|17082022"
    },
    "JourneyStatus": "P",
    "Product": {
      "name": "Tvärbanan 30",
      "num": "11834",
      "line": "30",
      "catOut": "TRAM    ",
      "catIn": "TRM",
      "catCode": "2",
      "catOutS": "TRM",
      "catOutL": "LOKALTÅG ",
      "operatorCode": "SL",
      "operator": "Storstockholms Lokaltrafik",
      "admin": "101030"
    },
    "Stops": null,
    "idx": "3",
    "name": "Tvärbanan 30",
    "number": "11834",
    "category": "TRM",
    "type": "JNY",
    "reachable": true,
    "redirected": false,
    "direction": "Solna station"
  },
  {
    "Origin": {
      "name": "Liljeholmen",
      "type": "ST",
      "id": "A=1@O=Liljeholmen@X=18024792@Y=59310611@U=74@L=400104515@",
      "extId": "400104515",
      "lon": 18.024792,
      "lat": 59.310611,
      "time": "18:58:00",
      "date": "2022-08-17",
      "hasMainMast": true,
      "mainMastId": "A=1@O=Liljeholmen (Stockholm)@X=18024810@Y=59310665@U=74@L=300109294@",
      "mainMastExtId": "300109294",
      "additional": false
    },
    "Destination": {
      "name": "Liljeholmen",
      "type": "ST",
      "id": "A=1@O=Liljeholmen@X=18022931@Y=59310647@U=74@L=400102604@",
      "extId": "400102604",
      "lon": 18.022931,
      "lat": 59.310647,
      "time": "19:01:00",
      "date": "2022-08-17",
      "hasMainMast": true,
      "mainMastId": "A=1@O=Liljeholmen (Stockholm)@X=18024810@Y=59310665@U=74@L=300109294@",
      "mainMastExtId": "300109294",
      "additional": false
    },
    "Stops": null,
    "idx": "4",
    "name": "",
    "type": "WALK",
    "reachable": true,
    "redirected": false,
    "duration": "PT3M",
    "dist": 106,
    "hide": true
  },
  {
    "Origin": {
      "name": "Liljeholmen",
      "type": "ST",
      "id": "A=1@O=Liljeholmen@X=18022931@Y=59310647@U=74@L=400102604@",
      "extId": "400102604",
      "lon": 18.022931,
      "lat": 59.310647,
      "prognosisType": "PROGNOSED",
      "time": "19:05:00",
      "date": "2022-08-17",
      "track": "5",
      "hasMainMast": true,
      "mainMastId": "A=1@O=Liljeholmen (Stockholm)@X=18024810@Y=59310665@U=74@L=300109294@",
      "mainMastExtId": "300109294",
      "additional": false
    },
    "Destination": {
      "name": "Norsborg",
      "type": "ST",
      "id": "A=1@O=Norsborg@X=17815541@Y=59243741@U=74@L=400102781@",
      "extId": "400102781",
      "lon": 17.815541,
      "lat": 59.243741,
      "prognosisType": "PROGNOSED",
      "time": "19:32:00",
      "date": "2022-08-17",
      "track": "1",
      "hasMainMast": true,
      "mainMastId": "A=1@O=Norsborg (Botkyrka)@X=17814085@Y=59244091@U=74@L=300109280@",
      "mainMastExtId": "300109280",
      "additional": false
    },
    "JourneyDetailRef": {
      "ref": "1|11851|0|74|17082022"
    },
    "JourneyStatus": "P",
    "Product": {
      "name": "tunnelbanans röda linje 13",
      "num": "20723",
      "line": "13",
      "catOut": "METRO",
      "catIn": "MET",
      "catCode": "1",
      "catOutS": "MET",
      "catOutL": "TUNNELBANA ",
      "operatorCode": "SL",
      "operator": "Storstockholms Lokaltrafik",
      "admin": "101013"
    },
    "Stops": null,
    "idx": "5",
    "name": "tunnelbanans röda linje 13",
    "number": "20723",
    "category": "MET",
    "type": "JNY",
    "reachable": true,
    "redirected": false,
    "direction": "Norsborg"
  }
]
