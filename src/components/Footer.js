import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="pinkish py-5">
      <div className="container">
        <div className="row">
          <div className=" col-md-4">
            <div className="my-5">
              <h1 className="text-center prime_text">CHATTER</h1>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <h6 className="fw-bold">Explore</h6>
            <Link to="#" className="nav-link">
              Community
            </Link>
            <Link to="#" className="nav-link">
              Trending Blogs
            </Link>
            <Link to="#" className="nav-link">
              Chatter for teams
            </Link>
          </div>
          <div className="col-6 col-md-3">
            <h6 className="fw-bold">Support</h6>
            <Link to="#" className="nav-link">
              Support docs
            </Link>
            <Link to="#" className="nav-link">
              Join slack
            </Link>
            <Link to="#" className="nav-link">
              Contact
            </Link>
          </div>
          <div className=" col-md-2 mt-4 mt-md-0">
            <div className="fit_footer mx-auto mx-md-0">
              <h6 className="fw-bold">Official blog</h6>
              <Link to="#" className="nav-link">
                Official blog
              </Link>
              <Link to="#" className="nav-link">
                Engineering blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
