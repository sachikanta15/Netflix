import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../Slices/userSlice';
import '../styles/globals.css'
import { auth } from './firebase';
import Head from 'next/head';
import { wrapper } from '../store';



function MyApp({ Component, pageProps }) {
  const user = null;
  const dispatch = useDispatch();


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        })
        );
      }
      else {
        //logout
        dispatch(logout);
      }
    });
    return unsubscribe;
  }, [])
  return (
    <>
    <Head>
      <title>NutFlix</title>
    </Head>
    
    <Component {...pageProps} />

    
    </>
    
  );
}

export default wrapper.withRedux(MyApp);
