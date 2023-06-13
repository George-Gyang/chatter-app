import React from "react";
import { Link } from "react-router-dom";

// images
import aboutImg from "../assets/about-img.png";
import landingImg from "../assets/landing-img.png";
import userImg from "../assets/user-img.png";
import writer1 from "../assets/writer1.png";
import writer2 from "../assets/writer2.png";
import writer3 from "../assets/writer3.png";
import { Icon } from "@iconify/react";

import "../App.css";
import Footer from "../components/Footer";

function Landing() {
  return (
    <div>
      <div className="">
        <div className="row mx-0">
          <div className="px-0 position-relative">
            <div>
              <img src={landingImg} alt="" className="img-fluid" />
            </div>
            <div className="overlay d-flex align-items-center">
              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                  <div className="contianer container-md-0">
                    <h1 className=" text-light">
                      Welcome to Chatter: A Haven for Text-Based Content
                    </h1>
                    <p className="">
                      Unleash the Power of Words, Connect with Like-minded
                      Readers and Writers
                    </p>
                    <div className="my-3">
                      <Link to="/register">
                        <button className="btn prime_bg text-light">
                          Get tarted
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
          <div className="py-5">
            <div className="row my-3">
              <div className="col-md-6 my-4">
                <div className=" ps-md-5 container container-md-0">
                  <h2 className="text-dark">About Chatter</h2>
                  <p className="pt-3">
                    Chatter is a multi-functional platform where authors and
                    readers can have access to their own content. It aims to be
                    a traditional bookworm’s heaven and a blog to get access to
                    more text based content. Our vision is to foster an
                    inclusive and vibrant community where diversity is
                    celebrated. We encourage open-mindedness and respect for all
                    individuals, regardless of their backgrounds or beliefs. By
                    promoting dialogue and understanding, we strive
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="container mx-auto">
                  <img src={aboutImg} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <div className="container py-5">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <h2 className="text-center text-dark">
                  Why you should join chatter
                </h2>
                <p>
                  Our goal is to make writers and readers see our platform as
                  their next heaven for blogging, ensuring ease in interactions,
                  connecting with like-minded peers, have access to favorite
                  content based on interests and able to communicate your great
                  ideas with people
                </p>
              </div>
            </div>
          </div>
          <div className="container py-5">
            <div className="col-md-10 offset-md-1">
              <div className=" d-md-flex text-dark justify-content-between">
                <div
                  className="card mx-auto mx-md-0"
                  style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <div className="fade_circle">
                      <span>
                        <Icon icon="carbon:analytics" />
                      </span>
                    </div>
                    <h5 class="card-title mt-3 text-dark">Analytics</h5>
                    <p className="card-text">
                      Analytics to track the number of views, likes and comment
                      and also analyze the performance of your articles over a
                      period of time
                    </p>
                  </div>
                </div>
                <div
                  className="card mx-auto mx-md-0"
                  style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <div className="fade_circle">
                      <span>
                        <Icon
                          icon="fluent:people-community-48-filled"
                          height="20"
                        />
                      </span>
                    </div>{" "}
                    <h5 class="card-title mt-3 text-dark">Content creation</h5>
                    <p className="card-text">
                      Users on the platform can interact with posts they like,
                      comment and engage in discussions{" "}
                    </p>
                  </div>
                </div>
                <div
                  className="card mx-auto mx-md-0"
                  style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <div className="fade_circle">
                      <span>
                        <Icon icon="entypo:news" />
                      </span>
                    </div>
                    <h5 class="card-title mt-3 text-dark">Card title</h5>
                    <p className="card-text">
                      Write nice and appealing with our in-built markdown, a
                      rich text editor{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pinkish py-5 my-3">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className=" px-4">
                  <img
                    src={userImg}
                    alt=""
                    className="img-fluid rounded-circle"
                  />
                </div>
              </div>
              <div className="col-md-8">
                <p>
                  "Chatter has become an integral part of my online experience.
                  As a user of this incredible blogging platform, I have
                  discovered a vibrant community of individuals who are
                  passionate about sharing their ideas and engaging in
                  thoughtful discussions.”
                </p>
                <p className="my-5">
                  <span className="fw-bold">Adebobola Muhydeen, </span> Software
                  developer at Apple
                </p>
                <Link to="/register">
                  <button className="btn prime_bg text-light">
                    Join chatter
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 my-3">
          <div className="container">
            <div className="row">
              <div className="col-md-5 mb-5 mb-md-0">
                <div className="row align-items-center">
                  <div className="col-6 col-md-5 px-5">
                    <div className="mb-5">
                      <img
                        src={writer3}
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                    </div>
                    <div>
                      <img
                        src={writer2}
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="col-6 col-md-5 px-5">
                    <div>
                      <img
                        src={writer1}
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <h4 className="text-dark">
                  Write, read and connect with great minds on chatter
                </h4>
                <p className="my-5">
                  <span className="fw-bold">Adebobola Muhydeen, </span> Software
                  developer at Apple
                </p>
                <Link to="/register">
                  <button className="btn prime_bg text-light">
                    Get started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Landing;
