import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    SearchedObject: "",
    SeachResult:[]      
  }
  

const DeparturesSlice = createSlice({
    name : "Departure",
    initialState,
    reducers : {
        SetSearchedObject : (state, {payload}) =>{
            state.SearchedObject = payload
        },

        SetSeachResult : (state, {payload}) => {
            state.SeachResult = payload
        }
    }
})

export const {SetSearchedObject, SetSeachResult} = DeparturesSlice.actions
export default DeparturesSlice.reducer;