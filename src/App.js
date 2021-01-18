import React from 'react';
import {useSelector} from 'react-redux';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import './App.css';
import { selectUser } from './features/userSlice';
import Login from './components/Login';



const App = () => {
  const user = useSelector(selectUser)

  return (
    <div className="app">

<Header />
{!user ? (<Login /> ) : (
<div className='app__body'>
    <Sidebar />

<Feed />

{/* Widgets*/}
</div>)}


    </div>
  );
}

export default App;
