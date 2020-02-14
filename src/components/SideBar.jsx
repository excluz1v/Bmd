import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <nav className="nav container col-2">
      <ul>
        <button className="btn">
          <NavLink to="/login">Login </NavLink>
        </button>
      </ul>
    </nav>
  );
};
export default SideBar;
