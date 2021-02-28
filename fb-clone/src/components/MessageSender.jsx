import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import '../components/MessageSender.css'
import VideocamIcon from '@material-ui/icons/Videocam'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'

function MessageSender() {

    const [input, setInput] = useState("")

    const [imageUrl, setImageUrl] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        

        setInput("")
        setImageUrl("")
    }

    return (
        <div className="messageSender">
              <div className="messageSender__top">
                  <Avatar />
                  <form>
                      <input 
                        value={input}
                        onChange={ (e) => setInput(e.target.value)}
                        placeholder={"what's on your mind ?"} 
                        className="messageSender__input" 
                        type="text"
                      />
                      <input 
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      placeholder={"image URL (Optional)"} 
                      type="text"
                      style={{outline:"none"}}
                      />

                      <button onClick={handleSubmit} type="submit">
                            Hidden SUbmit
                      </button>
                  </form>
              </div>

              <div className="messageSender__bottom">
                    <div className="messageSender__option">
                        <VideocamIcon style={{color: "red"}} />
                        <h3>Live Video</h3>
                    </div>

                    <div className="messageSender__option">
                        <PhotoLibraryIcon style={{color: "green"}} />
                        <h3>Photo/Video</h3>
                    </div>

                    <div className="messageSender__option">
                        <InsertEmoticonIcon style={{color: "orange"}} />
                        <h3>Feeling/Activity</h3>
                    </div>
              </div>
        </div>
    )
}

export default MessageSender
