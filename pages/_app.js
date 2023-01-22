import { useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { login, logout } from '../Slices/userSlice';
import '../styles/globals.css'
import { auth } from './firebase';
import Head from 'next/head';
import { wrapper } from '../store';
import { selectUser } from '../Slices/userSlice';



function MyApp({ Component, pageProps, ...rest }) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const { store, props } = wrapper.useWrappedStore(rest);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        })
        );
      }
      else {
        //logout
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch])
  return (
<>
      <Head>
         <title>NutFlix</title>
      </Head>
      <Component {...props.pageProps} />
       
     </>

  );
}



export default wrapper.withRedux(MyApp);
