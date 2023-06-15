import React, { useState } from "react";
import { Link } from "react-router-dom";

import sideImg from "../assets/side-pics.png";
import { Icon } from "@iconify/react";

import "../App.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const [address, setAddress] = useState('');
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // register submission

  async function register(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({
        email,
        firstName,
        lastName,
        password,
        confirmPassword,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status !== 200){
      alert("registrartion fail")
    }
    else{
      alert("registration Successful")
    }
  }
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
                  <Link className="nav-link fw-semibold text-dark" to="/">
                    REGISTER
                  </Link>
                  <Link className="nav-link fw-semibold text-dark" to="/login">
                    LOG IN
                  </Link>
                </div>
                <h5 className="fw-bold text-center my-3">
                  Register as a Writer/Reader
                </h5>
                <form onSubmit={register} className="row px-0 g-3">
                  <div className="col-12">
                    <label htmlFor="userAddress" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="userAddress"
                      value={email}
                      placeholder="Johndoe@gmail.com"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="John"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      value={lastName}
                      placeholder="Doe"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="userType" className="form-label">
                      You are joining as?
                    </label>
                    <select id="userType" className="form-select">
                      <option>Writer</option>
                      <option>Reader</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      placeholder="**********"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="**********"
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <div className="d-grid gap-2">
                    <button
                      className="btn mt-2 prime_bg text-light"
                      type="submit"
                    >
                      Create Account
                    </button>
                  </div>
                </form>
                <div className="d-grid gap-2">
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
                    <span className="me-3">
                      <Icon icon="devicon:linkedin" height="20" />{" "}
                    </span>
                    Sign up with linkedIn
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
