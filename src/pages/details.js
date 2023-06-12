import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Search from "../components/Search";
import MobileNav from "../components/MobileNav";

const Details = () => {
  return (
    <div>
      <Header />

      <section className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/page-header-img1.jpg)",
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-header__wrapper">
                <div className="page-header__content text-center">
                  <h2>Listings Details</h2>
                  <div className="page-header__menu">
                    <ul>
                      <li>
                        <Link to="index.html">Home</Link>
                      </li>
                      <li>Listings Details</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="listings-details-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="listings-details-page__content">
                <div className="listings-details-page__content-img1">
                  <img
                    src="assets/images/resources/listings_details-img1.jpg"
                    alt="#"
                  />
                </div>

                <div className="listings-details-page__content-text-box1">
                  <h3>Description</h3>
                  <p className="text1">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English.
                  </p>

                  <p className="text2">
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and a search
                    for 'lorem ipsum' will uncover many web sites still in their
                    infancy. Various versions have evolved over the years,
                    sometimes by accident, sometimes on purpose (injected humour
                    and the like).
                  </p>

                  <div className="btn-box">
                    <Link to="#" className="thm-btn">
                      Visit Website
                    </Link>
                  </div>
                </div>

                <div className="listings-details-page__content-listing-features">
                  <h3>Listing Features</h3>
                  <ul>
                    <li>
                      <div className="inner">
                        <div className="icon">
                          <Link to="#">
                            {" "}
                            <span className="icon-wifi"></span>
                          </Link>
                        </div>

                        <div className="text">
                          <Link to="#"> Free WiFi</Link>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="inner">
                        <div className="icon">
                          <Link to="#">
                            {" "}
                            <span className="icon-parking"></span>
                          </Link>
                        </div>

                        <div className="text">
                          <Link to="#"> Free Parking</Link>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="inner">
                        <div className="icon">
                          <Link to="#">
                            {" "}
                            <span className="icon-love"></span>
                          </Link>
                        </div>

                        <div className="text">
                          <Link to="#"> Pet Friendly</Link>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="inner">
                        <div className="icon">
                          <Link to="#">
                            {" "}
                            <span className="icon-shopping-cart"></span>
                          </Link>
                        </div>

                        <div className="text">
                          <Link to="#"> Online Ordering</Link>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="inner">
                        <div className="icon">
                          <Link to="#">
                            {" "}
                            <span className="fa fa-users"></span>
                          </Link>
                        </div>

                        <div className="text">
                          <Link to="#">Group Visits</Link>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="inner">
                        <div className="icon">
                          <Link to="#">
                            {" "}
                            <span className="fa fa-cloud"></span>
                          </Link>
                        </div>

                        <div className="text">
                          <Link to="#"> Air Conditioned</Link>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="comment-form listings-details-page__content-form">
                  <h3 className="comment-form__title">Add Review</h3>
                  <form
                    action="assets/inc/sendemail.php"
                    className="comment-one__form contact-form-validated"
                    novalidate="novalidate"
                  >
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="comment-form__input-box">
                          <input
                            type="text"
                            placeholder="Full name"
                            name="name"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="comment-form__input-box">
                          <input
                            type="email"
                            placeholder="Email Address"
                            name="email"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="comment-form__input-box text-message-box">
                          <textarea
                            name="message"
                            placeholder="Comments"
                          ></textarea>
                        </div>
                        <div className="comment-form__btn-box">
                          <button
                            type="submit"
                            className="comment-form__btn thm-btn"
                          >
                            Post Comment
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-5">
              <div className="listings-details-page__sidebar">
                <div
                  className="listings-details-page__sidebar-single sidebar__working-hours wow animated fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="title">
                    <h2>Working Hours</h2>
                  </div>

                  <ul className="sidebar__working-hours-list">
                    <li>
                      <Link to="#">
                        Saturday <span>Closed</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Sunday <span>9 AM - 5 PM</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Monday <span>9 AM - 5 PM</span>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Tuesday <span>9 AM - 5 PM</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Wednesday <span>9 AM - 5 PM</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Thursday <span>9 AM - 5 PM</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Friday <span>Closed</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div
                  className="listings-details-page__sidebar-single sidebar__location-contacts wow animated fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="title">
                    <h2>Location / Contacts</h2>
                  </div>

                  <div className="sidebar__location-contacts-google-map">
                    <iframe
                      title="main video"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                      className="sidebar__location-contacts-map"
                      allowfullscreen
                    ></iframe>
                  </div>

                  <ul className="sidebar__location-contacts-list">
                    <li>
                      <p>
                        <i className="icon-pin"></i> <span> Adress :</span> USA
                        20TH Brooklyn NY
                      </p>
                    </li>

                    <li>
                      <p>
                        <i className="icon-phone-call"></i>{" "}
                        <span> Phone :</span>{" "}
                        <Link to="tel:123456789">+099 695 695 35</Link>
                      </p>
                    </li>

                    <li>
                      <p>
                        <i className="icon-email"></i> <span> Mail :</span>{" "}
                        <Link to="mailto:info@madina.com">
                          rubel@example.com
                        </Link>
                      </p>
                    </li>

                    <li>
                      <p>
                        <i className="icon-email"></i> <span> Website :</span>{" "}
                        <Link to="https://www.themeholder.com/">
                          Themeholder1.com
                        </Link>
                      </p>
                    </li>
                  </ul>

                  <ul className="sidebar__location-contacts-social-links">
                    <li>
                      <Link to="#">
                        <span className="icon-facebook-app-symbol"></span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <span className="icon-twitter"></span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <span className="icon-instagram"></span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <span className="icon-pinterest"></span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div
                  className="listings-details-page__sidebar-single sidebar__post wow animated fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="title">
                    <h2>Similar Listings </h2>
                  </div>

                  <ul className="sidebar__post-list list-unstyled">
                    <li>
                      <div className="sidebar__post-image">
                        <img src="assets/images/blog/lp-1-1.jpg" alt="" />
                      </div>
                      <div className="sidebar__post-content">
                        <h3>
                          <Link to="#">
                            Contrary to popular <br /> belief
                          </Link>
                        </h3>
                        <span className="sidebar__post-content-meta">
                          <i className="icon-clock"></i>
                          April 25, 2022
                        </span>
                      </div>
                    </li>

                    <li>
                      <div className="sidebar__post-image">
                        <img src="assets/images/blog/lp-1-2.jpg" alt="" />
                      </div>
                      <div className="sidebar__post-content">
                        <h3>
                          <Link to="#">
                            All the Lorem Ipsum <br />
                            generators on
                          </Link>
                        </h3>
                        <span className="sidebar__post-content-meta">
                          <i className="icon-clock"></i>
                          April 25, 2022
                        </span>
                      </div>
                    </li>

                    <li>
                      <div className="sidebar__post-image">
                        <img src="assets/images/blog/lp-1-3.jpg" alt="" />
                      </div>
                      <div className="sidebar__post-content">
                        <h3>
                          <Link to="#">
                            The standard chunk <br /> of Lorem Ipsum
                          </Link>
                        </h3>
                        <span className="sidebar__post-content-meta">
                          <i className="icon-clock"></i>
                          April 25, 2022
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <MobileNav/>
      <Search/>
    </div>
  );
};

export default Details;
