import { Avatar } from '@mui/material';
import React from 'react'
import "./ChannelRow.css"
import VerifiedIcon from '@mui/icons-material/CheckCircleOutline';

function ChannelRow({image,channel,subs,noOfvideos,description,verified}) {
  return (
    <div className='channel-row'>
        <Avatar className='channel-row-logo'
        alt={channel} src={image}/>

        <div className='channel-row-text'>
            <h4>{channel}{verified && <VerifiedIcon/>}</h4>
            <p>{subs} subscribes .{noOfvideos} videos
            </p>
            <p>
                {description}
            </p>

        </div>

        
      
    </div>
  )
}

export default ChannelRow;
