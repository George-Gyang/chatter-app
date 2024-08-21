import React, { useState, useEffect, useContext } from "react";
import { useParams, Navigate, Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import writer3 from "../assets/writer3.png";
import format from "date-fns/format";
import { UserContext } from "../UserContext";
import ImageView from "../components/ImageView";

const PostDetails = () => {
  const [viewPost, setViewPost] = useState(null);
  const [redirectDelete, setredirectDelete] = useState(false);
  const navigate = useNavigate();

  const { userInfo } = useContext(UserContext);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postDetail) => {
        setViewPost(postDetail);
        // console.log(setViewPost);
      });
    });
  }, []);

  const handleDelete = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/post/" + id, {
      method: "DELETE",
      credentials: "include",
    });

    if (response.ok) {
      setredirectDelete(true);
      console.log("deleted ingo successful!!!")
    }
  };
  if (redirectDelete) {
    return <Navigate to={"/"} />
  }

  console.log(viewPost)

  if (!viewPost) return "";
  return (
    <div>
      <div>
        <div className="position-fixed top-50 end-0 pe-4">
          <button
            onClick={() => navigate("/")}
            className="btn btn-sm btn-outline-info">
            BACK
          </button>
        </div>
        <div className="post p-3">
          <div className="col-md-6">
            <div className="row align-items-center">
              <div className="col-3">
                <Link to="">
                  <img
                    src={writer3}
                    alt=""
                    className="img-fluid rounded-circle"
                  />
                </Link>
              </div>
              <div className="col-8">
                <div className="d-flex justify-content-between">
                  <p className="fw-semibold text-dark">
                    posted by:{" "}
                    <span className="fw-semibold text-dark text-uppercase">
                      {" "}
                      {viewPost.author.lastName}
                    </span>
                  </p>
                  {userInfo.id === viewPost.author._id && (
                    <>
                      <p>
                        <Link
                          className="nav-link bg-secondary btn p-1 fs-xsm text-light"
                          to={`/edit/${viewPost._id}`}
                        >
                          Edit Post
                        </Link>
                      </p>
                      <form onSubmit={handleDelete}>
                        <button
                          type="submit"
                          className="nav-link bg-danger btn p-1 fs-xsm text-light"
                        >
                          Delete Post
                        </button>
                      </form>
                    </>
                  )}
                </div>
                <p className="text-secondary text-dark">
                  <Link className="nav-link" to="">
                    <span className="fs-3 fw-bold">{viewPost.title}</span>.
                  </Link>
                  {format(new Date(viewPost.createdAt), "MMM d, yyyy HH:mm")}
                </p>
              </div>
            </div>
          </div>
          <div className="chatter_content my-3">
            <h6>{viewPost.summary}</h6>
            <p className="fs-xsm text-secondary">
              <span>
                <Icon icon="ant-design:read-outlined" width="15" />
              </span>{" "}
              10 mins read
            </p>
            <article className="my-3">
              <div className="col-md-8">
                <div className="img_container my-3">
                  {/* <img
                    src={`http://localhost:4000/${viewPost.file}`}
                    alt=""
                    className="img-fluid rounded"
                  /> */}
                  <ImageView file={viewPost.file} />
                </div>
                <div className="text-dark">
                  <p dangerouslySetInnerHTML={{ __html: viewPost.comment }} />
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
    </div>
  );
};

export default PostDetails;
