import { Avatar } from '@material-ui/core';
import React from 'react'
import { useSelector} from 'react-redux';
import { selectUser } from '../features/userSlice';
import './Sidebar.css';


const Sidebar = () => {
    const user = useSelector(selectUser)

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
                <Avatar  src={user.photoURL} className='sidebar__avatar' >
                    {user.email[0]}
                </Avatar>
                <h2> {user.displayName} </h2>
                <h4>{user.email}</h4>
                <h6>Javascript Focused Web Developer </h6>
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
               <br />
               <p style={{color:'#2F7DCB'}}>Groups</p>
               {recentItem('Trading tips')}
               {recentItem('Life and health tips')}
               <br />
               <p style={{color:'#2F7DCB'}}>Followed Hashtags</p>
               {recentItem('entrepreneurship')}
               {recentItem('technology')}
           </div>
        </div>
    )
}

export default Sidebar
