import React, {useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import writer3 from "../assets/writer3.png";
import format from "date-fns/format";

const PostDetails = ()=>{
    const [viewPost, setViewPost] = useState(null)
    const {id} = useParams();
    useEffect(() => {
      fetch(`http://localhost:4000/post/${id}`).then((response) => {
        response.json().then((postDetail) => {
          setViewPost(postDetail);
          console.log(setViewPost)
        });
      });
    }, []);

    if (!viewPost) return "";
    return(
        <div>
            <h1 className="text-primary">Thi is our show page</h1>
            
    <div>
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
              <p className="fw-semibold text-dark text-uppercase">
                {viewPost.author.lastName}
              </p>
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
              <p className="text-dark">
                <div dangerouslySetInnerHTML={{ __html:viewPost.comment}} />
                </p>
              <div className="img_container my-3">
                <img src={`http://localhost:4000/${viewPost.file}`} alt="" className="img-fluid rounded" />
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
    )
}

export default PostDetails;