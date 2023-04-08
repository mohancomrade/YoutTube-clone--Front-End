import React,{useState} from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {

   const[inputSearch,setInputSearch]=useState("")



  return (
    <div className="header">
      {/* <h1>Header</h1> */}
      <div className="header-left">
        <MenuIcon />
        
        <Link to="/">
        <img
          className="header-logo"
          src="data:image/jpeg;base64,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"
          alt=""
        />
        </Link>
        
      </div>
      <div className="header-input">
       <input value={inputSearch} 
       onChange={(e) =>setInputSearch(e.target.value)} 
       type="text" placeholder="Search" />

          <Link 
          to={`/search/${inputSearch}`}
          >
      <SearchIcon className="header-inputicon" />
      </Link>

      
      </div>
      <div className="header-icons">
      <VideoCallIcon className="header-icon" />
      <AppsIcon className="header-icon" />
      <NotificationsIcon className="header-icon" />
      <Avatar
        alt="Mohan Kumar"
        src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2020/07/thumb-1920-1082417.jpg"
      />
      </div>
      
      
    </div>
  );
}

export default Header;
