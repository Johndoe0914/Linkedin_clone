import React,{useEffect}from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import Login from './components/Login';
import Widgets from './components/Widgets';
import { auth } from './firebase';



const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth => {
      if(userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))
      } else {
        dispatch(logout())
      }
    }))
  }, [])
  const user = useSelector(selectUser)

  return (
    <div className="app">

<Header />
{!user ? (<Login /> ) : (
<div className='app__body'>
    <Sidebar />

<Feed />
<Widgets />
{/* Widgets*/}
</div>)}


    </div>
  );
}

export default App;
