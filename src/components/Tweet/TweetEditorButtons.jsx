import TweetEditorActions from "./TweetEditorActions"
import Button from "../Button/Button"
import TweetButton from "./TweetButton"
import { useState } from "react"


export default function TweetEditorButtons({ setImage }) {
  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]))
  }

  return (
    <div className="tweet-editor-buttons">
      <div className="tweet-editor-actions">
        <div>
          <img src={"src/images/Media.svg"} alt="Mon icône Media" onClick={() => document.getElementById('fileInput').click()} style={{cursor: 'pointer'}} />
        <input id="fileInput" type="file" onChange={handleImageChange} style={{display: 'none'}} />
        </div>

        <div>
          <img src={"src/images/Gif.svg"} alt="Mon icône Gif" onClick={() => document.getElementById('fileInput').click()} style={{cursor: 'pointer'}} />
        <input id="fileInput" type="file" onChange={handleImageChange} style={{display: 'none'}} />
        </div>

        <div>
          <img src={"src/images/Poll.svg"} alt="Mon icône Poll" onClick={() => document.getElementById('fileInput').click()} style={{cursor: 'pointer'}} />
        <input id="fileInput" type="file" onChange={handleImageChange} style={{display: 'none'}} />
        </div>

        <div>
          <img src={"src/images/Group.svg"} alt="Mon icône Group" onClick={() => document.getElementById('fileInput').click()} style={{cursor: 'pointer'}} />
        <input id="fileInput" type="file" onChange={handleImageChange} style={{display: 'none'}} />
        </div>

        <div>
          <img src={"src/images/Schedule.svg"} alt="Mon icône Schedule" onClick={() => document.getElementById('fileInput').click()} style={{cursor: 'pointer'}} />
        <input id="fileInput" type="file" onChange={handleImageChange} style={{display: 'none'}} />
        </div>
      </div>
          <TweetButton/>
    </div>
  )
}

