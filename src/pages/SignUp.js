import React from "react";
import { Link } from "react-router-dom";

import sideImg from "../assets/side-pics.png";
import { Icon } from "@iconify/react";

import "../App.css";

function SignUp() {
  return (
    <div>
      <div className="">
        <div className="row mx-0">
          <div className="col-6 px-0 position-relative">
            <div>
              <img src={sideImg} alt="" className="img-fluid w-100" />
            </div>
            <div className="overlay d-flex justify-content-center flex-column">
              <h2 className=" text-light text-center">CHATTER</h2>
              <p className="px-5">
                Unleash the Power of Words, Connect with Like-minded Readers and
                Writers
              </p>
            </div>
          </div>
          <div className="col-6">
            <div className="container py-2">
              <div className=" px-md-5">
                <div className="d-flex justify-content-between">
                  <Link
                    className="nav-link fw-semibold text-dark"
                    to="/"
                  >
                    REGISTER
                  </Link>
                  <Link className="nav-link fw-semibold text-dark" to="/login">
                    LOG IN
                  </Link>
                </div>
                <h5 className="fw-bold text-center my-3">
                  Register as a Writer/Reader
                </h5>
                <form className="row px-0 g-3">
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="John"
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="inputPassword4" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword4"
                      placeholder="Doe"
                    />
                  </div>
                  <div className="col-12">
                    <label for="inputState" className="form-label">
                      You are joining as?
                    </label>
                    <select id="inputState" className="form-select">
                      <option selected>Writer</option>
                      <option>Reader</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label for="inputAddress" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputAddress"
                      placeholder="Johndoe@gmail.com"
                    />
                  </div>
                  <div className="col-12">
                    <label for="inputAddress2" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputAddress2"
                      placeholder="**********"
                    />
                  </div>
                  <div className="col-12">
                    <label for="inputCity" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="**********"
                      id="inputCity"
                    />
                  </div>
                  <div className="d-grid gap-2">
                    <button
                      className="btn mt-2 prime_bg text-light"
                      type="button"
                    >
                      Create Account
                    </button>
                    <button
                      className="btn my-2 btn-outline-secondary"
                      type="button"
                    >
                      <span className="me-3">
                        <Icon icon="flat-color-icons:google" height="20" />
                      </span>{" "}
                      Sign up with google
                    </button>
                    <button
                      className="btn my-2 btn-outline-secondary"
                      type="button"
                    >
                      <spa className="me-3">
                        <Icon icon="devicon:linkedin" height="20" />{" "}
                      </spa>
                      Sign up with linkedIn
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
