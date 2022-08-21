import { createSlice } from '@reduxjs/toolkit'


// state
const initialState = {
  Loading: false,
  HasErrors: false,
  ErrorDetails:"",
}








 const CommonSlice = createSlice({
    name: "Common",
    initialState,
    reducers: {
      // this func  will loading start value true
      SetLoading: (state, {payload})=> {
       state.Loading = payload
      },

      SetFailed : (state, {payload}) => {
        state.ErrorDetails = payload
        state.HasErrors = true;
        state.Loading = false;

      },

     }
  });
  



  

  export const { SetFailed, SetLoading} = CommonSlice.actions
  export default CommonSlice.reducer;
  