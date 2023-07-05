import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify";
import UserContext from "../UserContext";
import writer2 from "../assets/writer2.png";

function Navbar() {
const {setUserDetails, userDetails} = UserContext(UserContext)
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userDetails) => {
        setUserDetails(userDetails);
        console.log(userDetails.email);
      });
      // console.log(response)
    });
  }, []);

  function logOut() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserDetails(null);
  }

  return (
    <div className="d-flex justify-content-around align-items-center">
      <div className="col-6">
        <div className="input-group my-3">
          <span className="input-group-text" id="basic-addon1">
            <Icon icon="material-symbols:search" />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="search Chatter"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
      <div className="">
        <div className="d-flex align-items-center justify-content-end">
          {userEmail && (
            <>
              <Link to={"/create"}>create New Post</Link>
              <button onClick={logOut} className="btn btn-primary btn-sm">
                Log out
              </button>
            </>
          )}
          <Link to="/" className="nav-link">
            <span>
              <Icon icon="zondicons:notification" />
            </span>
          </Link>
          <div className="col-2 ms-3 col-md-0 avatar">
            {!userEmail && (
              <>
                <Link to="/" className="nav-link">
                  <img
                    src={writer2}
                    alt=""
                    className=" img-fluid rounded-circle"
                  />
                </Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
