import React from "react";
import { Link } from "react-router-dom";

import writer3 from "../assets/writer3.png";
import { Icon } from "@iconify/react/dist/iconify";

const Analytics = () => {
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
        <div className="col-8 col-md-6">
          <div className="row align-items-center">
            <div className="col-3">
              <img src={writer3} alt="" className="img-fluid rounded-circle" />
            </div>
            <div className="col-8">
              <p className="fw-semibold text-dark">Grace Ikpang</p>
              <p className="text-secondary fs-xsm text-dark">
                Product designer. May 25th, 2023
              </p>
            </div>
          </div>
        </div>
        <div className="chatter_content my-3">
          <h6>Starting out as a Product designer</h6>
          <p className="fs-xsm text-secondary">
            <span>
              <Icon icon="entypo:news" height="15" />
            </span>{" "}
            10 mins read
          </p>
          <article className="my-3">
            <div className="col-md-8">
              <p className="text-dark">
                Embarking on a journey as a product designer can be an
                exhilarating and fulfilling experience. As a profession that
                bridges the realms of art, technology, and problem-solving,
                product design offers an opportunity to shape the way people
                interact with the world around them.
              </p>
              <div className="d-flex my-2 justify-content-between">
                <div className="d-flex align-items-center ">
                  <Link to="#">
                    <Icon icon="entypo:news" height="20" />
                  </Link>{" "}
                  <span className="fs-xsm">200</span>
                </div>
                <div className="d-flex align-items-center ">
                  <Link to="#">
                    <Icon icon="entypo:news" height="20" />
                  </Link>{" "}
                  <span className="fs-xsm">200</span>
                </div>
                <div className="d-flex align-items-center ">
                  <Link to="#">
                    <Icon icon="entypo:news" height="20" />
                  </Link>{" "}
                  <span className="fs-xsm">200</span>
                </div>
              </div>
            </div>
            <button className="btn prime_bg py-2 my-4 fs-xsm text-light">
              View post activity
            </button>
          </article>
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
