import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileNav from "../components/MobileNav"
import Search from "../components/Search"

function Listing() {
  return (
    <div>
      <Header />
      <section class="page-header">
        <div
          class="page-header__bg"
    style={{ backgroundImage :'url(assets/images/backgrounds/page-header-img1.jpg)' }}
></div>
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="page-header__wrapper">
                <div class="page-header__content text-center">
                  <h2>Listings</h2>
                  <div class="page-header__menu">
                    <ul>
                      <li>
                        <Link to="index.html">Home</Link>
                      </li>
                      <li>Listings</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="listings_one_wrap listings_one_wrap--listings-three">
        <div class="container clearfix">
          <div class="listings__one__content">
            <div class="listings_one_content_left">
              <div class="row">
                <div class="col-xl-12">
                  <div class="filter">
                    <div class="filter_inner_content">
                      <div class="left">
                        <div class="left_icon">
                          <Link
                            to="listings1.html"
                            class="icon-pixels active"
                          ></Link>
                          <Link
                            to="listings2.html"
                            class="list-icon icon-list"
                          ></Link>
                        </div>
                        <div class="left_text">
                          <h4>Over 85 Restaurants Found</h4>
                        </div>
                      </div>
                      <div class="right">
                        <div class="shorting">
                          <div class="select-box">
                            <select class="selectmenu wide">
                              <option selected="selected">
                                Short by latest
                              </option>
                              <option>Short by latest</option>
                              <option>Short by latest</option>
                              <option>Short by latest</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section class="listings_three-page one">
              <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-6">
                  <div class="place-one__single">
                    <div class="place-one__single-img">
                      <div class="place-one__single-img-inner">
                        <div class="icon-box">
                          <Link to="#">
                            <span class="fa fa-heart"></span>
                          </Link>
                        </div>
                        <img
                          src="assets/images/resources/place-v1-img1.jpg"
                          alt=""
                        />
                      </div>
                      <div class="text-box">
                        <span>Hotel Storn</span>
                      </div>
                    </div>

                    <div class="place-one__single-content">
                      <div class="top-content">
                        <h2>
                          <Link to="listings-details.html">
                            Wedding Off Service
                          </Link>
                        </h2>
                        <p>Excepteur sint occaecat </p>

                        <div class="top-content-bottom">
                          <div class="location-box">
                            <div class="icon-box">
                              <span class="fa fa-map-marker"></span>
                            </div>
                            <div class="text">
                              <p>London,Dhaka</p>
                            </div>
                          </div>

                          <div class="number-box">
                            <div class="icon">
                              <span class="fa fa-clock"></span>
                            </div>
                            <div class="text">
                              <Link to="tel:123456789">+65556522222</Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="bottom-content">
                        <ul class="review-box">
                          <li>
                            <span class="fa fa-star"></span>
                          </li>
                          <li>
                            <span class="fa fa-star"></span>
                          </li>
                          <li>
                            <span class="fa fa-star"></span>
                          </li>
                          <li>
                            <span class="fa fa-star"></span>
                          </li>
                          <li>
                            <span class="icon-star-1"></span>
                          </li>
                        </ul>
                        <div class="count-box">
                          <p>(04)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6">
                  <div class="place-one__single">
                    <div class="place-one__single-img">
                      <div class="place-one__single-img-inner">
                        <div class="icon-box">
                          <Link to="#">
                            <span class="fa fa-heart"></span>
                          </Link>
                        </div>
                        <img
                          src="assets/images/resources/place-v1-img2.jpg"
                          alt=""
                        />
                      </div>
                      <div class="text-box">
                        <span>Bulding As</span>
                      </div>
                    </div>

                    <div class="place-one__single-content">
                      <div class="top-content">
                        <h2>
                          <Link to="listings-details.html">
                            Lisiting & Hotel Store{" "}
                          </Link>
                        </h2>
                        <p>Excepteur sint occaecat </p>

                        <div class="top-content-bottom">
                          <div class="location-box">
                            <div class="icon-box">
                              <span class="fa fa-map-marker"></span>
                            </div>
                            <div class="text">
                              <p>London,Dhaka</p>
                            </div>
                          </div>

                          <div class="number-box">
                            <div class="icon">
                              <span class="fa fa-clock"></span>
                            </div>
                            <div class="text">
                              <Link to="tel:123456789">+65556522222</Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="bottom-content">
                        <ul class="review-box">
                          <li>
                            <span class="fa fa-star"></span>
                          </li>
                          <li>
                            <span class="fa fa-star"></span>
                          </li>
                          <li>
                            <span class="fa fa-star"></span>
                          </li>
                          <li>
                            <span class="fa fa-star"></span>
                          </li>
                          <li>
                            <span class="icon-star-1"></span>
                          </li>
                        </ul>
                        <div class="count-box">
                          <p>(04)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <Footer />
      <MobileNav/>
      <Search/>
    </div>
  );
}

export default Listing;
