import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import { UseCart } from "../../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const [menu, setMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const menuRef = useRef();
  const inconRef = useRef();
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setMenu(false);
      }
      if (inconRef.current.contains(e.target)) {
        setMenu(true);
      }
    };
    document.addEventListener("click", handleClickOutside);
  }, []);
  const { cart } = UseCart();
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?keysearch=${e.target.querySelector("input").value}`);
  };
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
  

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="sidebar">
          <ul className={`menu ${menu ? "active" : ""}`} ref={menuRef}>
            <i className="fa-solid fa-x" onClick={() => setMenu(false)}></i>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/listproduct">Product</Link>
            </li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="thumb">
          <img
            src="https://biking-workdo.myshopify.com/cdn/shop/files/Motor..png?v=1681724021"
            alt=""
          />
        </div>
        <div className="menu-right">
          <div className="user-login">
            <i className="fa-regular fa-user"></i>
          </div>
          <div className="cart-header">
            <div className="cart">
              <span className="label">
                My Cart:
                <b>
                  {cart
                    .reduce((prev, current) => {
                      return prev + current.quantity * current.price;
                    }, 0)
                    .toFixed(2)}

                  <span className="currency-type"> USD </span>
                </b>
              </span>
              <div className="cart-store">
                <Link to="/cart">
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 19 19"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clipRule="evenodd"
                      d="M7.91797 15.834C7.91797 17.1457 6.85465 18.209 5.54297 18.209C4.23129 18.209 3.16797 17.1457 3.16797 15.834C3.16797 14.5223 4.23129 13.459 5.54297 13.459C6.85465 13.459 7.91797 14.5223 7.91797 15.834ZM6.33464 15.834C6.33464 16.2712 5.98019 16.6257 5.54297 16.6257C5.10574 16.6257 4.7513 16.2712 4.7513 15.834C4.7513 15.3968 5.10574 15.0423 5.54297 15.0423C5.98019 15.0423 6.33464 15.3968 6.33464 15.834Z"
                      fill="white"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clipRule="evenodd"
                      d="M15.8346 15.834C15.8346 17.1457 14.7713 18.209 13.4596 18.209C12.148 18.209 11.0846 17.1457 11.0846 15.834C11.0846 14.5223 12.148 13.459 13.4596 13.459C14.7713 13.459 15.8346 14.5223 15.8346 15.834ZM14.2513 15.834C14.2513 16.2712 13.8969 16.6257 13.4596 16.6257C13.0224 16.6257 12.668 16.2712 12.668 15.834C12.668 15.3968 13.0224 15.0423 13.4596 15.0423C13.8969 15.0423 14.2513 15.3968 14.2513 15.834Z"
                      fill="white"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clipRule="evenodd"
                      d="M1.66578 2.01983C1.86132 1.62876 2.33685 1.47025 2.72792 1.66578L3.52236 2.06301C4.25803 2.43084 4.75101 3.15312 4.82547 3.97225L4.86335 4.38888C4.88188 4.59276 5.05283 4.74887 5.25756 4.74887H15.702C17.0838 4.74887 18.0403 6.12909 17.5551 7.42297L16.1671 11.1245C15.8195 12.0514 14.9333 12.6655 13.9433 12.6655H6.19479C4.96644 12.6655 3.94076 11.7289 3.82955 10.5056L3.24864 4.1156C3.22382 3.84255 3.05949 3.60179 2.81427 3.47918L2.01983 3.08196C1.62876 2.88643 1.47025 2.41089 1.66578 2.01983ZM5.47346 6.3322C5.2407 6.3322 5.05818 6.53207 5.07926 6.76388L5.40638 10.3622C5.44345 10.77 5.78534 11.0822 6.19479 11.0822H13.9433C14.2733 11.0822 14.5687 10.8775 14.6845 10.5685L16.0726 6.86702C16.1696 6.60825 15.9783 6.3322 15.702 6.3322H5.47346Z"
                      fill="white"
                    ></path>
                  </svg>
                </Link>
                <span className="count-1">
                  {cart.reduce((prev, current) => {
                    return prev + current.quantity;
                  }, 0)}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="close-menu">
          <i ref={inconRef} className="fa-solid fa-bars"></i>
        </div>
      </div>
      <div className="sub-header">
        <div className="anounce">
          <div className="annoucebar-left">
            <a href="/">
              <b>New Accessories -30 %</b> Off. <span>More</span>
            </a>
          </div>
          <div className="search-header">
            <form onSubmit={handleSearch}>
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                placeholder="Search product..."
                value={searchQuery}
                onChange={handleChange} // Cập nhật giá trị của input khi người dùng gõ
              />
              <button type="submit" style={{ display: "none" }}></button>{" "}
              {/* Ẩn nút submit nếu không cần thiết */}
              <i
                className="fa-solid fa-x"
                onClick={() => setSearchQuery("")}
              ></i>{" "}
              {/* Xóa khi click vào icon x */}
            </form>
          </div>
          <div className="annoucebar-right">
            <a href="/">
              <b>New Collections</b>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
