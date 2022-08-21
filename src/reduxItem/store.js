import { configureStore } from '@reduxjs/toolkit'
import TravelReducer from 'reduxItem/slice/TravelSlice'
import CommonReducer from 'reduxItem/slice/CommonSlice'
import DepartureReducer from 'reduxItem/slice/DepartureSlice'


export const store = configureStore({
  reducer: {
    Travel : TravelReducer,
    Departure : DepartureReducer,
    Common : CommonReducer
  }
  
})