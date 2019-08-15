import React from "react";
import { NavLink } from "react-router-dom";
import BookIcon from "../media/nounBook.svg";
import SearchIcon from "../media/nounSearch.svg";
import FriendsIcon from "../media/nounUser.svg";

const TabBar = () => {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <ul className="nav-items">
          <li className="library">
            <NavLink to="/library">
              <img src={BookIcon} alt="Book Icon" width="35" height="35" />
              <span>Library</span>
            </NavLink>
          </li>
          <li className="browse">
            <NavLink to="/browse">
              <img src={SearchIcon} alt="Search Icon" width="35" height="35" />
              <span>Browse</span>
            </NavLink>
          </li>
          <li className="friends">
            <NavLink to="/friends">
              <img
                src={FriendsIcon}
                alt="Friends Icon"
                width="35"
                height="35"
              />
              <span>Friends</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default TabBar;
