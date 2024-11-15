import React, { useEffect, useState } from "react";
import "./Categories.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardProduct from "../../../Global/CardProduct/CardProduct";
import axios from "axios";
const Categories = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
  };
  const [products, setProducts] = useState([]);
  const [selectedType, setSelectedType] = useState("Leather Suit");
  const getProduct = async (type) => {
    try {
      const response = await axios.get(
        "https://671646c833bc2bfe40bd38b4.mockapi.io/products"
      );
      const filteredProducts = response.data.filter(
        (product) => product.type === type
      );
      setProducts(filteredProducts);
    } catch (err) {
      alert(err);
    }
  };
  useEffect(() => {
    getProduct(selectedType);
  }, [selectedType]);
  const handleTabClick = (type) => {
    setSelectedType(type);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-4 col-12">
          <div className="gaming-leftbar">
            <div className="section-title">
              <h2>Ride and Revel</h2>
            </div>
            <ul className="cat-tab  ">
              <li
                className={`tab-link${
                  selectedType === "Leather Suit" ? " active" : ""
                }`}
                onClick={() => handleTabClick("Leather Suit")}
              >
                <a href="/">Leather Suits</a>
              </li>
              <li
                className={`tab-link${
                  selectedType === "Jacket" ? " active" : ""
                }`}
                onClick={() => handleTabClick("Jacket")}
              >
                <a href="/">Jacket</a>
              </li>
              <li
                className={`tab-link${
                  selectedType === "Shoes" ? " active" : ""
                }`}
                onClick={() => handleTabClick("Shoes")}
              >
                <a href="/">Shoes</a>
              </li>
            </ul>
            <div className="more-categories">
              <a href="/collections">SHOW MORE CATEGORIES</a>
            </div>
          </div>
        </div>
        <div className="col-lg-9 col-md-8 col-12">
          <Slider {...settings}>
            {products.map((item) => (
              <CardProduct
                key={item.id}
                id={item.id}
                title={item.title}
                type={item.type}
                colors={item.colors}
                image={item.img}
                price={item.price}
                sale={item.priceSale}
              />
            ))}
          </Slider>
        </div>
      </div>
      <div className="about">
        <div className="about-title">About our shop</div>
        <div className="row ">
          <div className="col-xl-3 col-md-3 col-sm-6 col-12">
            <div className="about-us-box">
              <h3 className="h2">01</h3>
              <h4 className="h3">Gift boxes</h4>
              <p>Finished products products and gift wrapping</p>
            </div>
          </div>
          <div className="col-xl-3 col-md-3 col-sm-6 col-12">
            <div className="about-us-box">
              <h3 className="h2">02</h3>
              <h4 className="h3">Promotions</h4>
              <p>Large promotions with numerous discounts</p>
            </div>
          </div>
          <div className="col-xl-3 col-md-3 col-sm-6 col-12">
            <div className="about-us-box">
              <h3 className="h2">03</h3>
              <h4 className="h3">Shipping</h4>
              <p>Free shipping on any order from $ 150</p>
            </div>
          </div>
          <div className="col-xl-3 col-md-3 col-sm-6 col-12">
            <div className="about-us-box">
              <h3 className="h2">04</h3>
              <h4 className="h3">Quality</h4>
              <p>All products are made by engineers from India</p>
            </div>
          </div>
        </div>
      </div>
      <div className="best-product"><div className="container-fluid container-product">
      <div className="product-title">
        <h2>Best Product</h2>
        <div className="btn-flex">
          <a href="/" className="btn-transparent">
            Show products
            <i className="fa-brands fa-product-hunt"></i>
          </a>
        </div>
      </div>

      <Slider {...settings}>
        {products.map((item) => (
          <div className="item">
            <CardProduct
              key={item.id}
              id={item.id}
              title={item.title}
              type={item.type}
              colors={item.colors}
              image={item.img}
              price={item.price}
              sale={item.priceSale}
            ></CardProduct>
          </div>
        ))}
      </Slider>
        </div>
      </div>
    </div>
  );
};

export default Categories;
