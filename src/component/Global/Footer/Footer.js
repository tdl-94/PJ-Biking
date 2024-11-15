import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <div className="footer-subscribe-col">
          <div className="footer-widget">
            <img
              src="https://biking-workdo.myshopify.com/cdn/shop/files/Motor..png?v=1681724021"
              alt=""
            />
            <h3>
              Reach out &amp; let your <b> mind explore </b>{" "}
            </h3>
            <p>
              The choice of terrain depends on personal preference and the type
              of biking one wishes to engage in.
            </p>
          </div>
        </div>
        <div className="footer-col footer-link">
          <div className="footer-widget">
            <h4>Navigation:</h4>

            <ul>
              <li>
                <a href="/">Search</a>
              </li>

              <li>
                <a href="/">All collections</a>
              </li>

              <li>
                <a href="/">All products</a>
              </li>

              <li>
                <a href="https://biking-workdo.myshopify.com/cart">My Cart</a>
              </li>

              <li>
                <a href="/">Best seller</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-col footer-link">
          <div className="footer-widget">
            <h4>Categories:</h4>
            <ul>
              <li>
                <a href="/">About Us</a>
              </li>

              <li>
                <a href="/">Contact with us</a>
              </li>

              <li>
                <a href="/">Faq's</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-col social-icons">
          <div className="footer-widget">
            <h4> Share: </h4>
            <ul className="icon-social">
              <li>
                <a href="https://www.youtube.com" target="">
                  <i className="fa-brands fa-square-youtube"></i>
                </a>
              </li>

              <li>
                <a href="https://facebook.com" target="">
                  <i className="fa-brands fa-square-facebook"></i>
                </a>
              </li>

              <li>
                <a href="http://instagram.com" target="">
                  <i className="fa-brands fa-square-instagram"></i>
                </a>
              </li>

              <li>
                <a href="https://twitter.com" target="">
                  <i className="fa-brands fa-square-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <p>
              © 2024,{" "}
              <a href="/" title="">
                Biking WorkDo
              </a>
              ,{" "}
              <a href="/" target="_blank" title="workdo">
                Powered by WorkDo.io
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
