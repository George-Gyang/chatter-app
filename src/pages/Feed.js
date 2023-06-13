import React from "react";
import {Link} from 'react-router-dom'
import Post from "../components/Post";
import "../App.css"

function Feed() {
  return (
    <div>
      <div className="container rounded border">
        <div className=" p-2 px-md-5">
          <div className="d-flex justify-content-between">
            <div className="">
              <h2 className="mb-3">FEED</h2>
              <p>Explore different content you’d love </p>
            </div>
            <div className="">
              <button className="btn prime_bg fs-xsm text-light text-center">
                Post a content
              </button>
            </div>
          </div>
          <div className="container d-flex justify-content-between my-4 py-3 rounded border px-3">
            <Link className="nav-link">For you</Link>
            <Link className="nav-link">Featured</Link>
            <Link className="nav-link">Recent</Link>
          </div>
          <div className="container rounded border">
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;