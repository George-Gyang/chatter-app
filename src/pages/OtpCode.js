import React from "react";
import sideImg from "../assets/side-pics.png";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

function OtpCode() {
  return (
    <div>
      <div className="">
        <div className="row mx-0">
          <div className="col-md-6 d-none d-md-block px-0 position-relative">
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
          <div className="col-md-6">
            <div className="container py-5">
              <div className="d-flex justify-content-between">
                <Link className="nav-link fw-semibold text-dark" to="/">
                  <apan>
                    {" "}
                    <Icon
                      icon="solar:round-alt-arrow-left-linear"
                      height="20"
                    />
                  </apan>{" "}
                  back
                </Link>
              </div>
              <div className="full_h">
                <div className=" px-md-5">
                  <h5 className="fw-bold text-center mb-3">
                    Enter confirmation code
                  </h5>
                  <p className="text-center">
                    We emailed you a code. Please input the code here for
                    account verification
                  </p>
                  <form className="row px-0 g-3">
                    <div className="col-2"></div>
                    <div className="d-flex col-8 align-items-center  justify-content-between">
                      <input
                        type="email"
                        className="form-control otp"
                        id="inputAddress"
                      />{" "}
                      <input
                        type="email"
                        className="form-control otp"
                        id="inputAddress"
                      />{" "}
                      <input
                        type="email"
                        className="form-control otp"
                        id="inputAddress"
                      />{" "}
                      <input
                        type="email"
                        className="form-control otp"
                        id="inputAddress"
                      />
                    </div>
                    <div className="col-2"></div>
                    <div className="d-grid gap-2">
                      <button
                        className="btn mt-2 prime_bg text-light"
                        type="button"
                      >
                        Create account
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtpCode;
