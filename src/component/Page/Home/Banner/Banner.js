import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="banner-tagline">
              <span className="banner-label">Featured</span>
              <p>New featured collection </p>
            </div>

            <div className="banner-title">
              <h2 className="xl-text">
                Best Motorcycle
                <br /> <b>parts and bikes</b>
              </h2>
              <p>
                Exhaust System: The exhaust system is responsible for expelling
                the exhaust gases produced during combustion. It typically
                consists of an exhaust pipe, muffler, and sometimes a catalytic
                converter.
              </p>
            </div>
            <div className="btn-flex">
              <a href="/" className="btn-primary">
                Show products
                <i className="fa-brands fa-product-hunt"></i>
              </a>
              <a href="/" className="btn-banner">
                Show Collections
                <i className="fa-brands fa-product-hunt"></i>
              </a>
            </div>
          </div>
          <div className="home-banner col-lg-6 col-12">
            <img
              src="https://biking-workdo.myshopify.com/cdn/shop/files/home-banner-img.png?v=1681724864"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
