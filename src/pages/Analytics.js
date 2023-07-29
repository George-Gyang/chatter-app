import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// import writer3 from "../assets/writer3.png";
import { Icon } from "@iconify/react/dist/iconify";
import Post from "../components/Post";

const Analytics = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch("http://localhost:4000/post").then((response) => {
      response.json().then((postDetails) => {
        setPosts(postDetails);
        // console.log(postDetails)
      });
    });
  }, []);

  return (
    <div className="">
      <div className="container">
        <h3>Posts analytics</h3>
        <p className="my-3 prime_border">
          <span className="fw-bold">May 2023,</span>{" "}
          <span className="fw-sm text-secondary"> 25days so far</span>
        </p>
        <p className="fs-xsm text-dark">Posts highlights</p>
        <div className="d-flex align-items-center mb-3">
          <h6>
            Top posts
            <span className="fx-xsm text-secondary">
              {" "}
              earned 2980 impressions
            </span>
          </h6>
        </div>
        <div className="chatter_content my-3">
          <h6>Starting out as a Product designer</h6>
          <p className="fs-xsm text-secondary">
            <span>
              <Icon icon="entypo:news" height="15" />
            </span>{" "}
            10 mins read
          </p>
          {posts.length > 0 &&  posts.map(post =>(
            <Post key={post._id} {...post} />
          ))
          }
          <button className="btn prime_bg py-2 my-4 fs-xsm text-light">
            View post activity
          </button>
          <summary className="">
            <h4 className="text-dark">Posts summary</h4>
            <p>May 2023 summary</p>
            <div className="prime_border"></div>
            <div className="d-flex my-3">
              <div className="me-4">
                <p className="text-center">Post</p>
                <p className="text-center fw-bold text-dark">3</p>
                <p>Profile visits</p>
                <p className="text-center fw-bold text-dark">300</p>
              </div>
              <div>
                <p>Posts Impressions</p>
                <p className="text-center fw-bold text-dark">2.98k views</p>
                <p>New Followers</p>
                <p className="text-center fw-bold text-dark">300</p>
              </div>
            </div>
          </summary>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
