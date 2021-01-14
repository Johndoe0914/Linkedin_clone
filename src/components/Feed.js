import React, {useState, useEffect} from 'react'
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import InputOption from './inputOption';
import Post from './Post';
import './Feed.css';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import { db } from '../firebase';

const Feed = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection('posts').onSnapshot()
    }, [])

    const sendPost = (e) => {
        e.preventDefault()

    }
    return (
        <div className='feed'>
                <div className='feed__inputContainer'>
                    <div className='feed__input'>
                        <CreateIcon />
                        <form>
                            <input type='text' placeholder='Start a post'/>
                            <button onClick={sendPost} type='submit'>
                                Send
                            </button>
                        </form>
                    </div>
                    <div className='feed__inputOptions'>
                        <InputOption Icon={ImageIcon} title='Photo' color="#70b5f9" />
                        <InputOption Icon={SubscriptionsIcon} title='Video' color="#E7A33E" />
                        <InputOption Icon={EventNoteIcon} title='Event' color="#C0C8CD" />
                        <InputOption Icon={CalendarViewDayIcon} title='Write article' color="#7FC15E" />


                        
                    </div>
                </div>

                {/* POSTs*/}
                {posts.map((post, i) => (
                <Post name='front end development' description='wowo amazingefwkjfbkwbfkwb' message='Wow this really works'/>

                ))}
                
        </div>
    )
}

export default Feed
