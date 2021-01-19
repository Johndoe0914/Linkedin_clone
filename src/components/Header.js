import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import './Header.css';
import HeaderOption from './HeaderOption';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import "./HeaderOption";
import { selectUser, logout} from '../features/userSlice';
import { auth } from '../firebase';

const Header = () => {
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout())

        auth.signOut()
    }
    const user = useSelector(selectUser);
    return (
        <div className='header'>
           
            <div className='header__left'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/1200px-Linkedin.svg.png' alt='linked in'/>
                <div className='header__search'>
                    <SearchIcon />
                <input placeholder='Search' type='text' />
                </div>
            </div>
            <div className='header__right'>
        <HeaderOption title='Home' Icon={HomeIcon} />
        <HeaderOption title='My Network' Icon={SupervisorAccountIcon} />
        <HeaderOption title='Jobs' Icon={BusinessCenterIcon} />
        <HeaderOption title='Messaging' Icon={ChatIcon} />
        <HeaderOption title='Notifications' Icon={NotificationsIcon} />
        <HeaderOption avatar={true} onClick={logoutOfApp}  title='Me'/>
        

            </div>

        </div>
    )
}

export default Header
