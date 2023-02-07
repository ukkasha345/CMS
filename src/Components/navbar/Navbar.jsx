import React from "react";
import "./Navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import Brightness6Icon from "@mui/icons-material/Brightness6";
import ZoomInMapIcon from "@mui/icons-material/ZoomInMap";
import ChatIcon from "@mui/icons-material/Chat";
import ListIcon from "@mui/icons-material/List";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import avtrImg from "../../Images/remini.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search . . ." />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon" />
            English
          </div>

          {/* Dark/Light mode */}
          <div className="item">
            <Brightness6Icon className="icon" />
          </div>

          {/* min-max */}
          <div className="item">
            <ZoomInMapIcon className="icon" />
          </div>

          {/* Notification */}
          <div className="item">
            <NotificationsNoneIcon className="icon" />
            <div className="counter">1</div>
          </div>

          {/* chats */}
          <div className="item">
            <ChatIcon className="icon" />
            <div className="counter">2</div>
          </div>

          {/* list */}
          <div className="item">
            <ListIcon className="icon" />
          </div>

          <div className="item">
            <img src={avtrImg} className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
