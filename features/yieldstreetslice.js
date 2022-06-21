import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLogedIn:typeof window !== "undefined" ? localStorage.getItem("islogin") : false,
    userDetails: typeof window !== "undefined"
    ? localStorage.getItem("yieldstreetuser")
        ? JSON.parse(localStorage.getItem("yieldstreetuser"))
        : null
    : null,
}

export const yieldStreetSlice = createSlice({
  name: 'yieldstrret',
  initialState,
  reducers: {
    handleIslogedin: (state,action) => {
      state.isLogedIn=action.payload;
      localStorage.setItem("isloged", state.login);
    },
    handleUserdetails:(state,action)=>{
        state.userDetails=action.payload;
        localStorage.setItem("yieldstreetuser", JSON.stringify(state.userDetails));

    }
  },
})

// Action creators are generated for each case reducer function
export const {handleIslogedin,handleUserdetails } =  yieldStreetSlice.actions

export default  yieldStreetSlice.reducer