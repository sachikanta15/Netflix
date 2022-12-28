import React, { useState } from 'react'
import Image from 'next/image'
import SignUpScreen from './SignUpScreen';


function LoginScreen() {
  const [signIn,setSignIn]= useState(false);
  return (
    <div className="loginScreen">
      <div className="loginscreen_background">
        <div className="loginscreen_logo">
          <Image
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            width={150} height={100}
            alt="loginScreen__logo"
          />
        </div>
        <button onClick={()=>setSignIn(true)} className='loginScreen_button'>Sign In</button>
        <div className="loginScreen_gradient" />
      </div>
      <div className="loginScreen__body">
      {signIn ? (
        <SignUpScreen/>
      ):(
        <>
          <h1>Unlimited films ,TV programmes and More.</h1>
          <h2>Watch Anywhere and Cancel at Any Time </h2>
          <h3>Ready to watch? Enter your email to create or restart your membership</h3>
          <div className="loginScreen__Input">
            <form >
              <input type="email" 
                placeholder='Email Address'
              />
              <button onClick={()=> setSignIn(true)} className='loginScreen__getStarted'>GET STARTED</button>
              
            </form>
          </div>
        </>
      )}
        
      </div>
    </div>

  )
}

export default LoginScreen