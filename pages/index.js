import React from 'react'
import HomeScreen from '../Components/HomeScreen';
import LoginScreen from './LoginScreen';
import { useSelector } from 'react-redux';
import { selectUser } from '../Slices/userSlice';

function index() {

  /**
   * Here we had implemented if there is some user than it will show the homescreen page otherwise it will show the login page 
   */
  const user = useSelector(selectUser);
  return (
    
  <div className='app'>
  {!user?(<LoginScreen/>):( <HomeScreen/>)}
 
  </div>
  )
}

export default index;