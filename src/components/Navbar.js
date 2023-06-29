import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify";

import writer2 from "../assets/writer2.png";

function Navbar() {
  const [firstName, setFirstName] = useState(null);

  // useEffect(() => {
  //   fetch("http://localhost:4000/profile", {
  //     credentials: "include",
  //   })
  //   .then((response) => {
  //     response.json().then((userInfor) => {
  //       setFirstName(userInfor.firstName);
  //     });
  //   });
  // }, []);

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
          <Link to="/" className="nav-link">
            <span>
              <Icon icon="zondicons:notification" />
            </span>
          </Link>
          <div className="col-2 ms-3 col-md-0 avatar">
            {firstName && (
                <Link to={"/create"}>create New Post</Link>
            )}

            {!firstName && (
              <Link to="/" className="nav-link">
                <img
                  src={writer2}
                  alt=""
                  className=" img-fluid rounded-circle"
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
