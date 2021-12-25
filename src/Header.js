import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import TinderLogo from "./pngwing.com.png";
import ForumIcon from "@mui/icons-material/Forum";

// HEADER
function Header() {
  return (
    <div className="header">
      <IconButton aria-label="">
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>

      <img className="header__logo" alt="" src={TinderLogo} />

      <IconButton aria-label="">
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>


    </div>
  );
}

export default Header;
