import { useState, useEffect } from 'react'
import { Box } from '@mui/system'
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import CustomInput from 'component/SmallComponent/CustomInput'
import { useDispatch, useSelector } from 'react-redux'
import { SetSeachResult, SetFromObject,SetToObject, SwapObjects} from "../reduxItem/slice/TravelSlice"
import { StanderMediaQuery } from 'component/MediaQuery';
import { Button, Stack, Typography } from '@mui/material'
import CustomRadioGroups from 'component/SmallComponent/CuntomRadioGroups';
import CollapseFilter from 'component/SmallComponent/Filtering/CollapseFilter';
import CustomButton from 'component/SmallComponent/CustomButton';
import { SLTravelPlanner } from './SLUrls';
import ShowResultComponent from './ShowResultComponent';
import { SetFailed, SetLoading} from 'reduxItem/slice/CommonSlice'
import moment from 'moment';
export default function TravelComponent() {

  const dispatch = useDispatch();
  const {SearchResult, FromObject, ToObject, Time} = useSelector(state => state.Travel)
  const { Loading, HasErrors, ErrorDetails} = useSelector(state => state.Common)

 const [searchTextFrom, setsearchTextFrom] = useState("")
 const [SearchTextTo, setsearchTextTo] = useState("")
 
 const GotResult = SearchResult;


 const [allValues, setAllValues] = useState({
    separateDate:  "",
    separateTime: ""
 });

 const handelSwapeInputs = ()=>{
    // console.log(Time.Time.toString().substring(11,16))
  const preValue = searchTextFrom;
  setsearchTextFrom (SearchTextTo);
  setsearchTextTo (preValue)
  dispatch(SwapObjects())

 }

 const test = {}
const handelSearchClick = () =>{
    // console.log(Object.keys(test).length === 0)


    if (FromObject === "" || ToObject == "") return false;




 async function fetchData() {
    dispatch(SetLoading(false))

    try {




        // if(Object.keys(Time).length != 0){
        //     setAllValues({...allValues, separateDate: Time.Time.toString().substring(0, 10)})
        // setAllValues({...allValues, separateTime: Time.Time.toString().substring(11,16)})

        // }
        setAllValues({...allValues, separateDate: "Time.Time.toString().substring(0, 10)"})
        // setAllValues({...allValues, separateTime: "Time.Time.toString().substring(11,16)"})

        const UserSelectedAnyTime = Object.keys(Time).length != 0 
        const separateDate =  UserSelectedAnyTime ?  Time.Time.toString().substring(0, 10) : 0
        const separateTime = UserSelectedAnyTime ?  Time.Time.toString().substring(11,16) : 0

        

  
        const response = await fetch(
            
            UserSelectedAnyTime ?             
            SLTravelPlanner(FromObject.SiteId, ToObject.SiteId, separateDate, separateTime, Time.ValueNr):
            SLTravelPlanner(FromObject.SiteId, ToObject.SiteId)
        );

        const data = await response.json()
        SetFailed("Could not add data to redux")
        dispatch(SetSeachResult(data.Trip))
        dispatch(SetLoading(false))     
    } catch (e) {
        console.error(e);
        SetFailed("Could not fetch data")
    }
};
fetchData();
}

  return (
    <>
    <Box>

      <Stack className='p-10' alignItems="center" direction={StanderMediaQuery() ? 'column' : 'row'}
        spacing={StanderMediaQuery() ? 2 : 4}  position="relative">

        <CustomInput name="SearchBoxFrom" width='100%' placeholder="Where do you want to go from?" setObject={SetFromObject} singelObject={FromObject} searchText={searchTextFrom} setSearchText={setsearchTextFrom}/>
        <Button position="absolute" onClick={() => handelSwapeInputs()}><SyncAltIcon sx={{ fontSize: "2rem" }} color={'primary'} /></Button>
        <CustomInput name="SearchTextTo"  width="100%"  placeholder="Where do you want to go To?" setObject={SetToObject} singelObject={ToObject} searchText={SearchTextTo} setSearchText={setsearchTextTo}/>
      </Stack>

      <CustomRadioGroups />
      
      <CollapseFilter/>
      <Stack sx={{width:"100%", display:"flex", alignItems:"center"}}>
      <CustomButton marginBottom="1rem"width="50%" height="3rem" justifyContent="center" OnClick={handelSearchClick}/>
      <Typography marginBottom="1rem" varient="h5" color="red" fontWeight="bold">{ErrorDetails}</Typography>
      </Stack>

    </Box>
   {/* <ShowResultComponent/>
   <ShowResultComponent/>
   <ShowResultComponent/>
   <ShowResultComponent/> */}
 
    {/* 
    */}
    {
        GotResult.map((element , index) => {
            return <span key={index}><ShowResultComponent Element={element.LegList.Leg}/> </span> 
        })
    }
  
    
    </>
  )
}







 const Trip = [
      {
          
          "LegList": {
              "Leg": [
                  {
                      "Origin": {
                          "name": "Skog??s centrum",
                          "type": "ST",
                          "id": "A=1@O=Skog??s centrum@X=18153994@Y=59218184@U=74@L=400170620@",
                          "extId": "400170620",
                          "lon": 18.153994,
                          "lat": 59.218184,
                          "prognosisType": "PROGNOSED",
                          "time": "18:26:00",
                          "date": "2022-08-17",
                          "track": "B",
                          "hasMainMast": true,
                          "mainMastId": "A=1@O=Skog??s (Huddinge)@X=18154129@Y=59218067@U=74@L=300109731@",
                          "mainMastExtId": "300109731",
                          "additional": false
                      },
                      "Destination": {
                          "name": "Flemingsbergs station",
                          "type": "ST",
                          "id": "A=1@O=Flemingsbergs station@X=17948312@Y=59220890@U=74@L=400170743@",
                          "extId": "400170743",
                          "lon": 17.948312,
                          "lat": 59.22089,
                          "prognosisType": "PROGNOSED",
                          "time": "18:59:00",
                          "date": "2022-08-17",
                          "track": "A",
                          "hasMainMast": true,
                          "mainMastId": "A=1@O=H??lsov??gen (Huddinge)@X=17947988@Y=59219236@U=74@L=300107005@",
                          "mainMastExtId": "300107005",
                          "additional": false
                      },
                      "JourneyDetailRef": {
                          "ref": "1|93511|0|74|17082022"
                      },
                      "JourneyStatus": "P",
                      "Product": {
                          "name": "buss 742",
                          "num": "30684",
                          "line": "742",
                          "catOut": "BUS     ",
                          "catIn": "BUS",
                          "catCode": "3",
                          "catOutS": "BUS",
                          "catOutL": "BUSS ",
                          "operatorCode": "SL",
                          "operator": "Storstockholms Lokaltrafik",
                          "admin": "100742"
                      },
                      "Stops": null,
                      "idx": "0",
                      "name": "buss 742",
                      "number": "30684",
                      "category": "BUS",
                      "type": "JNY",
                      "reachable": true,
                      "redirected": false,
                      "direction": "Huddinge sjukhus"
                  },

                  {
                      "Origin": {
                          "name": "Flemingsbergs station",
                          "type": "ST",
                          "id": "A=1@O=Flemingsbergs station@X=17948312@Y=59220890@U=74@L=400170743@",
                          "extId": "400170743",
                          "lon": 17.948312,
                          "lat": 59.22089,
                          "prognosisType": "PROGNOSED",
                          "time": "19:06:00",
                          "date": "2022-08-17",
                          "track": "A",
                          "rtTime": "19:15:00",
                          "rtDate": "2022-08-17",
                          "hasMainMast": true,
                          "mainMastId": "A=1@O=H??lsov??gen (Huddinge)@X=17947988@Y=59219236@U=74@L=300107005@",
                          "mainMastExtId": "300107005",
                          "additional": false
                      },
                      "Destination": {
                          "name": "Norsborg",
                          "type": "ST",
                          "id": "A=1@O=Norsborg@X=17813717@Y=59244037@U=74@L=400170109@",
                          "extId": "400170109",
                          "lon": 17.813717,
                          "lat": 59.244037,
                          "prognosisType": "PROGNOSED",
                          "time": "19:34:00",
                          "date": "2022-08-17",
                          "rtTime": "19:37:00",
                          "rtDate": "2022-08-17",
                          "hasMainMast": true,
                          "mainMastId": "A=1@O=Norsborg (Botkyrka)@X=17814085@Y=59244091@U=74@L=300109280@",
                          "mainMastExtId": "300109280",
                          "additional": false
                      },
                      "JourneyDetailRef": {
                          "ref": "1|44979|0|74|17082022"
                      },
                      "JourneyStatus": "P",
                      "Product": {
                          "name": "bl??buss 172",
                          "num": "17446",
                          "line": "172",
                          "catOut": "BUS     ",
                          "catIn": "BUS",
                          "catCode": "3",
                          "catOutS": "BUS",
                          "catOutL": "BUSS ",
                          "operatorCode": "SL",
                          "operator": "Storstockholms Lokaltrafik",
                          "admin": "100172"
                      },
                      "Stops": null,
                      "idx": "1",
                      "name": "bl??buss 172",
                      "number": "17446",
                      "category": "BUS",
                      "type": "JNY",
                      "reachable": true,
                      "redirected": false,
                      "direction": "Norsborg"
                  }
              ]
          }
      },
      {
          
          "LegList": {
              "Leg": [
                  {
                      "Origin": {
                          "name": "Skog??s",
                          "type": "ST",
                          "id": "A=1@O=Skog??s@X=18154237@Y=59218409@U=74@L=400106142@",
                          "extId": "400106142",
                          "lon": 18.154237,
                          "lat": 59.218409,
                          "prognosisType": "PROGNOSED",
                          "time": "18:33:00",
                          "date": "2022-08-17",
                          "track": "2",
                          "hasMainMast": true,
                          "mainMastId": "A=1@O=Skog??s (Huddinge)@X=18154129@Y=59218067@U=74@L=300109731@",
                          "mainMastExtId": "300109731",
                          "additional": false
                      },
                      "Destination": {
                          "name": "??rstaberg",
                          "type": "ST",
                          "id": "A=1@O=??rstaberg@X=18029107@Y=59300022@U=74@L=400105136@",
                          "extId": "400105136",
                          "lon": 18.029107,
                          "lat": 59.300022,
                          "prognosisType": "PROGNOSED",
                          "time": "18:48:00",
                          "date": "2022-08-17",
                          "track": "2",
                          "hasMainMast": true,
                          "mainMastId": "A=1@O=??rstaberg (Stockholm)@X=18030231@Y=59299231@U=74@L=300109531@",
                          "mainMastExtId": "300109531",
                          "additional": false
                      },
                      "JourneyDetailRef": {
                          "ref": "1|21528|0|74|17082022"
                      },
                      "JourneyStatus": "P",
                      "Product": {
                          "name": "Pendelt??g 43",
                          "num": "2558",
                          "line": "43",
                          "catOut": "TRAIN   ",
                          "catIn": "TRN",
                          "catCode": "0",
                          "catOutS": "TRN",
                          "catOutL": "PENDELT??G ",
                          "operatorCode": "SL",
                          "operator": "Storstockholms Lokaltrafik",
                          "admin": "101043"
                      },
                      "Stops": null,
                      "idx": "0",
                      "name": "Pendelt??g 43",
                      "number": "2558",
                      "category": "TRN",
                      "type": "JNY",
                      "reachable": true,
                      "redirected": false,
                      "direction": "Kungs??ngen"
                  },
                  {
                      "Origin": {
                          "name": "??rstaberg",
                          "type": "ST",
                          "id": "A=1@O=??rstaberg@X=18029107@Y=59300022@U=74@L=400105136@",
                          "extId": "400105136",
                          "lon": 18.029107,
                          "lat": 59.300022,
                          "time": "18:49:00",
                          "date": "2022-08-17",
                          "hasMainMast": true,
                          "mainMastId": "A=1@O=??rstaberg (Stockholm)@X=18030231@Y=59299231@U=74@L=300109531@",
                          "mainMastExtId": "300109531",
                          "additional": false
                      },
                      "Destination": {
                          "name": "??rstaberg",
                          "type": "ST",
                          "id": "A=1@O=??rstaberg@X=18030042@Y=59299959@U=74@L=510105135@",
                          "extId": "510105135",
                          "lon": 18.030042,
                          "lat": 59.299959,
                          "time": "18:51:00",
                          "date": "2022-08-17",
                          "hasMainMast": true,
                          "mainMastId": "A=1@O=??rstaberg (Stockholm)@X=18030231@Y=59299231@U=74@L=300109531@",
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
                          "name": "??rstaberg",
                          "type": "ST",
                          "id": "A=1@O=??rstaberg@X=18030042@Y=59299959@U=74@L=510105135@",
                          "extId": "510105135",
                          "lon": 18.030042,
                          "lat": 59.299959,
                          "time": "18:51:00",
                          "date": "2022-08-17",
                          "hasMainMast": true,
                          "mainMastId": "A=1@O=??rstaberg (Stockholm)@X=18030231@Y=59299231@U=74@L=300109531@",
                          "mainMastExtId": "300109531",
                          "additional": false
                      },
                      "Destination": {
                          "name": "??rstaberg",
                          "type": "ST",
                          "id": "A=1@O=??rstaberg@X=18029422@Y=59299474@U=74@L=400104511@",
                          "extId": "400104511",
                          "lon": 18.029422,
                          "lat": 59.299474,
                          "time": "18:53:00",
                          "date": "2022-08-17",
                          "hasMainMast": true,
                          "mainMastId": "A=1@O=??rstaberg (Stockholm)@X=18030231@Y=59299231@U=74@L=300109531@",
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
                          "name": "??rstaberg",
                          "type": "ST",
                          "id": "A=1@O=??rstaberg@X=18029422@Y=59299474@U=74@L=400104511@",
                          "extId": "400104511",
                          "lon": 18.029422,
                          "lat": 59.299474,
                          "prognosisType": "PROGNOSED",
                          "time": "18:53:00",
                          "date": "2022-08-17",
                          "track": "1",
                          "hasMainMast": true,
                          "mainMastId": "A=1@O=??rstaberg (Stockholm)@X=18030231@Y=59299231@U=74@L=300109531@",
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
                          "name": "Tv??rbanan 30",
                          "num": "11834",
                          "line": "30",
                          "catOut": "TRAM    ",
                          "catIn": "TRM",
                          "catCode": "2",
                          "catOutS": "TRM",
                          "catOutL": "LOKALT??G ",
                          "operatorCode": "SL",
                          "operator": "Storstockholms Lokaltrafik",
                          "admin": "101030"
                      },
                      "Stops": null,
                      "idx": "3",
                      "name": "Tv??rbanan 30",
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
                          "name": "tunnelbanans r??da linje 13",
                          "num": "20723",
                          "line": "13",
                          "catOut": "METRO   ",
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
                      "name": "tunnelbanans r??da linje 13",
                      "number": "20723",
                      "category": "MET",
                      "type": "JNY",
                      "reachable": true,
                      "redirected": false,
                      "direction": "Norsborg"
                  }
              ]
          }
      },
      {
         
          "LegList": {
              "Leg": [
                  {
                      "Origin": {
                          "name": "Skog??s",
                          "type": "ST",
                          "id": "A=1@O=Skog??s@X=18154237@Y=59218409@U=74@L=400106142@",
                          "extId": "400106142",
                          "lon": 18.154237,
                          "lat": 59.218409,
                          "prognosisType": "PROGNOSED",
                          "time": "18:33:00",
                          "date": "2022-08-17",
                          "track": "2",
                          "hasMainMast": true,
                          "mainMastId": "A=1@O=Skog??s (Huddinge)@X=18154129@Y=59218067@U=74@L=300109731@",
                          "mainMastExtId": "300109731",
                          "additional": false
                      },
                      "Destination": {
                          "name": "Stockholms s??dra",
                          "type": "ST",
                          "id": "A=1@O=Stockholms s??dra@X=18061819@Y=59313542@U=74@L=400105132@",
                          "extId": "400105132",
                          "lon": 18.061819,
                          "lat": 59.313542,
                          "prognosisType": "PROGNOSED",
                          "time": "18:51:00",
                          "date": "2022-08-17",
                          "track": "1",
                          "hasMainMast": true,
                          "mainMastId": "A=1@O=S??dra station(p?? Swedenborgsg) (Stockholm)@X=18065064@Y=59314099@U=74@L=300101339@",
                          "mainMastExtId": "300101339",
                          "additional": false
                      },
                      "JourneyDetailRef": {
                          "ref": "1|21528|0|74|17082022"
                      },
                      "JourneyStatus": "P",
                      "Product": {
                          "name": "Pendelt??g 43",
                          "num": "2558",
                          "line": "43",
                          "catOut": "TRAIN   ",
                          "catIn": "TRN",
                          "catCode": "0",
                          "catOutS": "TRN",
                          "catOutL": "PENDELT??G ",
                          "operatorCode": "SL",
                          "operator": "Storstockholms Lokaltrafik",
                          "admin": "101043"
                      },
                      "Stops": null,
                      "idx": "0",
                      "name": "Pendelt??g 43",
                      "number": "2558",
                      "category": "TRN",
                      "type": "JNY",
                      "reachable": true,
                      "redirected": false,
                      "direction": "Kungs??ngen"
                  },
                  {
                      "Origin": {
                          "name": "Stockholms s??dra",
                          "type": "ST",
                          "id": "A=1@O=Stockholms s??dra@X=18061819@Y=59313542@U=74@L=400105132@",
                          "extId": "400105132",
                          "lon": 18.061819,
                          "lat": 59.313542,
                          "time": "18:52:00",
                          "date": "2022-08-17",
                          "hasMainMast": true,
                          "mainMastId": "A=1@O=S??dra station(p?? Swedenborgsg) (Stockholm)@X=18065064@Y=59314099@U=74@L=300101339@",
                          "mainMastExtId": "300101339",
                          "additional": false
                      },
                      "Destination": {
                          "name": "Mariatorget",
                          "type": "ST",
                          "id": "A=1@O=Mariatorget@X=18062115@Y=59317012@U=74@L=400102512@",
                          "extId": "400102512",
                          "lon": 18.062115,
                          "lat": 59.317012,
                          "time": "19:03:00",
                          "date": "2022-08-17",
                          "hasMainMast": true,
                          "mainMastId": "A=1@O=Mariatorget (t-banan) (Stockholm)@X=18062115@Y=59317012@U=74@L=300109297@",
                          "mainMastExtId": "300109297",
                          "additional": false
                      },
                      "Stops": null,
                      "idx": "1",
                      "name": "",
                      "type": "WALK",
                      "reachable": true,
                      "redirected": false,
                      "duration": "PT11M",
                      "dist": 386
                  },
                  {
                      "Origin": {
                          "name": "Mariatorget",
                          "type": "ST",
                          "id": "A=1@O=Mariatorget@X=18062115@Y=59317012@U=74@L=400102512@",
                          "extId": "400102512",
                          "lon": 18.062115,
                          "lat": 59.317012,
                          "prognosisType": "PROGNOSED",
                          "time": "19:09:00",
                          "date": "2022-08-17",
                          "track": "2",
                          "hasMainMast": true,
                          "mainMastId": "A=1@O=Mariatorget (t-banan) (Stockholm)@X=18062115@Y=59317012@U=74@L=300109297@",
                          "mainMastExtId": "300109297",
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
                          "time": "19:41:00",
                          "date": "2022-08-17",
                          "track": "1",
                          "hasMainMast": true,
                          "mainMastId": "A=1@O=Norsborg (Botkyrka)@X=17814085@Y=59244091@U=74@L=300109280@",
                          "mainMastExtId": "300109280",
                          "additional": false
                      },
                      "JourneyDetailRef": {
                          "ref": "1|11852|0|74|17082022"
                      },
                      "Messages": {
                          "Message": [
                              {
                                  "id": "109381348",
                                  "act": true,
                                  "head": "Information",
                                  "text": "Mariatorget: Hissen mot Swedenborgsgatan, till och fr??n biljetthallen ??r avst??ngd pga tekniskt fel. H??nvisning till den andra entr??n",
                                  "category": "0",
                                  "priority": 60,
                                  "products": 65535,
                                  "sTime": "16:55:00",
                                  "sDate": "2022-08-10",
                                  "eTime": "23:30:00",
                                  "eDate": "2022-08-24"
                              }
                          ]
                      },
                      "JourneyStatus": "P",
                      "Product": {
                          "name": "tunnelbanans r??da linje 13",
                          "num": "20724",
                          "line": "13",
                          "catOut": "METRO   ",
                          "catIn": "MET",
                          "catCode": "1",
                          "catOutS": "MET",
                          "catOutL": "TUNNELBANA ",
                          "operatorCode": "SL",
                          "operator": "Storstockholms Lokaltrafik",
                          "admin": "100013"
                      },
                      "Stops": null,
                      "idx": "2",
                      "name": "tunnelbanans r??da linje 13",
                      "number": "20724",
                      "category": "MET",
                      "type": "JNY",
                      "reachable": true,
                      "redirected": false,
                      "direction": "Norsborg"
                  }
              ]
          }
      },
      {
          
          "LegList": {
              "Leg": [
                  {
                      "Origin": {
                          "name": "Skog??s",
                          "type": "ST",
                          "id": "A=1@O=Skog??s@X=18154237@Y=59218409@U=74@L=400106142@",
                          "extId": "400106142",
                          "lon": 18.154237,
                          "lat": 59.218409,
                          "prognosisType": "PROGNOSED",
                          "time": "18:48:00",
                          "date": "2022-08-17",
                          "track": "2",
                          "hasMainMast": true,
                          "mainMastId": "A=1@O=Skog??s (Huddinge)@X=18154129@Y=59218067@U=74@L=300109731@",
                          "mainMastExtId": "300109731",
                          "additional": false
                      },
                      "Destination": {
                          "name": "Stockholms s??dra",
                          "type": "ST",
                          "id": "A=1@O=Stockholms s??dra@X=18061819@Y=59313542@U=74@L=400105132@",
                          "extId": "400105132",
                          "lon": 18.061819,
                          "lat": 59.313542,
                          "prognosisType": "PROGNOSED",
                          "time": "19:06:00",
                          "date": "2022-08-17",
                          "track": "1",
                          "hasMainMast": true,
                          "mainMastId": "A=1@O=S??dra station(p?? Swedenborgsg) (Stockholm)@X=18065064@Y=59314099@U=74@L=300101339@",
                          "mainMastExtId": "300101339",
                          "additional": false
                      },
                      "JourneyDetailRef": {
                          "ref": "1|21644|1|74|17082022"
                      },
                      "JourneyStatus": "P",
                      "Product": {
                          "name": "Pendelt??g 43",
                          "num": "2860",
                          "line": "43",
                          "catOut": "TRAIN   ",
                          "catIn": "TRN",
                          "catCode": "0",
                          "catOutS": "TRN",
                          "catOutL": "PENDELT??G ",
                          "operatorCode": "SL",
                          "operator": "Storstockholms Lokaltrafik",
                          "admin": "103043"
                      },
                      "Stops": null,
                      "idx": "0",
                      "name": "Pendelt??g 43",
                      "number": "2860",
                      "category": "TRN",
                      "type": "JNY",
                      "reachable": true,
                      "redirected": false,
                      "direction": "B??lsta"
                  },
                  {
                      "Origin": {
                          "name": "Stockholms s??dra",
                          "type": "ST",
                          "id": "A=1@O=Stockholms s??dra@X=18061819@Y=59313542@U=74@L=400105132@",
                          "extId": "400105132",
                          "lon": 18.061819,
                          "lat": 59.313542,
                          "time": "19:07:00",
                          "date": "2022-08-17",
                          "hasMainMast": true,
                          "mainMastId": "A=1@O=S??dra station(p?? Swedenborgsg) (Stockholm)@X=18065064@Y=59314099@U=74@L=300101339@",
                          "mainMastExtId": "300101339",
                          "additional": false
                      },
                      "Destination": {
                          "name": "Mariatorget",
                          "type": "ST",
                          "id": "A=1@O=Mariatorget@X=18062115@Y=59317012@U=74@L=400102512@",
                          "extId": "400102512",
                          "lon": 18.062115,
                          "lat": 59.317012,
                          "time": "19:18:00",
                          "date": "2022-08-17",
                          "hasMainMast": true,
                          "mainMastId": "A=1@O=Mariatorget (t-banan) (Stockholm)@X=18062115@Y=59317012@U=74@L=300109297@",
                          "mainMastExtId": "300109297",
                          "additional": false
                      },
                      "Stops": null,
                      "idx": "1",
                      "name": "",
                      "type": "WALK",
                      "reachable": true,
                      "redirected": false,
                      "duration": "PT11M",
                      "dist": 386
                  },
                  {
                      "Origin": {
                          "name": "Mariatorget",
                          "type": "ST",
                          "id": "A=1@O=Mariatorget@X=18062115@Y=59317012@U=74@L=400102512@",
                          "extId": "400102512",
                          "lon": 18.062115,
                          "lat": 59.317012,
                          "prognosisType": "PROGNOSED",
                          "time": "19:19:00",
                          "date": "2022-08-17",
                          "track": "2",
                          "hasMainMast": true,
                          "mainMastId": "A=1@O=Mariatorget (t-banan) (Stockholm)@X=18062115@Y=59317012@U=74@L=300109297@",
                          "mainMastExtId": "300109297",
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
                          "time": "19:51:00",
                          "date": "2022-08-17",
                          "track": "1",
                          "hasMainMast": true,
                          "mainMastId": "A=1@O=Norsborg (Botkyrka)@X=17814085@Y=59244091@U=74@L=300109280@",
                          "mainMastExtId": "300109280",
                          "additional": false
                      },
                      "JourneyDetailRef": {
                          "ref": "1|11852|1|74|17082022"
                      },
                      "Messages": {
                          "Message": [
                              {
                                  "id": "109381348",
                                  "act": true,
                                  "head": "Information",
                                  "text": "Mariatorget: Hissen mot Swedenborgsgatan, till och fr??n biljetthallen ??r avst??ngd pga tekniskt fel. H??nvisning till den andra entr??n",
                                  "category": "0",
                                  "priority": 60,
                                  "products": 65535,
                                  "sTime": "16:55:00",
                                  "sDate": "2022-08-10",
                                  "eTime": "23:30:00",
                                  "eDate": "2022-08-24"
                              }
                          ]
                      },
                      "JourneyStatus": "P",
                      "Product": {
                          "name": "tunnelbanans r??da linje 13",
                          "num": "20725",
                          "line": "13",
                          "catOut": "METRO   ",
                          "catIn": "MET",
                          "catCode": "1",
                          "catOutS": "MET",
                          "catOutL": "TUNNELBANA ",
                          "operatorCode": "SL",
                          "operator": "Storstockholms Lokaltrafik",
                          "admin": "100013"
                      },
                      "Stops": null,
                      "idx": "2",
                      "name": "tunnelbanans r??da linje 13",
                      "number": "20725",
                      "category": "MET",
                      "type": "JNY",
                      "reachable": true,
                      "redirected": false,
                      "direction": "Norsborg"
                  }
              ]
          }

      },
      {
          
          "LegList": {
              "Leg": [
                  {
                      "Origin": {
                          "name": "Skog??s centrum",
                          "type": "ST",
                          "id": "A=1@O=Skog??s centrum@X=18153994@Y=59218184@U=74@L=400170620@",
                          "extId": "400170620",
                          "lon": 18.153994,
                          "lat": 59.218184,
                          "prognosisType": "PROGNOSED",
                          "time": "18:56:00",
                          "date": "2022-08-17",
                          "track": "B",
                          "hasMainMast": true,
                          "mainMastId": "A=1@O=Skog??s (Huddinge)@X=18154129@Y=59218067@U=74@L=300109731@",
                          "mainMastExtId": "300109731",
                          "additional": false
                      },
                      "Destination": {
                          "name": "Flemingsbergs station",
                          "type": "ST",
                          "id": "A=1@O=Flemingsbergs station@X=17948312@Y=59220890@U=74@L=400170743@",
                          "extId": "400170743",
                          "lon": 17.948312,
                          "lat": 59.22089,
                          "prognosisType": "PROGNOSED",
                          "time": "19:27:00",
                          "date": "2022-08-17",
                          "track": "A",
                          "hasMainMast": true,
                          "mainMastId": "A=1@O=H??lsov??gen (Huddinge)@X=17947988@Y=59219236@U=74@L=300107005@",
                          "mainMastExtId": "300107005",
                          "additional": false
                      },
                      "JourneyDetailRef": {
                          "ref": "1|93513|0|74|17082022"
                      },
                      "JourneyStatus": "P",
                      "Product": {
                          "name": "buss 742",
                          "num": "30685",
                          "line": "742",
                          "catOut": "BUS     ",
                          "catIn": "BUS",
                          "catCode": "3",
                          "catOutS": "BUS",
                          "catOutL": "BUSS ",
                          "operatorCode": "SL",
                          "operator": "Storstockholms Lokaltrafik",
                          "admin": "100742"
                      },
                      "Stops": null,
                      "idx": "0",
                      "name": "buss 742",
                      "number": "30685",
                      "category": "BUS",
                      "type": "JNY",
                      "reachable": true,
                      "redirected": false,
                      "direction": "Huddinge sjukhus"
                  },
                  {
                      "Origin": {
                          "name": "Flemingsbergs station",
                          "type": "ST",
                          "id": "A=1@O=Flemingsbergs station@X=17948312@Y=59220890@U=74@L=400170743@",
                          "extId": "400170743",
                          "lon": 17.948312,
                          "lat": 59.22089,
                          "prognosisType": "PROGNOSED",
                          "time": "19:36:00",
                          "date": "2022-08-17",
                          "track": "A",
                          "hasMainMast": true,
                          "mainMastId": "A=1@O=H??lsov??gen (Huddinge)@X=17947988@Y=59219236@U=74@L=300107005@",
                          "mainMastExtId": "300107005",
                          "additional": false
                      },
                      "Destination": {
                          "name": "Norsborg",
                          "type": "ST",
                          "id": "A=1@O=Norsborg@X=17813717@Y=59244037@U=74@L=400170109@",
                          "extId": "400170109",
                          "lon": 17.813717,
                          "lat": 59.244037,
                          "prognosisType": "PROGNOSED",
                          "time": "20:04:00",
                          "date": "2022-08-17",
                          "hasMainMast": true,
                          "mainMastId": "A=1@O=Norsborg (Botkyrka)@X=17814085@Y=59244091@U=74@L=300109280@",
                          "mainMastExtId": "300109280",
                          "additional": false
                      },
                      "JourneyDetailRef": {
                          "ref": "1|44979|2|74|17082022"
                      },
                      "JourneyStatus": "P",
                      "Product": {
                          "name": "bl??buss 172",
                          "num": "17448",
                          "line": "172",
                          "catOut": "BUS     ",
                          "catIn": "BUS",
                          "catCode": "3",
                          "catOutS": "BUS",
                          "catOutL": "BUSS ",
                          "operatorCode": "SL",
                          "operator": "Storstockholms Lokaltrafik",
                          "admin": "100172"
                      },
                      "Stops": null,
                      "idx": "1",
                      "name": "bl??buss 172",
                      "number": "17448",
                      "category": "BUS",
                      "type": "JNY",
                      "reachable": true,
                      "redirected": false,
                      "direction": "Norsborg"
                  }
              ]
          }
      },
      {
         "LegList": {
              "Leg": [
                  {
                      "Origin": {
                          "name": "Skog??s",
                          "type": "ST",
                          "id": "A=1@O=Skog??s@X=18154237@Y=59218409@U=74@L=400106142@",
                          "extId": "400106142",
                          "lon": 18.154237,
                          "lat": 59.218409,
                          "prognosisType": "PROGNOSED",
                          "time": "19:03:00",
                          "date": "2022-08-17",
                          "track": "2",
                          "hasMainMast": true,
                          "mainMastId": "A=1@O=Skog??s (Huddinge)@X=18154129@Y=59218067@U=74@L=300109731@",
                          "mainMastExtId": "300109731",
                          "additional": false
                      },
                      "Destination": {
                          "name": "??rstaberg",
                          "type": "ST",
                          "id": "A=1@O=??rstaberg@X=18029107@Y=59300022@U=74@L=400105136@",
                          "extId": "400105136",
                          "lon": 18.029107,
                          "lat": 59.300022,
                          "prognosisType": "PROGNOSED",
                          "time": "19:18:00",
                          "date": "2022-08-17",
                          "track": "2",
                          "hasMainMast": true,
                          "mainMastId": "A=1@O=??rstaberg (Stockholm)@X=18030231@Y=59299231@U=74@L=300109531@",
                          "mainMastExtId": "300109531",
                          "additional": false
                      },
                      "JourneyDetailRef": {
                          "ref": "1|21861|0|74|17082022"
                      },
                      "JourneyStatus": "P",
                      "Product": {
                          "name": "Pendelt??g 43",
                          "num": "2560",
                          "line": "43",
                          "catOut": "TRAIN   ",
                          "catIn": "TRN",
                          "catCode": "0",
                          "catOutS": "TRN",
                          "catOutL": "PENDELT??G ",
                          "operatorCode": "SL",
                          "operator": "Storstockholms Lokaltrafik",
                          "admin": "105043"
                      },
                      "Stops": null,
                      "idx": "0",
                      "name": "Pendelt??g 43",
                      "number": "2560",
                      "category": "TRN",
                      "type": "JNY",
                      "reachable": true,
                      "redirected": false,
                      "direction": "Kungs??ngen"
                  },
                  {
                      "Origin": {
                          "name": "??rstaberg",
                          "type": "ST",
                          "id": "A=1@O=??rstaberg@X=18029107@Y=59300022@U=74@L=400105136@",
                          "extId": "400105136",
                          "lon": 18.029107,
                          "lat": 59.300022,
                          "time": "19:19:00",
                          "date": "2022-08-17",
                          "hasMainMast": true,
                          "mainMastId": "A=1@O=??rstaberg (Stockholm)@X=18030231@Y=59299231@U=74@L=300109531@",
                          "mainMastExtId": "300109531",
                          "additional": false
                      },
                      "Destination": {
                          "name": "??rstaberg",
                          "type": "ST",
                          "id": "A=1@O=??rstaberg@X=18030042@Y=59299959@U=74@L=510105135@",
                          "extId": "510105135",
                          "lon": 18.030042,
                          "lat": 59.299959,
                          "time": "19:21:00",
                          "date": "2022-08-17",
                          "hasMainMast": true,
                          "mainMastId": "A=1@O=??rstaberg (Stockholm)@X=18030231@Y=59299231@U=74@L=300109531@",
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
                          "name": "??rstaberg",
                          "type": "ST",
                          "id": "A=1@O=??rstaberg@X=18030042@Y=59299959@U=74@L=510105135@",
                          "extId": "510105135",
                          "lon": 18.030042,
                          "lat": 59.299959,
                          "time": "19:21:00",
                          "date": "2022-08-17",
                          "hasMainMast": true,
                          "mainMastId": "A=1@O=??rstaberg (Stockholm)@X=18030231@Y=59299231@U=74@L=300109531@",
                          "mainMastExtId": "300109531",
                          "additional": false
                      },
                      "Destination": {
                          "name": "??rstaberg",
                          "type": "ST",
                          "id": "A=1@O=??rstaberg@X=18029422@Y=59299474@U=74@L=400104511@",
                          "extId": "400104511",
                          "lon": 18.029422,
                          "lat": 59.299474,
                          "time": "19:23:00",
                          "date": "2022-08-17",
                          "hasMainMast": true,
                          "mainMastId": "A=1@O=??rstaberg (Stockholm)@X=18030231@Y=59299231@U=74@L=300109531@",
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
                          "name": "??rstaberg",
                          "type": "ST",
                          "id": "A=1@O=??rstaberg@X=18029422@Y=59299474@U=74@L=400104511@",
                          "extId": "400104511",
                          "lon": 18.029422,
                          "lat": 59.299474,
                          "prognosisType": "PROGNOSED",
                          "time": "19:23:00",
                          "date": "2022-08-17",
                          "track": "1",
                          "hasMainMast": true,
                          "mainMastId": "A=1@O=??rstaberg (Stockholm)@X=18030231@Y=59299231@U=74@L=300109531@",
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
                          "time": "19:27:00",
                          "date": "2022-08-17",
                          "track": "5",
                          "hasMainMast": true,
                          "mainMastId": "A=1@O=Liljeholmen (Stockholm)@X=18024810@Y=59310665@U=74@L=300109294@",
                          "mainMastExtId": "300109294",
                          "additional": false
                      },
                      "JourneyDetailRef": {
                          "ref": "1|17778|1|74|17082022"
                      },
                      "JourneyStatus": "P",
                      "Product": {
                          "name": "Tv??rbanan 30",
                          "num": "11904",
                          "line": "30",
                          "catOut": "TRAM    ",
                          "catIn": "TRM",
                          "catCode": "2",
                          "catOutS": "TRM",
                          "catOutL": "LOKALT??G ",
                          "operatorCode": "SL",
                          "operator": "Storstockholms Lokaltrafik",
                          "admin": "100030"
                      },
                      "Stops": null,
                      "idx": "3",
                      "name": "Tv??rbanan 30",
                      "number": "11904",
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
                          "time": "19:28:00",
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
                          "time": "19:31:00",
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
                          "time": "19:34:00",
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
                          "time": "20:01:00",
                          "date": "2022-08-17",
                          "track": "1",
                          "hasMainMast": true,
                          "mainMastId": "A=1@O=Norsborg (Botkyrka)@X=17814085@Y=59244091@U=74@L=300109280@",
                          "mainMastExtId": "300109280",
                          "additional": false
                      },
                      "JourneyDetailRef": {
                          "ref": "1|11852|2|74|17082022"
                      },
                      "JourneyStatus": "P",
                      "Product": {
                          "name": "tunnelbanans r??da linje 13",
                          "num": "20726",
                          "line": "13",
                          "catOut": "METRO   ",
                          "catIn": "MET",
                          "catCode": "1",
                          "catOutS": "MET",
                          "catOutL": "TUNNELBANA ",
                          "operatorCode": "SL",
                          "operator": "Storstockholms Lokaltrafik",
                          "admin": "100013"
                      },
                      "Stops": null,
                      "idx": "5",
                      "name": "tunnelbanans r??da linje 13",
                      "number": "20726",
                      "category": "MET",
                      "type": "JNY",
                      "reachable": true,
                      "redirected": false,
                      "direction": "Norsborg"
                  }
              ]
          }
      },
      {
      
          "LegList": {
              "Leg": [
                  {
                      "Origin": {
                          "name": "Skog??s",
                          "type": "ST",
                          "id": "A=1@O=Skog??s@X=18154237@Y=59218409@U=74@L=400106142@",
                          "extId": "400106142",
                          "lon": 18.154237,
                          "lat": 59.218409,
                          "prognosisType": "PROGNOSED",
                          "time": "19:03:00",
                          "date": "2022-08-17",
                          "track": "2",
                          "hasMainMast": true,
                          "mainMastId": "A=1@O=Skog??s (Huddinge)@X=18154129@Y=59218067@U=74@L=300109731@",
                          "mainMastExtId": "300109731",
                          "additional": false
                      },
                      "Destination": {
                          "name": "Stockholms s??dra",
                          "type": "ST",
                          "id": "A=1@O=Stockholms s??dra@X=18061819@Y=59313542@U=74@L=400105132@",
                          "extId": "400105132",
                          "lon": 18.061819,
                          "lat": 59.313542,
                          "prognosisType": "PROGNOSED",
                          "time": "19:21:00",
                          "date": "2022-08-17",
                          "track": "1",
                          "hasMainMast": true,
                          "mainMastId": "A=1@O=S??dra station(p?? Swedenborgsg) (Stockholm)@X=18065064@Y=59314099@U=74@L=300101339@",
                          "mainMastExtId": "300101339",
                          "additional": false
                      },
                      "JourneyDetailRef": {
                          "ref": "1|21861|0|74|17082022"
                      },
                      "JourneyStatus": "P",
                      "Product": {
                          "name": "Pendelt??g 43",
                          "num": "2560",
                          "line": "43",
                          "catOut": "TRAIN   ",
                          "catIn": "TRN",
                          "catCode": "0",
                          "catOutS": "TRN",
                          "catOutL": "PENDELT??G ",
                          "operatorCode": "SL",
                          "operator": "Storstockholms Lokaltrafik",
                          "admin": "105043"
                      },
                      "Stops": null,
                      "idx": "0",
                      "name": "Pendelt??g 43",
                      "number": "2560",
                      "category": "TRN",
                      "type": "JNY",
                      "reachable": true,
                      "redirected": false,
                      "direction": "Kungs??ngen"
                  },
                  {
                      "Origin": {
                          "name": "Stockholms s??dra",
                          "type": "ST",
                          "id": "A=1@O=Stockholms s??dra@X=18061819@Y=59313542@U=74@L=400105132@",
                          "extId": "400105132",
                          "lon": 18.061819,
                          "lat": 59.313542,
                          "time": "19:22:00",
                          "date": "2022-08-17",
                          "hasMainMast": true,
                          "mainMastId": "A=1@O=S??dra station(p?? Swedenborgsg) (Stockholm)@X=18065064@Y=59314099@U=74@L=300101339@",
                          "mainMastExtId": "300101339",
                          "additional": false
                      },
                      "Destination": {
                          "name": "Mariatorget",
                          "type": "ST",
                          "id": "A=1@O=Mariatorget@X=18062115@Y=59317012@U=74@L=400102512@",
                          "extId": "400102512",
                          "lon": 18.062115,
                          "lat": 59.317012,
                          "time": "19:33:00",
                          "date": "2022-08-17",
                          "hasMainMast": true,
                          "mainMastId": "A=1@O=Mariatorget (t-banan) (Stockholm)@X=18062115@Y=59317012@U=74@L=300109297@",
                          "mainMastExtId": "300109297",
                          "additional": false
                      },
                      "Stops": null,
                      "idx": "1",
                      "name": "",
                      "type": "WALK",
                      "reachable": true,
                      "redirected": false,
                      "duration": "PT11M",
                      "dist": 386
                  },
                  {
                      "Origin": {
                          "name": "Mariatorget",
                          "type": "ST",
                          "id": "A=1@O=Mariatorget@X=18062115@Y=59317012@U=74@L=400102512@",
                          "extId": "400102512",
                          "lon": 18.062115,
                          "lat": 59.317012,
                          "prognosisType": "PROGNOSED",
                          "time": "19:39:00",
                          "date": "2022-08-17",
                          "track": "2",
                          "hasMainMast": true,
                          "mainMastId": "A=1@O=Mariatorget (t-banan) (Stockholm)@X=18062115@Y=59317012@U=74@L=300109297@",
                          "mainMastExtId": "300109297",
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
                          "time": "20:11:00",
                          "date": "2022-08-17",
                          "track": "1",
                          "hasMainMast": true,
                          "mainMastId": "A=1@O=Norsborg (Botkyrka)@X=17814085@Y=59244091@U=74@L=300109280@",
                          "mainMastExtId": "300109280",
                          "additional": false
                      },
                      "JourneyDetailRef": {
                          "ref": "1|11851|1|74|17082022"
                      },
                      "Messages": {
                          "Message": [
                              {
                                  "id": "109381348",
                                  "act": true,
                                  "head": "Information",
                                  "text": "Mariatorget: Hissen mot Swedenborgsgatan, till och fr??n biljetthallen ??r avst??ngd pga tekniskt fel. H??nvisning till den andra entr??n",
                                  "category": "0",
                                  "priority": 60,
                                  "products": 65535,
                                  "sTime": "16:55:00",
                                  "sDate": "2022-08-10",
                                  "eTime": "23:30:00",
                                  "eDate": "2022-08-24"
                              }
                          ]
                      },
                      "JourneyStatus": "P",
                      "Product": {
                          "name": "tunnelbanans r??da linje 13",
                          "num": "20727",
                          "line": "13",
                          "catOut": "METRO   ",
                          "catIn": "MET",
                          "catCode": "1",
                          "catOutS": "MET",
                          "catOutL": "TUNNELBANA ",
                          "operatorCode": "SL",
                          "operator": "Storstockholms Lokaltrafik",
                          "admin": "101013"
                      },
                      "Stops": null,
                      "idx": "2",
                      "name": "tunnelbanans r??da linje 13",
                      "number": "20727",
                      "category": "MET",
                      "type": "JNY",
                      "reachable": true,
                      "redirected": false,
                      "direction": "Norsborg"
                  }
              ]
          }
      }
  ]

