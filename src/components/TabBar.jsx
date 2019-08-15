import React from "react";
import { NavLink } from "react-router-dom";

const TabBar = () => {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <ul className="nav-items">
          <li className="library">
            <NavLink to="/library">
              <svg id="icon-home" viewBox="0 0 32 32">
                <title>library</title>
                <path d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z" />
              </svg>
              <span>Library</span>
            </NavLink>
          </li>
          <li className="browse">
            <NavLink to="/browse">
              <svg id="icon-home" viewBox="0 0 32 32">
                <title>browse</title>
                <path d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z" />
              </svg>
              <span>Browse</span>
            </NavLink>
          </li>
          <li className="friends">
            <NavLink to="/friends">
              <svg id="icon-home" viewBox="0 0 32 32">
                <title>friends</title>
                <path d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z" />
              </svg>
              <span>Friends</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default TabBar;
