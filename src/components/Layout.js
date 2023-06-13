import React from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="">
        <main>
          <div className="row mx-0 border-bottom">
            <div className="col-md-3">
              <SideBar />
            </div>
            <div className="col-md-9">
              <Navbar />
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Layout;
