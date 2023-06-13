import React from "react";

import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify";

function SideBar() {
  return (
    <div>
      <div className="sidebar col-2 m-0 border-end p-1 p-md-4">
        <div className="">
          <div className="my-3">
            <h1 className="text-center fs-md-1 logo prime_text">CHATTER</h1>
          </div>
          <div className="side_content">
            <p className="fw-bold">Overview</p>
            <div className=" border-0">
                <ul className="ps-3 ">
              <Link to="#" className="list-group-item my-3">
                <li>
                    <span className="me-2"><Icon icon="arcticons:ftxpro" width="30" /> </span>
                    <span className="d-none d-md-inline">Feed</span>
                </li>
              </Link>
              <Link to="#" className="list-group-item my-3">
                <li>
                    <span className="me-2"><Icon icon="material-symbols:bookmarks-outline-rounded" width="30" /> </span>
                    <span className="d-none d-md-inline">Bookmark</span>

                </li>
              </Link>
              <Link to="#" className="list-group-item my-3">
                <li>
                    <span className="me-2"><Icon icon="ant-design:team-outlined" width="30" /> </span>
                <span className="d-none d-md-inline">Team blog</span>
                </li>
              </Link>
              <Link to="#" className="list-group-item my-3">
                <li>
                    <span className="me-2"><Icon icon="material-symbols:drafts-outline" width="30" /> </span>
                                <span className="d-none d-md-inline">drafts</span>
                </li>
              </Link>
              <Link to="#" className="list-group-item my-3">
                <li>
                    <span className="me-2"><Icon icon="material-symbols:analytics-outline" width="30" /> </span>
                                <span className="d-none d-md-inline">Analytics</span>
                </li>
              </Link>
              </ul>
            </div>
            <p className="fw-bold d-none d-md-block">Trending Tags <span><Icon icon="icon-park:trending-up" width="30" height="20" /></span></p>
            <div className=" border-0 d-none d-md-block">
                <ul>
              <Link to="#" className="list-group-item my-3">
                <li>Programming
                </li>
              </Link>
              <Link to="#" className="list-group-item my-3">
                <li>
                Data science
                </li>
              </Link>
              <Link to="#" className="list-group-item my-3">
                <li>
                    Technology
                </li>
              </Link>
              <Link to="#" className="list-group-item my-3">
                <li>
                    Machine Learning
                </li>
              </Link>
              <Link to="#" className="list-group-item my-3">
                <li>
                    Politics
                </li>
              </Link>
              <Link to="#" className="list-group-item my-3">
                <li>
                    See all...
                </li>
              </Link>
              </ul>
            </div>
            <p className="fw-bold d-none d-md-block">Personal</p>
            <div className=" border-0 d-none d-md-block">
                <ul>
              <Link to="#" className="list-group-item my-3">
                <li>
                    <span className="me-2"><Icon icon="mdi:account-outline" width="30" height="20" /> </span>
                Account
                </li>
              </Link>
              <Link to="#" className="list-group-item my-3">
                <li>
                    <span className="me-2"><Icon icon="zondicons:notification" width="30" /></span>
                Notification
                </li>
              </Link>
              <Link to="#" className="list-group-item my-3">
                <li className=" text-danger">
                Log out
                </li>
              </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
