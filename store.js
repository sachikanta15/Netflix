import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import  userSliceReducer  from './Slices/userSlice'

const makeStore =()=> configureStore({
  reducer:{
    users:userSliceReducer
  },
  devTools:true
});
export const wrapper =createWrapper(makeStore);