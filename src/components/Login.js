import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { auth } from '../firebase';
import { login } from '../features/userSlice';
import './Login.css';

const Login = () => {

    const [userDetails, setUserDetails] = useState({
        email: '',
        name: '',
        password:'',
        profilePic: ''

    })
    const {email, name, password, profilePic} = userDetails

    const dispatch = useDispatch()

    const loginToApp = (e)=> {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.name,
                    profileURL: userAuth.user.photoURL
            }))
        }).catch(error => alert(error))
    }

    const handleChange = name => event => {
        setUserDetails({...userDetails, [name]: event.target.value})
        
    }

    const register = () => {
        
        console.log(userDetails)
        
        // if( email === "" || password === "" || name === "" ) {
        //     return alert('Please complete the fields')
        // }

     

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic
            })
            .then(() => {dispatch(
                    login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: profilePic
                }))
            })
        }).catch(error => {alert(error
            )})
    }


    return (
        
        
        <div className='login'>
          <img src='https://www.tmf-group.com/-/media/images/logos/case-study-logos/linkedin.png' alt='logo'/>
        <form>
            <input value={userDetails.name} onChange={handleChange('name')} type='text' placeholder='Full name required if registering'/>
            <input value={userDetails.profilePic} onChange={ handleChange('profilePic')} type='text' placeholder='Profile pic URL (optional)'/>
            <input value={userDetails.email}  onChange={ handleChange('email')} type='text' placeholder='Email'/>
            <input value={userDetails.password} onChange={ handleChange('password')}type='password' placeholder='Password' />
                <button type='submit' onClick={loginToApp} >Sign In</button>
        </form>
        <p>Not a member?{" "}
        <span className='login__register' onClick={register} >Register Now</span>
        </p>
       
        </div>
    )
}

export default Login
