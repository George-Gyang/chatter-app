// import React, { useState } from "react";
import sideImg from "../assets/side-pics.png";
import { Link, Navigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [redirect, setRedirect] = useState(false);

  // const login = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch("http://localhost:4000/login", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       email,
  //       password,
  //     }),
  //     headers: { "Content-Type": "application/json" },
  //     credentials: "include",
  //   });

  //   if (response.ok) {
  //     setRedirect(true);
  //   } else {
  //     alert(" Incorrect email or password");
  //   }
  // };

  // if (setRedirect) {
  //   return <Navigate to={"/"} />;
  // }

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
            <div className="container py-5">
              <div className=" px-md-5">
                <div className="d-flex justify-content-between">
                  <Link className="nav-link fw-semibold text-dark" to="/">
                    REGISTER
                  </Link>
                  <Link className="nav-link fw-semibold text-dark" to="/login">
                    LOG IN
                  </Link>
                </div>
                <h5 className="fw-bold text-center mb-3">Welcome back</h5>
                <form className="row px-0 g-3" onSubmit={login}>
                  <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputAddress"
                      placeholder="Johndoe@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputAddress2"
                      placeholder="**********"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputCity" className="form-label">
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
                      type="submit"
                    >
                      Login
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

// export default Login;
