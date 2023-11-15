import React, { useState } from "react";
import { Link } from "react-router-dom";
import closeIcon from "../../../public/cross.svg";
import menuIcon from "../../../public/hambuger.svg";
import "./Navbar.css";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {isSidebarOpen ? (
        <div
          className={`navbar-sidebar ${isSidebarOpen ? "open" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="navbar-close-icon" onClick={toggleSidebar}>
            <img src={closeIcon} alt="close icon" />
          </div>
          <ul>
            <li>
              <Link to="/" onClick={toggleSidebar}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleSidebar}>
                About
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="compass-icon" onClick={toggleSidebar}>
          <img src={menuIcon} alt="Menu" />
        </div>
      )}
    </>
  );
};

export default Navbar;
