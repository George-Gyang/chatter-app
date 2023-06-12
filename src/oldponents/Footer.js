import React from "react";
import { Link } from "react-router-dom";
import "../App.css"

function Footer() {
  return (
    <div>
      <footer className="footer-one">
        <div className="footer-one__bottom clearfix">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="footer-one__bottom-inner text-center">
                  <div className="footer-one__bottom-text">
                    <p className="footer_tag">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 64 64"
                        >
                          <path
                            fill="#189b62"
                            d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2zm-9.833 56.213V5.787C25.229 4.635 28.541 4 32 4s6.771.635 9.833 1.787v52.426C38.771 59.365 35.459 60 32 60s-6.771-.635-9.833-1.787z"
                          />
                        </svg>
                      </span> © 2023 Copyright MOFI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <Link
        to="#"
        data-target="html"
        className="scroll-to-target scroll-to-top"
      >
        <i className="fa fa-angle-up"></i>
      </Link>
    </div>
  );
}

export default Footer;
