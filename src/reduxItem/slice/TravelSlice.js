import { createSlice } from '@reduxjs/toolkit'

// state
const initialState = {
  FromObject: "",
  ToObject: "",
  Time : {},
  SearchResult:[],
  FilteringOptions:{
    TransportChange:"0",
    TravelVia:"",
    TransportMode:{
      LocalTraffic: false,
        Boat: false,
        Tram: true,
        Bus: true,
        CommuterTrain: true,
        Subway: true,
    },
    

  }
  

}








 const TravelSlice = createSlice({
    name: "Travel",
    initialState,
    reducers: {
      // this func  will loading start value true
      StartLoading: state => {
       state.Loading = true
      },

      SetSeachResult : (state, {payload}) => {
        state.SearchResult = payload
      },
      SetFromObject: (state, {payload}) => {
        state.FromObject = payload;
      },
      SetToObject: (state, {payload}) => {
        state.ToObject = payload;
      },
      SetTravelVia: (state, {payload}) => {
        state.FilteringOptions.TravelVia = payload;
      },
      SetTransportMode: (state, {payload}) => {
        state.FilteringOptions.TransportMode = payload;
      },

      SetTransportChange: (state, {payload}) => {
        state.FilteringOptions.TransportChange =  payload
      },

      SetTime:(state, {payload}) => {
        state.Time =  payload;
      },

      SwapObjects: (state, {payload}) => {
        const preObj = state.FromObject
        state.FromObject= state.ToObject;
        state.ToObject = preObj;     
      },

      SetTravelTime:(state, {payload}) => {
        if(payload.selectedRadioButton == "0") {state.Time ={}; return;}

        state.Time = {
          Time : payload.datetime,
          ValueNr : payload.selectedRadioButton,
        }

        

      }


    }
  });
  




  export const { SetSeachResult, SetFromObject,SetToObject,SetTransportMode, SetTransportChange, SetTravelVia, SwapObjects, SetTravelTime} = TravelSlice.actions
  export default TravelSlice.reducer;
  