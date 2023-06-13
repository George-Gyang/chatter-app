import React from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="">
        <main>
          <div className="row mb-3 mx-0 border-bottom">
            <div className="col-md-3 col-2"></div>
            <div className="col-md-9 col-10">
              <Navbar />
            </div>
          </div>
          <div className="row mx-0">
            <div className="col-md-3 col-2"></div>
            <div className="col-md-9 col-10">
              <SideBar />
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Layout;
