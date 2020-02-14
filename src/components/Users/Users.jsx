import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import s from "./Users.module.css";
import usersImg from "../Default-img/user-logo.png";
import Preloader from "../common/Preloader";
import { NavLink } from "react-router-dom";
import Paginator from "../common/Paginator";

let Users = ({
  onPageChange,
  currentPage,
  totalUsersCount,
  pageSize,
  ...props
}) => {
  console.log(props);
  return (
    <>
      {props.isFetching ? (
        <div className="col-9 ">
          <Preloader />
        </div>
      ) : (
        <div className={`col-9 ${s.users}`}>
          <div className="row ">
            {
              <Paginator
                onPageChange={onPageChange}
                currentPage={currentPage}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
              />
            }
            {props.users.map(u => (
              <div key={Math.random()} className="row container">
                <NavLink to={"/Profile/" + u.id}>
                  <div className="col-3 container">
                    <img
                      src={u.photos.small != null ? u.photos.small : usersImg}
                      alt="img"
                    />
                  </div>
                </NavLink>
                <div className="col-6 container">
                  <div>{u.name}</div>
                </div>
                <div className="col-3 container">
                  {u.followed ? (
                    <Button
                      className={`${s.btn}`}
                      disabled={props.buttonIsClicked}
                      variant="primary"
                      onClick={() => {
                        props.ClickFollowThunkCreator(u.id);
                      }}
                    >
                      Unfollow
                    </Button>
                  ) : (
                    <Button
                      className={`${s.btn}`}
                      disabled={props.buttonIsClicked}
                      variant="primary"
                      onClick={() => {
                        props.ClickUnFollowThunkCreator(u.id);
                      }}
                    >
                      follow
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default Users;
