import React, { useContext, useEffect } from "react";

import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify";
import { UserContext } from "../UserContext";
import writer2 from "../assets/writer2.png";
import { BASE_URL } from "../utils/base";

function Navbar() {
  const { setUserInfo, userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch(`${BASE_URL}/profile`, {
      credentials: "include",
    }).then((response) => {
      response.json().then((userDetails) => {
        // setUserEmail(userDetails.userEmail);
        setUserInfo(userDetails);
        // console.log(userDetails.email)
      });
    });
  }, []);

  function logout() {
    fetch(`${BASE_URL}/logout`, {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  const userEmail = userInfo?.email;
  // console.log(userInfo);

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
            {/* <span> Hello, {userInfo.email}</span> */}
              <Link  className="btn prime_bg py-2 fs-xsm text-light" to={"/create"}>Publish</Link>
              <button
                onClick={logout}
                type="submit"
                className="btn ms-2 btn-danger text-white fs-xsm py-2 text-nowrap"
              >
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
                <Link to="/login" className="prime_text">Login</Link>
                <Link to="/register" className="prime_text">Register</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
