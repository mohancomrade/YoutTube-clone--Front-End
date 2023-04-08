import { Avatar } from '@mui/material';
import React from 'react'
import "./VideoCard.css"

function VideoCard({image,title,channel,views,timestamp,channelimage}) {

    // const {image,title,channel,views,timestamp,changeimage}=props;
  return (
    <div className='videocard'>
      <img  className='videocard-thumbnail' src={image} alt=""/>
      <div className='videocard-info'>
        <Avatar className ="videocard-avatar" alt={channel} src={channelimage}/>
        <div className='video-text'>
         <h4>{title}</h4>
         <p>{channel}</p>
         <p>
            {views}.{timestamp}
         </p>
        </div>

      </div>
    </div>
  )
}

export default VideoCard;
