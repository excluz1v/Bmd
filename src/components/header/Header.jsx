import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Header = props => {
  return (
    <header className={`navbar navbar-light container-fluid mb-2 ${s.navbar}`}>
      <div className={`container-fluid row `}>
        <div className="col-10">
          <h1>Учебный проект "Социальная сеть"</h1>
        </div>
        <div className={`col-2 ${s.login} `}>
          {props.isAuth ? (
            <div>
              {props.login}{" "}
              <Button
                className="btn btn-warning"
                onClick={() => {
                  props.AuthLogOutThunk();
                }}
              >
                logout
              </Button>
            </div>
          ) : (
            <div>
              {" "}
              <NavLink to="/login" className={`${s.login}`}>
                <Button>login</Button>
              </NavLink>{" "}
            </div>
          )}
        </div>
        {/* <div className="col-2">
          <a
            href="https://github.com/excluz1v/PublicNetworkProject"
            target="_blank"
          >
            <i class="fab fa-github"></i>
          </a>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
