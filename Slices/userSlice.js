import { createSlice } from "@reduxjs/toolkit";

export const userSlice =createSlice({
    name:'user',
    initialState:{
        user:null,
    },
    reducers:{
        login: (state,action) =>{
            state.user=action.payload;  ///payload is the date that helps to update the date  to the store
        },
        logout:(state)=>{
            state.user=null;
        }
    },
});

export const {login,logout}=userSlice.actions;  /// actions helps tpo send the data to the store

export const selectUser = sate =>state.user.user;  // selectors helps to bring back the data from the store
export default userSlice.reducer;