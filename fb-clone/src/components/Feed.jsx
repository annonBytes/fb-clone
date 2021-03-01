import React from 'react'
import '../components/Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post 
               key={1}
               profilePic="https://i.pinimg.com/474x/7b/07/70/7b07705f9e03ee9db3289e652eb5e1ed.jpg"
               message="Welcome to BTJ"
               timestamp="this is a timestamp"
               username="@bytesOvCode"
               image="https://images.unsplash.com/photo-1611095969382-19fbe23cebff?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
            />
              
              <Post 
               key={1}
               profilePic="https://i.pinimg.com/474x/7b/07/70/7b07705f9e03ee9db3289e652eb5e1ed.jpg"
               message="Welcome to BTJ"
               timestamp="this is a timestamp"
               username="@bytesOvCode"
               image="https://images.unsplash.com/photo-1614609953905-baeff400aab3?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
            />
            

        </div>
    )
}

export default Feed
