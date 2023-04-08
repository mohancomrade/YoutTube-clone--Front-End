import React from 'react'
import "./VideoRow.css";

function VideoRow({views,subs,description,timestamb,channel,title,image}) {
  return (
    <div className='video-row'>
        <img src={image} alt="" className='video-row-image'/>
         
        <div className='video-row-text'>
        <h3>{title}</h3>

        <p className='video-row-headline'>
            {channel}. 
            <span className='video-row-subs'>
            <span className='video-row-subsnumber'>
              {subs}  
            </span> Subscribes
            </span>

            {views} views.{timestamb}
        </p>
        <p className='video-row-description'>
            {description}
        </p>
        </div>

      
    </div>
  )
}

export default VideoRow;
