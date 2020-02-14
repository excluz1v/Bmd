import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  let iicon = iconname => {
    return <FontAwesomeIcon icon={iconname} />;
  };
  return (
    <nav className={`${s.nav} col-3`}>
      <ul>
        <NavLink to="/Profile" activeClassName={s.active}>
          <button className="btn btn-info mt-1">{iicon(faUser)} Profile</button>
        </NavLink>

        <NavLink to="/Dialogs" activeClassName={s.active}>
          <button className="btn btn-info mt-1 ">
            {iicon(faEnvelope)} Messages
          </button>
        </NavLink>

        <NavLink to="/users" activeClassName={s.active}>
          <button className="btn btn-info mt-1">Users</button>
        </NavLink>
      </ul>
    </nav>
  );
};
export default Navbar;
