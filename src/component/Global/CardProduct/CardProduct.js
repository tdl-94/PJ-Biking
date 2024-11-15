import React, { useEffect, useState } from "react";
import "./CardProduct.css";
import { UseCart } from "../../../context/CartContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CardProduct = ({ id, image, title, price, colors, type, sale }) => {
  console.log(id, image, title, price, colors, type, sale, "sdad");
  const [selectedOption, setSelectedOption] = useState("");
  const [images, setImage] = useState(image); // Sử dụng props.image làm hình ảnh mặc định
  const handleChangeColor = (e) => {
    setImage(e.target.options[e.target.selectedIndex].dataset.url);
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    setImage(image);
  }, [image]);
  const { handleAddCart } = UseCart();

  return (
    <div>
      <div className="product-card ">
        <span>New</span>
        <h2>{title} </h2>
        <p>TYPE: {type}</p>
        <div className="img-card">
          <img src={images} alt="" />
        </div>
        <div className="rate">
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </div>
        <p>color:</p>
        <select
          className="btn-transparent"
          id="options"
          value={selectedOption}
          onChange={handleChangeColor}
        >
          {colors?.map((item) => (
            <option data-url={item.img} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>

        <div className="product-bottom">
          <div className="product-price">
            <div className="price-item">
              {sale && (
                <>
                  <p>{sale}.00</p>
                  <p> USD</p>
                </>
              )}
            </div>
            <div className="price-item">
              {price && (
                <>
                  <p className={`price-og${!sale ? " current" : ""}`}>
                    {price}.00{" "}
                  </p>
                  <span> USD</span>
                </>
              )}
            </div>
          </div>
          <div className="btn-flex">
            <button
              onClick={() =>
                handleAddCart(
                  { id, image, title, price, colors, type, sale },
                )
              }
              className="btn-primary"
            >
              ADD TO CART
            </button>
       
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
