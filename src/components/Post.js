import React, { useEffect } from "react";
import writer3 from "../assets/writer3.png";
import postImg from "../assets/post-img.png";
import { Icon } from "@iconify/react/dist/iconify";

import { Link, useNavigate } from "react-router-dom";
import { format } from "date-fns";

function Post({ _id, title, summary, file, comment, createdAt, author }) {
  return (
    <div className="card my-3">
      <div className="post p-3">
        <div className="col-md-6">
          <div className="row align-items-center">
            <div className="col-3">
              <Link to={`/post/${_id}`}>
                <img
                  src={writer3}
                  alt=""
                  className="img-fluid rounded-circle"
                />
              </Link>
            </div>
            <div className="col-8">
              <p className="">
               posted by: <span className="fw-semibold text-dark text-uppercase"> {author.lastName}</span>
              </p>
              <p className="text-secondary text-dark">
                <Link className="nav-link" to={`/post/${_id}`}>
                  <span className="fs-3 fw-bold">{title}</span>.
                </Link>
                {format(new Date(createdAt), "MMM d, yyyy HH:mm")}
              </p>
            </div>
          </div>
        </div>
        <div className="chatter_content my-3">
          <h6>{summary}</h6>
          <p className="fs-xsm text-secondary">
            <span>
              <Icon icon="ant-design:read-outlined" width="15" />
            </span>{" "}
            10 mins read
          </p>
          <article className="my-3">
            <div className="col-md-8">
              <p className="text-dark">
                {/* <div dangerouslySetInnerHTML={{ __html: comment }} /> */}
              </p>
              {/* <div className="img_container my-3">
                <img
                  src={"http://localhost:4000/" + file}
                  alt=""
                  className="img-fluid rounded"
                />
              </div> */}
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
