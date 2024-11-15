import React from "react";
import "./Cart.css";
import { UseCart } from "../../../context/CartContext";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cart, handleQuantity } = UseCart();

  return (
    <div className="box-cart">
      <div className="row">
        <div className="col-8">
          <div className="list-cartproduct">
            <div className="cart-info">
              <table class="cart-tble">
                <thead>
                  <tr>
                    <th colspan="1" scope="col">
                      IMAGE
                    </th>
                    <th colspan="1" scope="col">
                      NAME
                    </th>
                    <th colspan="1" scope="col">
                      PRICE
                    </th>
                    <th colspan="1" scope="col">
                      QUANTITY
                    </th>
                    <th colspan="1" scope="col">
                      TOTAL
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => (
                    <tr>
                      <td>
                        <div className="item_img">
                          <img src={item.image} alt="" />
                        </div>
                      </td>
                      <td>{item.title}</td>
                      <td>{item.price} USD</td>
                      <td>  <div className="quantity">
                        <span
                          type="minus"
                          onClick={() => handleQuantity("minus", index)}
                        >
                          <i className="fa fa-minus" aria-hidden="true"></i>
                        </span>
                        <input
                          type="text"
                          name="quantity"
                          value={item.quantity}
                          onChange={(e) => handleQuantity("change", index, e.target.value)} 

                        />
                        <span
                          type="plus"
                          onClick={() => handleQuantity("plus", index)}
                        >
                          <i className="fa fa-plus" aria-hidden="true"></i>
                        </span>
                      </div></td>
                      <td>
                        <span>{item.price * item.quantity}</span>USD
                      </td>
                      <td>
                        <div onClick={() => handleQuantity("delete", index)}>
                          <i className="fa-solid fa-trash-can"></i>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-4">
          <Link to="/checkout" className="s_button">
            <p className="btn-checkout">Proceed to Checkout </p>
          </Link>
          <div className="s_total">
            <div className="info">
              <div>SubTotal</div>
              <div className="total">
                <div className="cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span>
                    {cart
                      .reduce((prev, current) => {
                        return prev + current.quantity * current.price;
                      }, 0)
                      .toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
