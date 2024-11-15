import React, { useEffect, useState } from "react";
import "./Product.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import CardProduct from "../../Global/CardProduct/CardProduct";
const Product = () => {
  var settings = {
    dots: true,
    infinite: true,
    className: "center",
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };
  const [products, setProducts] = useState([]);
  const getProduct = async () => {
    try {
      const response = await axios.get(
        "https://671646c833bc2bfe40bd38b4.mockapi.io/products"
      );
      setProducts(response.data);
    } catch (err) {
      alert(err);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="container-fluid container-product">
      <div className="product-title">
        <h2>Make territory with your bike</h2>
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
  );
};

export default Product;
