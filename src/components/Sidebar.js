import { Avatar } from '@material-ui/core';
import React from 'react'
import './Sidebar.css';


const Sidebar = () => {

    const recentItem = topic => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash' >#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className='sidebar'>
           <div className='sidebar__top'>
                <img src='https://images.unsplash.com/photo-1609860429316-72f1ca1bd9c4?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt=''/>
                <Avatar className='sidebar__avatar' />
                <h2> Jonathan Diaz</h2>
                <h4>johndoe0914@gmail.com</h4>
           </div>
           <div className='sidebar__stats'>
                <div className='sidebar__stat'>
                    <p>Who viewed you</p>
                    <p className='sidebar__statNumber'>4,304</p>
                </div>
                <div className='sidebar__stat'>
                <p>Views on post</p>
                    <p className='sidebar__statNumber'>1,567</p>
                </div>
           </div>

           <div className='sidebar__bottom'>
               <p>Recent</p>
               {recentItem('reactjs')}
               {recentItem('programming')}
               {recentItem('developer')}
               {recentItem('design')}
           </div>
        </div>
    )
}

export default Sidebar
