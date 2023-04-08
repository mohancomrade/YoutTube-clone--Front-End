import Home from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow';
import { Link } from 'react-router-dom';

import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Sidebar() {
  return (
    <div className='side-bar'>
     


      <SidebarRow selected Icon={Home} title="Home"/>
      <SidebarRow Icon ={WhatshotIcon}title="Trending"/>
      <SidebarRow Icon={SubscriptionsIcon} title="Description"/>
     
      <hr/>
      <SidebarRow Icon={VideoLibraryIcon} title="Library"/>
      <SidebarRow Icon={HistoryIcon} title="Histroy"/>
      <SidebarRow Icon={OndemandVideoIcon} title="Your videos"/>
      <SidebarRow Icon={WatchLaterIcon} title="Whatch Later"/>
      <SidebarRow Icon={ThumbUpIcon} title="Liked videos"/>
      <SidebarRow Icon={ExpandMoreIcon} title="Show more"/>
      
      <hr/>
      {/* <nav>
        <link to="/sidebar"></link>
      </nav> */}
      
    </div>
  )
}

export default Sidebar;

