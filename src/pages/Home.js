import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav";
import Search from "../components/Search";

function Home() {
  return (
    <div>
      <Header />

      <section className="banner-one">
        <div className="banner-one__inner">
          <div
            className="slider-bg-slide"
            data-options='{ "delay": 5000, "slides": [ { "src": "assets/images/backgrounds/banner-v1-bg1.jpg" }, { "src": "assets/images/backgrounds/banner-v1-bg2.jpg" }, { "src": "assets/images/backgrounds/banner-v1-bg3.jpg" } ], "transition": "fade", "animation": "kenburns", "timer": false, "align": "top" }'
          ></div>
          <div className="slider-bg-slide-overly"></div>
          <div className="container">
            <div className="banner-one__content text-center">
              <div className="title">
                <h2>National Asset Registry</h2>
              </div>
              <div className="text">
                <p>
                  ListingEasy is the hassle-free way of discovering the city
                </p>
              </div>
              <div className="banner-one__tab-box">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="banner-one__tab tabs-box">
                      <div className="banner-one__tab-button">
                        <ul className="tab-buttons clearfix">
                          <li data-tab="#places" className="tab-btn active-btn">
                            <h4>Places</h4>
                          </li>
                          <li data-tab="#events " className="tab-btn">
                            <h4>Events</h4>
                          </li>
                          <li data-tab="#restaurants" className="tab-btn">
                            <h4>Restaurants</h4>
                          </li>
                          <li data-tab="#hotels" className="tab-btn">
                            <h4>Hotels</h4>
                          </li>
                        </ul>
                      </div>

                      <div className="tabs-content">
                        <div className="tab active-tab" id="places">
                          <div className="banner-one__tab-content-item">
                            <div className="banner-one__tab-content-places">
                              <div className="row">
                                <div className="col-xl-12">
                                  <div className="banner-one__tab-content-places-form">
                                    <form
                                      action="assets/inc/sendemail.php"
                                      className="comment-one__form contact-form-validated"
                                      novalidate="novalidate"
                                    >
                                      <ul>
                                        <li>
                                          <div className="comment-form__input-box">
                                            <div className="icon">
                                              <span className="fas fa-keyboard"></span>
                                            </div>
                                            <input
                                              type="text"
                                              placeholder="What are you looking for?"
                                              name="name"
                                            />
                                          </div>
                                        </li>

                                        <li>
                                          <div className="comment-form__input-box">
                                            <div className="icon">
                                              <span className="icon-pin"></span>
                                            </div>
                                            <input
                                              type="text"
                                              placeholder="Location"
                                              name="name"
                                            />
                                          </div>
                                        </li>

                                        <li>
                                          <div className="comment-form__input-box clearfix">
                                            <div className="icon">
                                              <span className="icon-list"></span>
                                            </div>
                                            <div className="select-box">
                                              <select className="selectmenu wide">
                                                <option selected="selected">
                                                  All Categories
                                                </option>
                                                <option>Shops</option>
                                                <option>Hotels</option>
                                                <option>Restaurants</option>
                                              </select>
                                            </div>
                                          </div>
                                        </li>

                                        <li>
                                          <button
                                            className="thm-btn comment-form__btn"
                                            type="submit"
                                            data-loading-text="Please wait..."
                                          >
                                            Search
                                            <span className="icon-search"></span>
                                          </button>
                                        </li>
                                      </ul>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab" id="events">
                          <div className="banner-one__tab-content-item">
                            <div className="banner-one__tab-content-events">
                              <div className="row">
                                <div className="col-xl-12">
                                  <div className="banner-one__tab-content-places-form">
                                    <form
                                      action="assets/inc/sendemail.php"
                                      className="comment-one__form contact-form-validated"
                                      novalidate="novalidate"
                                    >
                                      <ul>
                                        <li>
                                          <div className="comment-form__input-box">
                                            <div className="icon">
                                              <span className="fas fa-handshake"></span>
                                            </div>
                                            <input
                                              type="text"
                                              placeholder="Event Name or Place"
                                              name="name"
                                            />
                                          </div>
                                        </li>

                                        <li>
                                          <div className="comment-form__input-box clearfix">
                                            <div className="icon">
                                              <span className="icon-list"></span>
                                            </div>
                                            <div className="select-box">
                                              <select className="selectmenu wide">
                                                <option selected="selected">
                                                  All Cities
                                                </option>
                                                <option>New York</option>
                                                <option>Dhaka</option>
                                                <option>Paris</option>
                                              </select>
                                            </div>
                                          </div>
                                        </li>

                                        <li>
                                          <div className="comment-form__input-box">
                                            <div className="icon">
                                              <span className="icon-calendar"></span>
                                            </div>
                                            <input
                                              type="text"
                                              name="form_subject"
                                              value=""
                                              placeholder="Select Date"
                                              id="datepicker"
                                            />
                                          </div>
                                        </li>

                                        <li>
                                          <button
                                            className="thm-btn comment-form__btn"
                                            type="submit"
                                            data-loading-text="Please wait..."
                                          >
                                            Search
                                            <span className="icon-search"></span>
                                          </button>
                                        </li>
                                      </ul>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab" id="restaurants">
                          <div className="banner-one__tab-content-item">
                            <div className="banner-one__tab-content-restaurants">
                              <div className="row">
                                <div className="col-xl-12">
                                  <div className="banner-one__tab-content-places-form">
                                    <form
                                      action="assets/inc/sendemail.php"
                                      className="comment-one__form contact-form-validated"
                                      novalidate="novalidate"
                                    >
                                      <ul>
                                        <li>
                                          <div className="comment-form__input-box">
                                            <div className="icon">
                                              <span className="icon-big-cheeseburger"></span>
                                            </div>
                                            <input
                                              type="text"
                                              placeholder="Restaurant Name"
                                              name="name"
                                            />
                                          </div>
                                        </li>

                                        <li>
                                          <div className="comment-form__input-box">
                                            <div className="icon">
                                              <span className="icon-calendar"></span>
                                            </div>
                                            <input
                                              type="text"
                                              name="form_subject"
                                              value=""
                                              placeholder="Select Date"
                                              id="datepicker2"
                                            />
                                          </div>
                                        </li>

                                        <li>
                                          <div className="comment-form__input-box">
                                            <div className="icon">
                                              <span className="icon-user"></span>
                                            </div>
                                            <input
                                              type="number"
                                              placeholder="Persons"
                                              name="name"
                                            />
                                          </div>
                                        </li>

                                        <li>
                                          <button
                                            className="thm-btn comment-form__btn"
                                            type="submit"
                                            data-loading-text="Please wait..."
                                          >
                                            Search
                                            <span className="icon-search"></span>
                                          </button>
                                        </li>
                                      </ul>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tab" id="hotels">
                          <div className="banner-one__tab-content-item">
                            <div className="banner-one__tab-content-hotels">
                              <div className="row">
                                <div className="col-xl-12">
                                  <div className="banner-one__tab-content-places-form">
                                    <form
                                      action="assets/inc/sendemail.php"
                                      className="comment-one__form contact-form-validated"
                                      novalidate="novalidate"
                                    >
                                      <ul>
                                        <li>
                                          <div className="comment-form__input-box">
                                            <div className="icon">
                                              <span className="icon-big-cheeseburger"></span>
                                            </div>
                                            <input
                                              type="text"
                                              placeholder="Hotel Name"
                                              name="name"
                                            />
                                          </div>
                                        </li>

                                        <li>
                                          <div className="comment-form__input-box">
                                            <div className="icon">
                                              <span className="icon-user"></span>
                                            </div>
                                            <input
                                              type="number"
                                              placeholder="Persons"
                                              name="name"
                                            />
                                          </div>
                                        </li>

                                        <li>
                                          <div className="comment-form__input-box">
                                            <div className="icon">
                                              <span className="icon-calendar"></span>
                                            </div>
                                            <input
                                              type="text"
                                              name="form_subject"
                                              value=""
                                              placeholder="Select Date"
                                              id="datepicker-inline"
                                            />
                                          </div>
                                        </li>

                                        <li>
                                          <button
                                            className="thm-btn comment-form__btn"
                                            type="submit"
                                          >
                                            Search
                                            <span className="icon-search"></span>
                                          </button>
                                        </li>
                                      </ul>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="banner-one__categories">
                <div className="title">
                  <h4>Just looking around ? Use quick search by category :</h4>
                </div>
                <ul className="banner-one__categories-list">
                  <li className="banner-one__categories-list-item">
                    <div className="inner">
                      <div className="icon">
                        <span className="icon-hotels"></span>
                      </div>
                      <p>
                        <Link to="#">Hotels</Link>
                      </p>
                    </div>
                  </li>

                  <li className="banner-one__categories-list-item">
                    <div className="inner">
                      <div className="icon">
                        <span className="icon-drink"></span>
                      </div>
                      <p>
                        <Link to="#">Events</Link>
                      </p>
                    </div>
                  </li>

                  <li className="banner-one__categories-list-item">
                    <div className="inner">
                      <div className="icon">
                        <span className="icon-shopping-cart"></span>
                      </div>
                      <p>
                        <Link to="#">Shops</Link>
                      </p>
                    </div>
                  </li>

                  <li className="banner-one__categories-list-item">
                    <div className="inner">
                      <div className="icon">
                        <span className="icon-big-cheeseburger"></span>
                      </div>
                      <p>
                        <Link to="#">Restaurants</Link>
                      </p>
                    </div>
                  </li>

                  <li className="banner-one__categories-list-item">
                    <div className="inner">
                      <div className="icon">
                        <span className="icon-dumbbell"></span>
                      </div>
                      <p>
                        <Link to="#">Fitness</Link>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="place-one">
        <div className="container">
          <div className="sec-title text-center">
            <h2 className="sec-title__title">Top Places Visited</h2>
            <p className="sec-title__text">
              Excepteur s occaecat cupidatat proident sunt
            </p>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="place-one__single">
                <div className="place-one__single-img">
                  <div className="place-one__single-img-inner">
                    <div className="icon-box">
                      <Link to="#">
                        <span className="fa fa-heart"></span>
                      </Link>
                    </div>
                    <img
                      src="assets/images/resources/place-v1-img1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="text-box">
                    <span>Hotel Storn</span>
                  </div>
                </div>

                <div className="place-one__single-content">
                  <div className="top-content">
                    <h2>
                      <Link to="listings-details.html">
                        Wedding Off Service
                      </Link>
                    </h2>
                    <p>Excepteur sint occaecat </p>

                    <div className="top-content-bottom">
                      <div className="location-box">
                        <div className="icon-box">
                          <span className="fa fa-map-marker"></span>
                        </div>
                        <div className="text">
                          <p>London,Dhaka</p>
                        </div>
                      </div>

                      <div className="number-box">
                        <div className="icon">
                          <span className="fa fa-clock"></span>
                        </div>
                        <div className="text">
                          <Link to="tel:123456789">+65556522222</Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bottom-content">
                    <ul className="review-box">
                      <li>
                        <span className="fa fa-star"></span>
                      </li>
                      <li>
                        <span className="fa fa-star"></span>
                      </li>
                      <li>
                        <span className="fa fa-star"></span>
                      </li>
                      <li>
                        <span className="fa fa-star"></span>
                      </li>
                      <li>
                        <span className="icon-star-1"></span>
                      </li>
                    </ul>
                    <div className="count-box">
                      <p>(04)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="place-one__single">
                <div className="place-one__single-img">
                  <div className="place-one__single-img-inner">
                    <div className="icon-box">
                      <Link to="#">
                        <span className="fa fa-heart"></span>
                      </Link>
                    </div>
                    <img
                      src="assets/images/resources/place-v1-img2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="text-box">
                    <span>Bulding As</span>
                  </div>
                </div>

                <div className="place-one__single-content">
                  <div className="top-content">
                    <h2>
                      <Link to="listings-details.html">
                        Lisiting & Hotel Store{" "}
                      </Link>
                    </h2>
                    <p>Excepteur sint occaecat </p>

                    <div className="top-content-bottom">
                      <div className="location-box">
                        <div className="icon-box">
                          <span className="fa fa-map-marker"></span>
                        </div>
                        <div className="text">
                          <p>London,Dhaka</p>
                        </div>
                      </div>

                      <div className="number-box">
                        <div className="icon">
                          <span className="fa fa-clock"></span>
                        </div>
                        <div className="text">
                          <Link to="tel:123456789">+65556522222</Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bottom-content">
                    <ul className="review-box">
                      <li>
                        <span className="fa fa-star"></span>
                      </li>
                      <li>
                        <span className="fa fa-star"></span>
                      </li>
                      <li>
                        <span className="fa fa-star"></span>
                      </li>
                      <li>
                        <span className="icon-star-1"></span>
                      </li>
                      <li>
                        <span className="icon-star-1"></span>
                      </li>
                    </ul>
                    <div className="count-box">
                      <p>(03)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="place-one__single">
                <div className="place-one__single-img">
                  <div className="place-one__single-img-inner">
                    <div className="icon-box">
                      <Link to="#">
                        <span className="fa fa-heart"></span>
                      </Link>
                    </div>
                    <img
                      src="assets/images/resources/place-v1-img3.jpg"
                      alt=""
                    />
                  </div>
                  <div className="text-box">
                    <span>Storn Car</span>
                  </div>
                </div>

                <div className="place-one__single-content">
                  <div className="top-content">
                    <h2>
                      <Link to="listings-details.html">Vendor Hotel Car</Link>
                    </h2>
                    <p>Excepteur sint occaecat </p>

                    <div className="top-content-bottom">
                      <div className="location-box">
                        <div className="icon-box">
                          <span className="fa fa-map-marker"></span>
                        </div>
                        <div className="text">
                          <p>London,Dhaka</p>
                        </div>
                      </div>

                      <div className="number-box">
                        <div className="icon">
                          <span className="fa fa-clock"></span>
                        </div>
                        <div className="text">
                          <Link to="tel:123456789">+65556522222</Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bottom-content">
                    <ul className="review-box">
                      <li>
                        <span className="fa fa-star"></span>
                      </li>
                      <li>
                        <span className="fa fa-star"></span>
                      </li>
                      <li>
                        <span className="fa fa-star"></span>
                      </li>
                      <li>
                        <span className="fa fa-star"></span>
                      </li>
                      <li>
                        <span className="fa fa-star"></span>
                      </li>
                    </ul>
                    <div className="count-box">
                      <p>(05)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-one">
        <div className="container">
          <div className="sec-title text-center">
            <h2 className="sec-title__title">Best Wedding Vendors</h2>
            <p className="sec-title__text">
              Excepteur s occaecat cupidatat proident sunt
            </p>
          </div>
          <div className="row">
            <div
              className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft"
              data-wow-delay="0ms"
              data-wow-duration="1000ms"
            >
              <div className="features-one__single text-center">
                <div className="features-one__single-icon">
                  <span className="icon-budget"></span>
                </div>
                <div className="features-one__single-title">
                  <h2>
                    <Link to="#">Budget Planing</Link>
                  </h2>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft"
              data-wow-delay="100ms"
              data-wow-duration="1000ms"
            >
              <div className="features-one__single text-center">
                <div className="features-one__single-icon">
                  <span className="icon-employee"></span>
                </div>
                <div className="features-one__single-title">
                  <h2>
                    <Link to="#">Vendor Manger</Link>
                  </h2>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-3 col-md-6 wow fadeInRight"
              data-wow-delay="0ms"
              data-wow-duration="1000ms"
            >
              <div className="features-one__single text-center">
                <div className="features-one__single-icon">
                  <span className="icon-checklist"></span>
                </div>
                <div className="features-one__single-title">
                  <h2>
                    <Link to="#">Check List</Link>
                  </h2>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-3 col-md-6 wow fadeInRight"
              data-wow-delay="100ms"
              data-wow-duration="1000ms"
            >
              <div className="features-one__single text-center">
                <div className="features-one__single-icon">
                  <span className="icon-hotels"></span>
                </div>
                <div className="features-one__single-title">
                  <h2>
                    <Link to="#">Lisiting Hotel </Link>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="video-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="video-one__inner">
                <div
                  className="video-one__bg"
                  style={{
                    backgroundImage:
                      "url(assets/images/backgrounds/video-v1-bg.jpg)",
                  }}
                ></div>
                <div className="video-box">
                  <Link
                    to="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                    className="video-popup"
                  >
                    <div className="video-one__video-icon">
                      <span className="fa fa-play"></span>
                      <i className="ripple"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <MobileNav />
      <Search />
    </div>
  );
}

export default Home;
