import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="main-header main-header-one  clearfix">
        <div className="main-header-one__wrapper">
          <div className="main-header-one__bottom">
            <nav className="main-menu main-menu--1">
              <div className="main-menu__wrapper">
                <div className="container">
                  <div className="main-menu__wrapper-inner">
                    <div className="main-header-one__bottom-left">
                      <div className="logo">
                        <Link to="index.html">
                          <img
                            src="https://images.prismic.io/mofi/c05420f6-fdcd-4986-a544-a431d191cfbe_WhatsApp+Image+2023-02-24+at+2.41.23+PM.jpeg?auto=compress,format"
                            alt=""
                            style={{ width: "100px" }}
                          />
                        </Link>
                      </div>
                    </div>

                    <div className="main-header-one__bottom-right">
                      <div className="main-menu__inner">
                        <Link to="#" className="mobile-nav__toggler">
                          <i className="fa fa-bars"></i>
                        </Link>
                        <ul className="main-menu__list">
                          <li>
                            <Link to="about.html">Registry</Link>
                          </li>
                        </ul>
                      </div>

                      <div className="main-header-one__bottom-right-search">
                        <Link
                          to="#"
                          className="main-menu__search search-toggler icon-search"
                        ></Link>
                      </div>
                      <div className="main-header-one__bottom-right-btn">
                        <Link to="#" className="thm-btn">
                          + Add Listing{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <div className="stricky-header stricked-menu main-menu">
        <div className="sticky-header__content"></div>
      </div>
    </>
  );
}

export default Header;
