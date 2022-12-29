import { createSlice } from "@reduxjs/toolkit";

export const userSlice =createSlice({
    name:'users',
    initialState:{
        user:null,
    },
    reducers:{                  //reducers --- it will do some action and push into the store ---> it doesn't automatically push into store but we had to dispatch it
        login: (state,action) =>{
            state.user=action.payload;  ///payload is the date that helps to update the date  to the store
        },
        logout:(state)=>{
            state.user=null;
        },
    },
});

export const {login,logout}=userSlice.actions;  /// actions helps tpo send the data to the store

export const selectUser = state =>state.users.user;  // selectors helps to bring back the data from the store
export default userSlice.reducer;