import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import './App.css';

const App = () => {
  return (
    <div className="app">

<Header />

<div className='app__body'>
    <Sidebar />

<Feed />
{/* Feed */}
{/* Widgets*/}
</div>

    </div>
  );
}

export default App;
