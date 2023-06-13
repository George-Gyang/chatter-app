import React from "react";
import writer3 from "../assets/writer3.png";
import postImg from "../assets/post-img.png";
import { Icon } from "@iconify/react/dist/iconify";

import { Link } from "react-router-dom";

function Post() {
  return (
    <div>
      <div className="post p-3">
        <div className="col-md-6">
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
              <Icon icon="ant-design:read-outlined" width="15" />
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
              <div className="img_container my-3">
                <img src={postImg} alt="" className="img-fluid rounded" />
              </div>
              <div className="d-flex my-2 px-2 justify-content-between">
                <div className="d-flex align-items-center ">
                  <Link className="nav-link" to="#">
                  <Icon icon="et:chat" width="15" />
                  </Link>
                  <span className="fs-xsm">200</span>
                </div>
                <div className="d-flex align-items-center ">
                  <Link className="nav-link" to="#">
                  <Icon icon="icon-park-outline:like" width="15" />
                  </Link>
                  <span className="fs-xsm">200</span>
                </div>
                <div className="d-flex align-items-center ">
                  <Link className="nav-link" to="#">
                  <Icon icon="gridicons:stats-up" width="15" />
                  </Link>{" "}
                  <span className="fs-xsm">200</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Post;
