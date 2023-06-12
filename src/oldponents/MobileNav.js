import React from "react";
import { Link } from "react-router-dom";


function MobileNav() {
  return (
    <div className="mobile-nav__wrapper">
      <div className="mobile-nav__overlay mobile-nav__toggler"></div>
      <div className="mobile-nav__content">
        <span className="mobile-nav__close mobile-nav__toggler">
          <i className="fa fa-times"></i>
        </span>

        <div className="logo-box">
          <Link to="index.html" aria-label="logo image">
            <img src="assets/images/resources/logo-2.png" width="155" alt="" />
          </Link>
        </div>
        <div className="mobile-nav__container"></div>

        <ul className="mobile-nav__contact list-unstyled">
          <li>
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <Link to="mailto:needhelp@packageName__.com">
              needhelp@korax.com
            </Link>
          </li>
          <li>
            <i className="fa fa-phone" aria-hidden="true"></i>
            <Link to="tel:666-888-0000">666 888 0000</Link>
          </li>
        </ul>
        <div className="mobile-nav__top">
          <div className="mobile-nav__social">
            <Link to="#" className="fab fa-twitter"></Link>
            <Link to="#" className="fab fa-facebook-square"></Link>
            <Link to="#" className="fab fa-pinterest-p"></Link>
            <Link to="#" className="fab fa-instagram"></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;