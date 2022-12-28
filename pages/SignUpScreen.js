import React, { useRef } from 'react'
import { auth } from './firebase';


function SignupScreen() {

  //this will store all the ref what user type
  const emailRef = useRef(null)
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDeafult();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value,
        alert("User is Created")
      )
      .then((authUser) => {
        console.log(authUser)
      })
      .catch((error) => {
        alert(error.message);
      });

  };

  const signIn = (e) => {
    e.preventDeafult();
  };


  return (
    <div className='signupScreen'>
      <form >
        <h1>Sign In</h1>
        <input ref={emailRef} type="Email" placeholder="Email Address" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>Sign In</button>

        <h4><span className="signupScreen_gray"> New to Netflix? </span>
          <span className="signupScreen_link" onClick={register}>Sign up now.</span></h4>
      </form>
    </div>
  )
}

export default SignupScreen